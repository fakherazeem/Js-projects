const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let time = 1500;
let interval;

startEl.addEventListener("click", function () {
  if (interval) return;

  interval = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, "0");
    const sec = String(Math.trunc(time % 60)).padStart(2, "0");

    timerEl.textContent = `${min}:${sec}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      interval = null;
    }
  }, 1000);
});

stopEl.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
});

resetEl.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;

  time = 1500;

  const min = String(Math.trunc(time / 60)).padStart(2, "0");
  const sec = String(Math.trunc(time % 60)).padStart(2, "0");
  timerEl.textContent = `${min}:${sec}`;
});
