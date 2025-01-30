const time = document.querySelector(".time");
const date = document.querySelector(".date");

const data = [
  {
    filename: "Nibble app",
    link: "https://nibbleapp.vercel.app/",
    icon: "./image/logo-food.png",
  },
  {
    filename: "Check chest scary game",
    link: "https://check-chest-scary-game.vercel.app",
    icon: "./image/chest.png",
  },
  {
    filename: "V-Comp",
    link: "https://v-comp-app-murtozayev.vercel.app/",
    icon: "./image/pc.png",
  },
  {
    filename: "My Github",
    link: "https://github.com/murtozayev",
    icon: "./image/github.png",
  },
  {
    filename: "Dashboard Landing Page",
    link: "https://admin-dash-navy.vercel.app/",
    icon: "./image/dash.png",
  },
  {
    filename: "Gamics",
    link: "https://gamics-ivory.vercel.app",
    icon: "./image/gamics.png",
  },
  {
    filename: "React Music Player",
    link: "https://react-music-player-seven-inky.vercel.app/",
    icon: "./image/music.png",
  },
  {
    filename: "WI school landing page",
    link: "https://wischool-pied.vercel.app/",
    icon: "./image/school.png",
  },
  {
    filename: "Weather APP",
    link: "https://weather-app-ten-brown-84.vercel.app/",
    icon: "./image/weather.webp",
  },
  {
    filename: "Full Stack CRUD",
    link: "https://crud-app-snowy-ten.vercel.app",
    icon: "./image/crud.png",
  },
];

const songs = [
  {
    artist: "Royal Blood",
    title: "Out the black",
    id: 1,
    src: "Royal Blood - Out of the Black (Royal Blood Album) [HD].mp3",
  },
  { artist: "Alan Walker", title: "Headlights", id: 2, src: "Headlights.mp3" },
  {
    artist: "Alan Walker",
    title: "Lonely",
    id: 3,
    src: "Steve Aoki   Alan Walker - Are You Lonely feat. ISAK (Lyric.mp3",
  },
  {
    artist: "Alan Walker",
    title: "Lonely Toghter",
    id: 4,
    src: "Avicii ft. Rita Ora - Lonely Together (Alan Walker Remix).mp3",
  },
  { artist: "Alan Walker", title: "Sorry", id: 5, src: "Sorry.mp3" },
  { artist: "Alan Walker", title: "On my way", id: 6, src: "on-my-way.m4a" },
  {
    artist: "Alan Walker",
    title: "Ignite",
    id: 7,
    src: "ANDREI_DEIU_IGNITE_FITNESS_MOTIVATION_MxP76LQjuYg_140.m4a",
  },
  {
    artist: "Alan Walker",
    title: "Diamond Heart",
    id: 8,
    src: "Alan Walker - Diamond Heart (feat. Sophia Somajo).mp3",
  },
  {
    artist: "Alan Walker",
    title: "Different World",
    id: 9,
    src: "Alan Walker - Different World feat. Sofia Carson, K-391   CO.mp3",
  },
  {
    artist: "Alan Walker",
    title: "Lily",
    id: 10,
    src: "Alan Walker, K-391 & Emelie Hollow - Lily (Lyrics).mp3",
  },
  {
    artist: "Alan Walker",
    title: "Alone",
    id: 11,
    src: "Alan Walker & Ava Max - Alone, Pt. II.mp3",
  },
  {
    artist: "Boys Noize",
    title: "Alarm",
    id: 12,
    src: "BOYS NOIZE - Alarm (WHO AM I O.S.T.) (Official Audio).mp3",
  },
  {
    artist: "Eminem",
    title: "Lose Yourself",
    id: 13,
    src: "Eminem_-_Lose_Yourself___Emimem.mp3",
  },
  {
    artist: "Eminem",
    title: "Rap God",
    id: 14,
    src: "Eminem - Rap God (Explicit).mp3",
  },
  {
    artist: "Eminem",
    title: "Godzilla",
    id: 15,
    src: "07_Godzilla_(feat._Juice_WRLD).m4a",
  },
  {
    artist: "Eminem",
    title: "Ass Like That",
    id: 16,
    src: "Ass Like That.mp3",
  },
  {
    artist: "Neffex",
    title: "Desperate",
    id: 17,
    src: "NEFFEX_x_NCS_-_DESPERATE_⛓_(Copyright-Free)_No.203.mp3",
  },
  {
    artist: "Neffex",
    title: "King is dead",
    id: 18,
    src: "NEFFEX_-_The_King_Is_Dead_--_[Copyright_Free]_No.197.mp3",
  },
  { artist: "Neffex", title: "Stay Strong", id: 19, src: "Stay-strong.m4a" },
  {
    artist: "Neffex",
    title: "My way",
    id: 20,
    src: "NEFFEX - My Way 😤 (Official Music Video).mp3",
  },
];

const files = document.querySelector(".files");

for (let i = 0; i < data.length; i++) {
  files.innerHTML += `
          <div class="file" onclick="window.location.assign('${data[i].link}')" >
              <img class="image" src="${data[i].icon}" alt="Logo">
              <h2>${data[i].filename}</h2>
          </div>
      `;
}

const secondPlayer = document.querySelector(".second-player");

const audio = document.querySelector("audio");

const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const forward = document.querySelector(".fa-forward");
const backward = document.querySelector(".fa-backward");

let song = 0;

songTitle.innerHTML = songs[song].title;
songArtist.innerHTML = songs[song].artist;
audio.src = `./music/${songs[song].src}`;

forward.addEventListener("click", () => {
  song++;
  if (song > songs.length - 1) {
    song = 0;
  }
  playPauseButton.classList.remove("fa-play");
  playPauseButton.classList.add("fa-pause");
  songTitle.innerHTML = songs[song].title;
  songArtist.innerHTML = songs[song].artist;
  audio.src = `./music/${songs[song].src}`;
  audio.play();
});

backward.addEventListener("click", () => {
  song--;
  if (song < 0) {
    song = songs.length - 1;
  }
  playPauseButton.classList.remove("fa-play");
  playPauseButton.classList.add("fa-pause");
  songTitle.innerHTML = songs[song].title;
  songArtist.innerHTML = songs[song].artist;
  audio.src = `./music/${songs[song].src}`;
  audio.play();
});

const playPauseButton = document.querySelector(".fa-play");

function playMusic(id) {
  const song = songs.find((song) => song.id === id);
  if (song) {
    songTitle.innerHTML = song.title;
    songArtist.innerHTML = song.artist;
    audio.src = `./music/${song.src}`;
    audio.play();

    playPauseButton.classList.remove("fa-play");
    playPauseButton.classList.add("fa-pause");
  }
}

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.classList.remove("fa-play");
    playPauseButton.classList.add("fa-pause");
  } else {
    audio.pause();
    playPauseButton.classList.remove("fa-pause");
    playPauseButton.classList.add("fa-play");
  }
});

for (let i = 0; i < songs.length; i++) {
  secondPlayer.innerHTML += `
        <div class="songs" onclick="playMusic(${songs[i].id})">
            <div>
                <h2 class="title">${songs[i].title}</h2>
                <p class="artist">${songs[i].artist}</p>
            </div>
        </div>
    `;
}
