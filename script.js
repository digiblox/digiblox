document.addEventListener("DOMContentLoaded", () => {
  const primaryButtons = document.querySelectorAll(".btn-primary, .btn-outline, .btn-light");

  primaryButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.filter = "brightness(1.02)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.filter = "none";
    });
  });

  const playButton = document.querySelector(".btn.btn-primary.large");
  if (playButton) {
    playButton.addEventListener("click", () => {
      playButton.textContent = "Launching...";
      setTimeout(() => {
        playButton.textContent = "Play now";
      }, 1200);
    });
  }
});
