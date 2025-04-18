// Game variables
let score = 0
let lives = 3
let gameActive = false
let soundEnabled = true
let circleInterval
let circles = []
let deviceType = "auto" // 'mobile', 'pc', or 'tablet'
let fallSpeed = 3 // Default fall speed in seconds

// Wait for DOM to be fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", function() {
  // DOM Elements
  const deviceSelectionScreen = document.getElementById("device-selection-screen")
  const homeScreen = document.getElementById("home-screen")
  const gameScreen = document.getElementById("game-screen")
  const gameOverScreen = document.getElementById("game-over-screen")
  const mobileBtn = document.getElementById("mobile-btn")
  const pcBtn = document.getElementById("pc-btn")
  const tabletBtn = document.getElementById("tablet-btn")
  const startBtn = document.getElementById("start-btn")
  const restartBtn = document.getElementById("restart-btn")
  const playAgainBtn = document.getElementById("play-again-btn")
  const backToHomeBtn = document.getElementById("back-to-home-btn")
  const soundToggle = document.getElementById("sound-toggle")
  const scoreDisplay = document.getElementById("score")
  const finalScoreDisplay = document.getElementById("final-score")
  const livesDisplay = document.getElementById("lives")
  const gameArea = document.getElementById("game-area")
  const redBtn = document.getElementById("red-btn")
  const greenBtn = document.getElementById("green-btn")
  const blueBtn = document.getElementById("blue-btn")
  const keyboardControls = document.getElementById("keyboard-controls")
  const audioBanner = document.getElementById("audio-permission-banner")

  // Sound effects - modified for better compatibility with Sololearn
  const correctSound = new Audio()
  correctSound.src = "https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3"

  const wrongSound = new Audio()
  wrongSound.src = "https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3"

  const gameOverSound = new Audio()
  gameOverSound.src = "https://assets.mixkit.co/sfx/preview/mixkit-player-losing-or-failing-2042.mp3"

  const backgroundMusic = new Audio()
  backgroundMusic.src = "https://assets.mixkit.co/sfx/preview/mixkit-game-level-music-689.mp3"
  backgroundMusic.loop = true

  // Add this function to safely play audio
  function safePlayAudio(audioElement) {
    // Only try to play if sound is enabled
    if (soundEnabled) {
      const playPromise = audioElement.play()

      // Play might not return a promise in all browsers
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented - this is expected in Sololearn
          console.log("Note: Audio autoplay is restricted in this environment")
          // Don't show the error in console
        })
      }
    }
  }

  // Auto-detect device type
  function detectDeviceType() {
    const ua = navigator.userAgent
    if (/Mobi|Android/i.test(ua) && window.innerWidth < 768) {
      return "mobile"
    } else if (/iPad|Tablet|Android/i.test(ua) || (window.innerWidth >= 768 && window.innerWidth < 1024)) {
      return "tablet"
    } else {
      return "pc"
    }
  }

  // Apply device-specific optimizations
  function applyDeviceOptimizations() {
    document.body.classList.remove("mobile-optimized", "pc-optimized", "tablet-optimized")

    // Auto-detect if not explicitly set
    if (deviceType === "auto") {
      deviceType = detectDeviceType()
    }

    document.body.classList.add(`${deviceType}-optimized`)

    // Device-specific adjustments
    if (deviceType === "mobile") {
      fallSpeed = 3.5 // Slightly slower for mobile
      if (keyboardControls) keyboardControls.classList.add("hidden")
    } else if (deviceType === "pc") {
      fallSpeed = 3 // Default speed for PC
      if (keyboardControls) keyboardControls.classList.remove("hidden")
    } else if (deviceType === "tablet") {
      fallSpeed = 3.2 // Medium speed for tablet
      if (keyboardControls) keyboardControls.classList.add("hidden")
    }
  }

  // Update the initGame function to use safePlayAudio
  function initGame() {
    score = 0
    lives = 3
    gameActive = true
    circles = []

    // Apply device optimizations
    applyDeviceOptimizations()

    // Update UI
    scoreDisplay.textContent = score
    updateLives()

    // Clear game area
    gameArea.innerHTML = ""

    // Start generating circles
    circleInterval = setInterval(createCircle, 1500)

    // Play background music
    safePlayAudio(backgroundMusic)
  }

  // Create a falling circle
  function createCircle() {
    if (!gameActive) return

    const colors = ["red", "green", "blue"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const randomPosition = Math.floor(Math.random() * (gameArea.offsetWidth - 50))

    const circle = document.createElement("div")
    circle.classList.add("circle", randomColor)
    circle.style.left = `${randomPosition}px`
    circle.dataset.color = randomColor

    // Set the fall animation duration based on device type
    circle.style.animationDuration = `${fallSpeed}s`

    gameArea.appendChild(circle)
    circles.push(circle)

    // Check if circle reaches bottom
    circle.addEventListener("animationend", () => {
      if (gameArea.contains(circle)) {
        // Circle reached bottom without being clicked
        missCircle()
        gameArea.removeChild(circle)
        circles = circles.filter((c) => c !== circle)
      }
    })
  }

  // Update the handleColorClick function to use safePlayAudio
  function handleColorClick(clickedColor) {
    if (!gameActive) return

    // Find the lowest circle that matches the clicked color
    const matchingCircles = circles.filter((circle) => circle.dataset.color === clickedColor)

    if (matchingCircles.length > 0) {
      // Sort by position (top value)
      matchingCircles.sort((a, b) => {
        return a.offsetTop - b.offsetTop
      })

      const lowestCircle = matchingCircles[matchingCircles.length - 1]

      // Remove the circle and update score
      gameArea.removeChild(lowestCircle)
      circles = circles.filter((c) => c !== lowestCircle)

      // Increase score
      score += 10
      scoreDisplay.textContent = score

      // Play correct sound
      if (soundEnabled) {
        correctSound.currentTime = 0
        safePlayAudio(correctSound)
      }
    } else {
      // Wrong color clicked
      missCircle()
    }
  }

  // Update the missCircle function to use safePlayAudio
  function missCircle() {
    lives--
    updateLives()

    if (soundEnabled) {
      wrongSound.currentTime = 0
      safePlayAudio(wrongSound)
    }

    if (lives <= 0) {
      endGame()
    }
  }

  // Update lives display
  function updateLives() {
    livesDisplay.innerHTML = ""
    for (let i = 0; i < lives; i++) {
      const heart = document.createElement("i")
      heart.classList.add("fas", "fa-heart")
      livesDisplay.appendChild(heart)
    }
  }

  // Update the endGame function to use safePlayAudio
  function endGame() {
    gameActive = false
    clearInterval(circleInterval)

    // Stop background music
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0

    // Play game over sound
    if (soundEnabled) {
      safePlayAudio(gameOverSound)
    }

    // Update final score
    finalScoreDisplay.textContent = score

    // Show game over screen
    gameScreen.classList.remove("active")
    gameOverScreen.classList.add("active")
  }

  // Replace the toggleSound function with this version
  function toggleSound() {
    soundEnabled = !soundEnabled

    if (soundEnabled) {
      soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>'
      // Try to play background music only if game is active
      if (gameActive) {
        // User has now interacted, try to play
        safePlayAudio(backgroundMusic)
      }
    } else {
      soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>'
      backgroundMusic.pause()
    }
  }

  // Handle keyboard controls
  function handleKeyPress(e) {
    if (!gameActive) return

    const key = e.key.toUpperCase()

    switch (key) {
      case "R":
        handleColorClick("red")
        animateButtonPress(redBtn)
        break
      case "G":
        handleColorClick("green")
        animateButtonPress(greenBtn)
        break
      case "B":
        handleColorClick("blue")
        animateButtonPress(blueBtn)
        break
      case "M":
        toggleSound()
        break
      case "ESCAPE":
        clearInterval(circleInterval)
        initGame()
        break
    }
  }

  // Animate button press for keyboard controls
  function animateButtonPress(button) {
    button.classList.add("pressed")
    setTimeout(() => {
      button.classList.remove("pressed")
    }, 100)
  }

  // Go to home screen
  function goToHomeScreen() {
    gameOverScreen.classList.remove("active")
    homeScreen.classList.add("active")
  }

  // Event Listeners for device selection
  mobileBtn.addEventListener("click", function() {
    deviceType = "mobile"
    deviceSelectionScreen.classList.remove("active")
    homeScreen.classList.add("active")
    applyDeviceOptimizations()
  })

  pcBtn.addEventListener("click", function() {
    deviceType = "pc"
    deviceSelectionScreen.classList.remove("active")
    homeScreen.classList.add("active")
    applyDeviceOptimizations()
  })

  tabletBtn.addEventListener("click", function() {
    deviceType = "tablet"
    deviceSelectionScreen.classList.remove("active")
    homeScreen.classList.add("active")
    applyDeviceOptimizations()
  })

  // Game control event listeners
  startBtn.addEventListener("click", function() {
    homeScreen.classList.remove("active")
    gameScreen.classList.add("active")
    initGame()
  })

  restartBtn.addEventListener("click", function() {
    clearInterval(circleInterval)
    initGame()
  })

  playAgainBtn.addEventListener("click", function() {
    gameOverScreen.classList.remove("active")
    gameScreen.classList.add("active")
    initGame()
  })

  backToHomeBtn.addEventListener("click", goToHomeScreen)

  soundToggle.addEventListener("click", toggleSound)

  // Color button event listeners - FIXED for mobile touch
  redBtn.addEventListener("click", function() {
    handleColorClick("red")
  })

  greenBtn.addEventListener("click", function() {
    handleColorClick("green")
  })

  blueBtn.addEventListener("click", function() {
    handleColorClick("blue")
  })

  // Add touch support for mobile - IMPROVED
  redBtn.addEventListener("touchstart", function(e) {
    e.preventDefault()
    handleColorClick("red")
  })

  greenBtn.addEventListener("touchstart", function(e) {
    e.preventDefault()
    handleColorClick("green")
  })

  blueBtn.addEventListener("touchstart", function(e) {
    e.preventDefault()
    handleColorClick("blue")
  })

  // Keyboard controls
  document.addEventListener("keydown", handleKeyPress)

  // Set audio to low volume to be less intrusive
  correctSound.volume = 0.5
  wrongSound.volume = 0.5
  gameOverSound.volume = 0.5
  backgroundMusic.volume = 0.3

  // Preload audio
  try {
    correctSound.load()
    wrongSound.load()
    gameOverSound.load()
    backgroundMusic.load()
  } catch (e) {
    console.log("Audio preloading not supported")
  }

  // Auto-detect device type on load
  deviceType = detectDeviceType()
  applyDeviceOptimizations()

  // Prevent scrolling on touch devices when interacting with the game
  document.addEventListener(
    "touchmove",
    function(e) {
      if (gameActive) {
        e.preventDefault()
      }
    },
    { passive: false },
  )

  // Handle window resize
  window.addEventListener("resize", function() {
    if (deviceType === "auto") {
      applyDeviceOptimizations()
    }
  })

  // Handle audio permission banner
  audioBanner.addEventListener("click", function() {
    // Try to play all sounds once to grant permission
    correctSound
      .play()
      .then(function() {
        correctSound.pause()
        correctSound.currentTime = 0
      })
      .catch(function() {})

    wrongSound
      .play()
      .then(function() {
        wrongSound.pause()
        wrongSound.currentTime = 0
      })
      .catch(function() {})

    gameOverSound
      .play()
      .then(function() {
        gameOverSound.pause()
        gameOverSound.currentTime = 0
      })
      .catch(function() {})

    backgroundMusic
      .play()
      .then(function() {
        backgroundMusic.pause()
        backgroundMusic.currentTime = 0
      })
      .catch(function() {})

    // Hide the banner
    audioBanner.style.display = "none"
  })

  // Add special handling for mobile touch events
  if (deviceType === "mobile" || deviceType === "tablet") {
    // Make device selection buttons work better on touch
    mobileBtn.addEventListener("touchstart", function(e) {
      e.preventDefault()
      deviceType = "mobile"
      deviceSelectionScreen.classList.remove("active")
      homeScreen.classList.add("active")
      applyDeviceOptimizations()
    })

    pcBtn.addEventListener("touchstart", function(e) {
      e.preventDefault()
      deviceType = "pc"
      deviceSelectionScreen.classList.remove("active")
      homeScreen.classList.add("active")
      applyDeviceOptimizations()
    })

    tabletBtn.addEventListener("touchstart", function(e) {
      e.preventDefault()
      deviceType = "tablet"
      deviceSelectionScreen.classList.remove("active")
      homeScreen.classList.add("active")
      applyDeviceOptimizations()
    })

    // Make audio banner work better on touch
    audioBanner.addEventListener("touchstart", function(e) {
      e.preventDefault()
      // Try to play all sounds once to grant permission
      correctSound
        .play()
        .then(function() {
          correctSound.pause()
          correctSound.currentTime = 0
        })
        .catch(function() {})

      // Hide the banner
      audioBanner.style.display = "none"
    })
  }
})