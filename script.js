
window.onload = () => {
    isplaying = false;
    islooping = false;
    isshuffling = false;
   num=1;
   alert("The features of my Spotify\n\n🔥 New and Nice UI\n\n🔥 Beautiful background images\n\n🔥 Added a Theme store where you can change themes\n\n🔥 You can actually listen songs\n\n🔥 Glass background for objects");
 document.getElementById("start-page").style.display = "none";
    document.getElementById("nav-bar").style.display = "block";
    document.getElementById("mainpage").style.display = "block";
    snum = 1;
    document.getElementById(num).addEventListener("ended", () => {
        if (islooping) {
            document.getElementById(num).play();
        }
        else if (isshuffling) {
            randomNum = Math.floor(Math.random() * 23) + 1;
            if (randomNum == 0)
                randomNum = 1;
            if (randomNum == snum)
            {
                snum++;
                if(snum >= 24)
                    snum = 1;
                musicPlayer(snum);
                document.getElementById(snum).play();
            }
            else
            {
                musicPlayer(randomNum);
            }

        }
        else
            next();
    });
}

function themeChange() {
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("themeStore").style.display = "block";
}

function showhome() {
    document.getElementById("mainpage").style.display = "block";
    document.getElementById("your-library").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("premium").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("music-player").style.display = "none";
    document.getElementById("themeStore").style.display = "none";
    if(document.getElementById(snum).paused == false)
    {
        document.getElementById(snum).pause();
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }

    else if(document.getElementsByClassName("play-pause")[0].innerText == "pause")
    {
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }
}
function showsearch() {
    document.getElementById("mainpage").style.display = "block";
    document.getElementById("your-library").style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("premium").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("music-player").style.display = "none";
    document.getElementById("themeStore").style.display = "none";
    if(document.getElementById(snum).paused == false)
    {
        document.getElementById(snum).pause();
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }

    else if(document.getElementsByClassName("play-pause")[0].innerText == "pause")
    {
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }
}

function showlibrary() {
    document.getElementById("mainpage").style.display = "block";
    document.getElementById("your-library").style.display = "block";
    document.getElementById("search").style.display = "none";
    document.getElementById("premium").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("music-player").style.display = "none";
    document.getElementById("themeStore").style.display = "none";
    if(document.getElementById(snum).paused == false)
    {
        document.getElementById(snum).pause();
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }

    else if(document.getElementsByClassName("play-pause")[0].innerText == "pause")
    {
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }
}

function showpremium() {
    document.getElementById("mainpage").style.display = "block";
    document.getElementById("your-library").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("premium").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("music-player").style.display = "none";
    document.getElementById("themeStore").style.display = "none";
    if(document.getElementById(snum).paused == false)
    {
        document.getElementById(snum).pause();
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }

    else if(document.getElementsByClassName("play-pause")[0].innerText == "pause")
    {
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }
}

function playlist() {
    document.getElementById("playlist").style.borderBottom = "2px solid green";
    document.getElementById("artist").style.borderBottom = "none";
    document.getElementById("albums").style.borderBottom = "none";
    document.getElementsByClassName("p-a-e-d-s")[0].style.display = "block";
    document.getElementsByClassName("artist-info-page")[0].style.display = "none";
    if (document.getElementById("playlist").innerText == "Playlists") {
        document.getElementsByClassName("p-a-e-d-s-h1")[0].innerText = "Create your first playlist";
        document.getElementsByClassName("p-a-e-d-s-p")[0].innerText = "It's easy, we will help you";
        document.getElementsByClassName("p-a-e-d-s-span")[0].style.display = "inline-block";
        document.getElementsByClassName("p-a-e-d-s-span")[0].innerText = "CREATE PLAYLIST";
    }
    else {
        document.getElementsByClassName("p-a-e-d-s-h1")[0].innerText = "Looking for something to Listen to?";
        document.getElementsByClassName("p-a-e-d-s-p")[0].innerText = "";
        document.getElementsByClassName("p-a-e-d-s-span")[0].style.display = "inline-block";
        document.getElementsByClassName("p-a-e-d-s-span")[0].innerText = "BROWSE PODCASTS";
    }

}

function artists() {
    document.getElementById("playlist").style.borderBottom = "none";
    document.getElementById("artist").style.borderBottom = "2px solid green";
    document.getElementById("albums").style.borderBottom = "none";
    if (document.getElementById("artist").innerText == "Artists") {
        document.getElementsByClassName("p-a-e-d-s")[0].style.display = "none";
        document.getElementsByClassName("artist-info-page")[0].style.display = "block";
    }
    else {
        document.getElementsByClassName("p-a-e-d-s-h1")[0].innerText = "No downloads yet";
        document.getElementsByClassName("p-a-e-d-s-p")[0].innerHTML = "Tap &#x21e9; on an episod to listen without a connection";
        document.getElementsByClassName("p-a-e-d-s-span")[0].style.display = "inline-block";
        document.getElementsByClassName("p-a-e-d-s-span")[0].innerText = "BROWSE PODCASTS";
    }

}

function albums() {
    document.getElementById("playlist").style.borderBottom = "none";
    document.getElementById("artist").style.borderBottom = "none";
    document.getElementById("albums").style.borderBottom = "2px solid green";
    document.getElementsByClassName("p-a-e-d-s")[0].style.display = "block";
    document.getElementsByClassName("artist-info-page")[0].style.display = "none";
    if (document.getElementById("albums").innerText == "Albums") {
        document.getElementsByClassName("p-a-e-d-s-h1")[0].innerText = "Your albums will appear here";
        document.getElementsByClassName("p-a-e-d-s-p")[0].innerText = "";
        document.getElementsByClassName("p-a-e-d-s-span")[0].style.display = "none";
    }
    else {
        document.getElementsByClassName("p-a-e-d-s-h1")[0].innerText = "You haven't followed any podcast yet";
        document.getElementsByClassName("p-a-e-d-s-p")[0].innerText = "When you follow a podcast, you'll get new episodes automatically";
        document.getElementsByClassName("p-a-e-d-s-span")[0].style.display = "inline-block";
        document.getElementsByClassName("p-a-e-d-s-span")[0].innerText = "BROWSE PODCASTS";
    }

}

function music() {
    document.getElementById("m-p-podcasts").style.fontWeight = "normal";
    document.getElementById("m-p-music").style.fontWeight = "bold";
    document.getElementById("playlist").innerText = "Playlists";
    document.getElementById("artist").innerText = "Artists";
    document.getElementById("albums").innerText = "Albums";
    playlist();
}

function podcasts() {
    document.getElementById("m-p-podcasts").style.fontWeight = "bold";
    document.getElementById("m-p-music").style.fontWeight = "normal";
    document.getElementById("playlist").innerText = "Episodes";
    document.getElementById("artist").innerText = "Downloads";
    document.getElementById("albums").innerText = "Shows";
    playlist();
}

function musicPlayer(num) {
    document.getElementById("home").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("your-library").style.display = "none";
    document.getElementById("premium").style.display = "none";
    document.getElementById("music-player").style.display = "block";
    snum = num;
    
    if (num == 1) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/ydZzxx0/Taare-Ginn-Lyrics-Dil-Bechara.jpg");
    }
    else if (num == 2) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/tzr8tBD/size-xxl-1580277626.webp");
    }
    else if (num == 3) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/zFhSXqz/mera-intezaar-karna-lyrics-armaan-malik.jpg");
    }
    else if (num == 4) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/W6MspNm/40ab8e79ffd498c21b067b3f30e328fc.jpg");
    }
    else if (num == 5) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/G2C9zqg/teri-aankhon-mein.jpg");
    }
    else if (num == 6) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/NL81Zxh/b41cfa4986a21aac5d5d83bcebe04a1b.jpg");
    }
    else if (num == 7) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/QNZvWwQ/tere-naal1.jpg");
    }
    else if (num == 8) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/QFhFj4g/kabir-singh-1.webp");
    }
    else if (num == 9) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/YhWQJ7Y/2f6094a5fa70f38c38d588c28fe41a23.jpg");
    }
    else if (num == 10) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/Z6g41HL/size-xxl-1560502248.webp");
    }
    else if (num == 11) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/X7mDcYD/ab67706c0000bebb82164921917863f746512d36.jpg");
    }
    else if (num == 12) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/MsrMXYr/images-q-tbn-ANd9-Gc-QFk-Ovf3f-WHfj6l-Ps-X86-Fe-Kx-0-HXu984aj6-Eg-usqp-CAU.jpg");
    }
    else if (num == 13) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById(num).preload;
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/4pKJBsQ/poster-504x498-f8f8f8-pad-600x600-f8f8f8.jpg");
    }
    else if (num == 14) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/6rbGXYk/Savage-Love-English-2020-20200209181756-500x500.jpg");
    }
    else if (num == 15) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/RbM9vzM/EYk-Rh-TVX0-AAJWar.jpg");
    }
    else if (num == 16) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/nCjDMrP/2262f2a66dcd817ef866f7761d4994c6.jpg");
    }
    else if (num == 17) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/R2V6n2y/f9bf2544de89efe9717dbe4b3d0acb12.jpg");
    }
    else if (num == 18) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/5kw1yHm/Eg-Xz-Q43-U4-AAVIYR.jpg");
    }
    else if (num == 19) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/sv0mTgq/eea36d0db167f59443c4b1a44782cbf5.jpg");
    }
    else if (num == 20) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/RDSmcx8/size-xxl-1580302577.webp");
    }
    else if (num == 21) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/NF129yY/img-20190625-113855-jxbus2lx.jpg");
    }
    else if (num == 22) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/SxfFj7Q/08a592ab85ed83d83bfdaa7938437245.jpg");
    }
    else if (num == 23) {
        document.getElementById("music-player-image").removeAttribute("src");
        document.getElementById("music-player-image").setAttribute("src", "https://i.ibb.co/NYVHksZ/dce8fccbc2491e86e5c903115d971e9d.jpg");
    }

}

function playSong() {
    if (isplaying) {
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
        if (snum == 1) {
            document.getElementById(snum).pause();
        }
        else if (snum == 2) {
            document.getElementById(snum).pause();
        }
        else if (snum == 3) {
            document.getElementById(snum).pause();
        }
        else if (snum == 4) {
            document.getElementById(snum).pause();
        }
        else if (snum == 5) {
            document.getElementById(snum).pause();
        }
        else if (snum == 6) {
            document.getElementById(snum).pause();
        }
        else if (snum == 7) {
            document.getElementById(snum).pause();
        }
        else if (snum == 8) {
            document.getElementById(snum).pause();
        }
        else if (snum == 9) {
            document.getElementById(snum).pause();
        }
        else if (snum == 10) {
            document.getElementById(snum).pause();
        }
        else if (snum == 11) {
            document.getElementById(snum).pause();
        }
        else if (snum == 12) {
            document.getElementById(snum).pause();
        }
        else if (snum == 13) {
            document.getElementById(snum).pause();
        }
        else if (snum == 14) {
            document.getElementById(snum).pause();
        }
        else if (snum == 15) {
            document.getElementById(snum).pause();
        }
        else if (snum == 16) {
            document.getElementById(snum).pause();
        }
        else if (snum == 17) {
            document.getElementById(snum).pause();
        }
        else if (snum == 18) {
            document.getElementById(snum).pause();
        }
        else if (snum == 19) {
            document.getElementById(snum).pause();
        }
        else if (snum == 20) {
            document.getElementById(snum).pause();
        }
        else if (snum == 21) {
            document.getElementById(snum).pause();
        }
        else if (snum == 22) {
            document.getElementById(snum).pause();
        }
        else if (snum == 23) {
            document.getElementById(snum).pause();
        }
    }

    else {
        document.getElementsByClassName("play-pause")[0].innerText = "pause";
        isplaying = true;
        if (snum == 1) {
            document.getElementById(snum).play();
        }
        else if (snum == 2) {
            ;
        }
        else if (snum == 3) {
            document.getElementById(snum).play();
        }
        else if (snum == 4) {
            document.getElementById(snum).play();
        }
        else if (snum == 5) {
            document.getElementById(snum).play();
        }
        else if (snum == 6) {
            document.getElementById(snum).play();
        }
        else if (snum == 7) {
            document.getElementById(snum).play();
        }
        else if (snum == 8) {
            document.getElementById(snum).play();
        }
        else if (snum == 9) {
            document.getElementById(snum).play();
        }
        else if (snum == 10) {
            document.getElementById(snum).play();
        }
        else if (snum == 11) {
            document.getElementById(snum).play();
        }
        else if (snum == 12) {
            document.getElementById(snum).play();
        }
        else if (snum == 13) {
            document.getElementById(snum).play();
        }
        else if (snum == 14) {
            document.getElementById(snum).play();
        }
        else if (snum == 15) {
            document.getElementById(snum).play();
        }
        else if (snum == 16) {
            document.getElementById(snum).play();
        }
        else if (snum == 17) {
            document.getElementById(snum).play();
        }
        else if (snum == 18) {
            document.getElementById(snum).play();
        }
        else if (snum == 19) {
            document.getElementById(snum).play();
        }
        else if (snum == 20) {
            document.getElementById(snum).play();
        }
        else if (snum == 21) {
            document.getElementById(snum).play();
        }
        else if (snum == 22) {
            document.getElementById(snum).play();
        }
        else if (snum == 23) {
            document.getElementById(snum).play();
        }
    }

}

function next() {
    if(document.getElementById(snum).paused == false)
    {
        document.getElementById(snum).pause();
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }

    else if(document.getElementsByClassName("play-pause")[0].innerText == "pause")
    {
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }   
    snum = snum + 1;
    if (snum == 24) {
        snum = 1;
    }

    document.getElementsByClassName("repeat")[0].style.color = "rgb(47,47,47)";
    islooping = false;
    document.getElementsByClassName("shuffle")[0].style.color = "rgb(47,47,47)";
    isshuffling = false;
    musicPlayer(snum);
}

function previous() {
    if(document.getElementById(snum).paused == false)
    {
        document.getElementById(snum).pause();
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }

    else if(document.getElementsByClassName("play-pause")[0].innerText == "pause")
    {
        document.getElementsByClassName("play-pause")[0].innerText = "play_arrow";
        isplaying = false;
    }
    
    snum = snum - 1;
    if (snum == 0) {
        snum = 23;
    }
    document.getElementsByClassName("repeat")[0].style.color = "rgb(47,47,47)";
    islooping = false;
    document.getElementsByClassName("shuffle")[0].style.color = "rgb(47,47,47)";
    isshuffling = false;
    musicPlayer(snum);
}

function loop() {
    if (islooping) {
        document.getElementsByClassName("repeat")[0].style.color = "rgb(47,47,47)";
        islooping = false;
    }
    else {
        document.getElementsByClassName("repeat")[0].style.color = "black";
        islooping = true;
    }

}

function shuffle() {
    if (isshuffling) {
        document.getElementsByClassName("shuffle")[0].style.color = "rgb(47,47,47)";
        isshuffling = false;
    }
    else {
        document.getElementsByClassName("shuffle")[0].style.color = "black";
        isshuffling = true;
    }

}

function theme(number)
{
    document.getElementsByClassName("first")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("second")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("third")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("fourth")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("fifth")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("sixth")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("seventh")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("eighth")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("nineth")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName("tenth")[0].style.boxShadow = "0 0 10px rgb(18, 18, 18)";
    document.getElementsByClassName(number)[0].style.boxShadow = "0 0 10px white";

    if(number == "first")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/TYDBJrb/03c59b734425c4948be50b5925ed7189.jpg')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/TYDBJrb/03c59b734425c4948be50b5925ed7189.jpg')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/TYDBJrb/03c59b734425c4948be50b5925ed7189.jpg')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/TYDBJrb/03c59b734425c4948be50b5925ed7189.jpg')";
    }
    else if(number == "second")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/G396V66/wp4748688.jpg')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/G396V66/wp4748688.jpg')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/G396V66/wp4748688.jpg')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/G396V66/wp4748688.jpg')";
    }
    else if(number == "third")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/Cm5d41t/e0b472784cfe4bf74a516d5213d873fd.jpg')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/Cm5d41t/e0b472784cfe4bf74a516d5213d873fd.jpg')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/Cm5d41t/e0b472784cfe4bf74a516d5213d873fd.jpg')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/Cm5d41t/e0b472784cfe4bf74a516d5213d873fd.jpg')";
    }
    else if(number == "fourth")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/8stDyrm/gh0w-Qe13oo-Ucv-O59j-KPMd7k-Vr-RF8-UY4c-TMt5pk5-UQR9-Dmb-RNr-P01u-SX1-9af-Nqp8ni62k-B46-El-Osmxfg-YE.jpg')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/8stDyrm/gh0w-Qe13oo-Ucv-O59j-KPMd7k-Vr-RF8-UY4c-TMt5pk5-UQR9-Dmb-RNr-P01u-SX1-9af-Nqp8ni62k-B46-El-Osmxfg-YE.jpg')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/8stDyrm/gh0w-Qe13oo-Ucv-O59j-KPMd7k-Vr-RF8-UY4c-TMt5pk5-UQR9-Dmb-RNr-P01u-SX1-9af-Nqp8ni62k-B46-El-Osmxfg-YE.jpg')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/8stDyrm/gh0w-Qe13oo-Ucv-O59j-KPMd7k-Vr-RF8-UY4c-TMt5pk5-UQR9-Dmb-RNr-P01u-SX1-9af-Nqp8ni62k-B46-El-Osmxfg-YE.jpg')";
    }
    else if(number == "fifth")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/0Fnpgrx/4536593.jpg')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/0Fnpgrx/4536593.jpg')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/0Fnpgrx/4536593.jpg')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/0Fnpgrx/4536593.jpg')";
    }
    else if(number == "sixth")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/tbzcRzB/d7c7a53c45cfb55b0c1fbdb9c35fb9c9.png')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/tbzcRzB/d7c7a53c45cfb55b0c1fbdb9c35fb9c9.png')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/tbzcRzB/d7c7a53c45cfb55b0c1fbdb9c35fb9c9.png')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/tbzcRzB/d7c7a53c45cfb55b0c1fbdb9c35fb9c9.png')";
    }
    else if(number == "seventh")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/rpgQX4c/7c33f78ca6c13ab76714a9ac634f53e7.png')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/rpgQX4c/7c33f78ca6c13ab76714a9ac634f53e7.png')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/rpgQX4c/7c33f78ca6c13ab76714a9ac634f53e7.png')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/rpgQX4c/7c33f78ca6c13ab76714a9ac634f53e7.png')";
    }
    else if(number == "eighth")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/L0sRJfw/335372.jpg')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/L0sRJfw/335372.jpg')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/L0sRJfw/335372.jpg')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/L0sRJfw/335372.jpg')";
    }
    else if(number == "nineth")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/mzFwNFx/71b583c3ed23c5549018e8075418c559.jpg')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/mzFwNFx/71b583c3ed23c5549018e8075418c559.jpg')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/mzFwNFx/71b583c3ed23c5549018e8075418c559.jpg')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/mzFwNFx/71b583c3ed23c5549018e8075418c559.jpg')";
    }
    else if(number == "tenth")
    {
        document.getElementById("home").style.backgroundImage = "url('https://i.ibb.co/n39x3tz/2e994ceda9a67bc0f82161cca9bb9123.png')";
        document.getElementById("search-items").style.backgroundImage = "url('https://i.ibb.co/n39x3tz/2e994ceda9a67bc0f82161cca9bb9123.png')";
        document.getElementsByClassName("your-library-color")[0].style.backgroundImage = "url('https://i.ibb.co/n39x3tz/2e994ceda9a67bc0f82161cca9bb9123.png')";
        document.getElementById("premium").style.backgroundImage = "url('https://i.ibb.co/n39x3tz/2e994ceda9a67bc0f82161cca9bb9123.png')";
    }
}
