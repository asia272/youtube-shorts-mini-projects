const text = "BUILD WITH JAVASCRIPT";
const typingEl = document.getElementById("typing");
let index = 0;

function type() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(type, 120);
  } else {
    typingEl.classList.add("glitch");

    setTimeout(() => {
      typingEl.classList.remove("glitch");
    }, 600);
  }
}

type();
