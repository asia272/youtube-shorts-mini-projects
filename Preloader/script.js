let percent = 0;
const progress = document.getElementById("progress");
const text = document.getElementById("percent");

const interval = setInterval(() => {
  percent++;
  text.innerText = percent + "%";
  progress.style.strokeDashoffset = 377 - (377 * percent) / 100;

  if (percent === 100) {
    clearInterval(interval);
  }
}, 30);
