
// CREATE VARIABLES

    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('artist');
    const songImg = document.getElementById('song-img');
    const songNextUp = document.getElementById('song-next-up');

    const playBtn = document.getElementById('play-btn');
    const playBtnIcon = document.getElementById('play-icon');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const audioPlayer = document.getElementById('music-player');

    let currentSongIndex;
    let nextSongIndex;


//PLAYLIST 
    let songs = [
        {
            title: '愛を知るまでは',
            artist: '愛みょん',
            songPath: 'music/あいみょん – 愛を知るまでは.mp3',
            imgPath: 'images/愛みょん.jpeg'
        },
        {
            title: 'Position',
            artist: 'Ariana Grande',
            songPath: 'music/Ariana Grande - positions.mp3',
            imgPath: 'images/ariana grande.webp'
        },
        {
            title: '今夜はこのまま',
            artist: 'あいみょん',
            songPath: 'music/あいみょん - 今夜このまま.mp3',
            imgPath: 'images/あいみょん.jpeg'
        },
        {
            title: 'Good Day',
            artist: 'IU',
            songPath: 'music/IU Good Day.mp3',
            imgPath: 'images/IU.jpeg'
        },
        {
            title: 'No Tears Left To Cry',
            artist: 'Ariana Grande',
            songPath: 'music/Ariana Grande - no tears left to cry .mp3',
            imgPath: 'images/Ariana-Grande.webp'
        },
        {
            title: 'Blank Space',
            artist: 'Taylor Swift',
            songPath: 'music/Taylor Swift - Blank Space.mp3',
            imgPath: 'images/Taylor Swift.webp'
        }
    ];


//PLAYBUTTON
    playBtn.addEventListener('click', TogglePlaySong);
    nextBtn.addEventListener('click', () => ChangeSong())
    prevBtn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

//FUNCTIONS
    function InitPlayer() {
        currentSongIndex = 0;
        nextSongIndex = currentSongIndex + 1;
        UpdatePlayer();
    }

    function UpdatePlayer() {
        let song = songs[currentSongIndex];
        songImg.style = "background-image: url('" + song.imgPath + "')";
        songTitle.innerText = song.title;
        songArtist.innerHTML = song.artist;
        songNextUp.innerHTML = songs[nextSongIndex].title + "   by " + songs[nextSongIndex].artist;

        audioPlayer.src = song.songPath;
    }

    function TogglePlaySong() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtnIcon.classList.remove('fa-play');
            playBtnIcon.classList.add('fa-pause');
        } else {
            audioPlayer.pause();
            playBtnIcon.classList.add('fa-play');
            playBtnIcon.classList.remove('fa-pause');
        }
    }

    function ChangeSong(next = true) {
        if (next) {
            currentSongIndex++;
            nextSongIndex = currentSongIndex + 1;

            if (currentSongIndex > songs.length - 1) {
                currentSongIndex = 0;
                nextSongIndex = currentSongIndex + 1;
            }
            if (nextSongIndex > songs.length - 1) {
                nextSongIndex = 0;
            }
        } else {
            currentSongIndex--;
            nextSongIndex = currentSongIndex + 1;

            if (currentSongIndex < 0) {
                currentSongIndex = songs.length - 1;
                nextSongIndex = 0;
            }

        }

    //CALLBACK
        UpdatePlayer();
        TogglePlaySong();
        
    }


    
