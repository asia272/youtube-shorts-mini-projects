const text = document.getElementById("rippleText");
const originalText = text.innerText;

function playRipple() {
  text.innerHTML = "";

  originalText.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter;
    span.style.animationDelay = `${index * 0.1}s`;
    text.appendChild(span);
  });
}

playRipple();
