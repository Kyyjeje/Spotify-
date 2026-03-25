const disc = document.getElementById("cover");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    disc.style.animationPlayState = "running";
  } else {
    audio.pause();
    disc.style.animationPlayState = "paused";
  }
}
