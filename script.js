let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrl_icon = document.getElementById("ctrl-icon");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
let playpause = () => {
  if (ctrl_icon.classList.contains("fa-pause")) {
    song.pause();
    ctrl_icon.classList.remove("fa-pause");
    ctrl_icon.classList.add("fa-play");
  } else {
    song.play();
    ctrl_icon.classList.remove("fa-play");
    ctrl_icon.classList.add("fa-pause");
  }
  //   <i class="fa-solid fa-pause"></i>;
};
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  ctrl_icon.classList.add("fa-pause");
  ctrl_icon.classList.remove("fa-play");
};
