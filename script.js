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

  const modalTriggers = document.querySelectorAll(".modal-trigger");
  const closeButtons = document.querySelectorAll(".modal-close");

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  };

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openModal(trigger.dataset.modal);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal-overlay");
      if (modal) closeModal(modal.id);
    });
  });

  document.addEventListener("click", (event) => {
    const overlay = event.target;
    if (overlay && overlay.classList.contains("modal-overlay")) {
      closeModal(overlay.id);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal-overlay:not(.hidden)").forEach((modal) => {
        closeModal(modal.id);
      });
    }
  });

  document.querySelectorAll(".auth-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const submitButton = form.querySelector("button[type='submit']");
      if (!submitButton) return;

      const originalText = submitButton.textContent;
      submitButton.textContent = "Loading...";
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        form.closest(".modal-overlay")?.classList.add("hidden");
      }, 900);
    });
  });

  const playButton = document.querySelector(".btn.btn-primary.large");
  if (playButton) {
    playButton.addEventListener("click", () => {
      openModal("signup-modal");
    });
  }
});
