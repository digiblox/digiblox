document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".pill, .game-card");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.filter = "brightness(1.02)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.filter = "none";
    });
  });

  const mainButton = document.querySelector(".pill.primary.large");
  if (mainButton) {
    mainButton.addEventListener("click", () => {
      mainButton.textContent = "Entering Digiblox...";
      setTimeout(() => {
        mainButton.textContent = "Play Now";
      }, 1200);
    });
  }
});
