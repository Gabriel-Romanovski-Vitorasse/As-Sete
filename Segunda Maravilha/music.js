window.addEventListener("DOMContentLoaded", () => {
      const audio = new Audio("../midia/alanv2.mp3");
      audio.play().catch((err) => {
        console.warn("O navegador bloqueou a reprodução automática:", err);
      });
    });