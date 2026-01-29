const textElement = document.getElementById("animatedText");
const text = textElement.innerText; 

textElement.innerText = "";

text.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;

  // If character is space, keep it as space without animation delay
  
  if (char === " ") {
    span.style.marginRight = "0.4rem"; 
  }

  span.style.animationDelay = `${index * 0.06}s`;
  textElement.appendChild(span);
});
