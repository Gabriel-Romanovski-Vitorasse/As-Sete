window.addEventListener("DOMContentLoaded", () => {
      const audio = new Audio("../midia/messi.mp3");
      audio.play().catch((err) => {
        console.warn("O navegador bloqueou a reprodução automática:", err);
      });
    });