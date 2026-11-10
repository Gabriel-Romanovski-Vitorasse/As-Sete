window.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("../midia/jojo.mp3");

  // Botão para o visitante tocar/pausar a música
  // (os navegadores costumam bloquear a reprodução automática).
  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "botao-musica";

  const atualizarBotao = () => {
    const tocando = !audio.paused;
    botao.textContent = tocando ? "⏸ Pausar música" : "▶ Tocar música";
    botao.setAttribute("aria-pressed", String(tocando));
  };

  botao.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch((err) => console.warn("Não foi possível tocar a música:", err));
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", atualizarBotao);
  audio.addEventListener("pause", atualizarBotao);
  audio.addEventListener("ended", atualizarBotao);

  document.body.appendChild(botao);
  atualizarBotao();

  audio.play().catch((err) => {
    console.warn("O navegador bloqueou a reprodução automática:", err);
  });
});