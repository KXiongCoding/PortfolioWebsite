// Typing animation
const fullText = "Aspiring Developer | Calm Strategist | Creative Coder";
const typingSpeed = 100;
let idx = 0;
function typeNext() {
  if (idx < fullText.length) {
    document.getElementById("typed-text").textContent += fullText[idx++];
    setTimeout(typeNext, typingSpeed);
  }
}
window.addEventListener("load", typeNext);
