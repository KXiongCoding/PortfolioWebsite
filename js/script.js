document.addEventListener("DOMContentLoaded", () => {
  // —— Typing Animation —— //
  const fullText = "Aspiring Developer | Calm Strategist | Creative Coder";
  const typingSpeed = 100;
  const typedEl = document.getElementById("typed-text");
  let charIdx = 0;

  (function type() {
    if (charIdx < fullText.length) {
      typedEl.textContent += fullText[charIdx++];
      setTimeout(type, typingSpeed);
    }
  })();

  // —— Slide Navigation —— //
  const scroller = document.querySelector("main.horizontal-scroll");
  const slides   = Array.from(scroller.children);
  const prevBtn  = document.getElementById("prev-slide");
  const nextBtn  = document.getElementById("next-slide");
  let current    = 0;

  function updateArrows() {
    // Hide Prev on first slide
    if (current === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
    }

    // Hide Next on last slide
    if (current === slides.length - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "flex";
    }
  }

  function goToSlide(index) {
    // Clamp index between 0 and last slide
    index = Math.max(0, Math.min(slides.length - 1, index));
    current = index;

    scroller.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth"
    });

    updateArrows();
  }

  // Hook up Prev/Next buttons
  prevBtn.addEventListener("click", () => goToSlide(current - 1));
  nextBtn.addEventListener("click", () => goToSlide(current + 1));

  // Sync current if user drags the scrollbar
  scroller.addEventListener("scroll", () => {
    const idx = Math.round(scroller.scrollLeft / window.innerWidth);
    if (idx !== current) {
      current = idx;
      updateArrows();
    }
  });

  // Initialize arrow visibility
  updateArrows();
  
});
