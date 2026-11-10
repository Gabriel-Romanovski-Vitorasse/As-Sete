window.addEventListener("DOMContentLoaded", () => {
      const audio = new Audio("../midia/family.mp3");
      audio.play().catch((err) => {
        console.warn("O navegador bloqueou a reprodução automática:", err);
      });
    });