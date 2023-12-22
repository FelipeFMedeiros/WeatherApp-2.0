const textContent = "calma que não ta pronto"; // Testo para copiar
const copyArea = document.querySelector(".copy-mail");
const hoverText = document.getElementById("hoverText");
let text = "Clique para copiar o email";

// Copiar
function Copy(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Texto copiado: " + text);
    })
    .catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
}

// Mouse Over
copyArea.addEventListener("mouseover", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY + 20; // Posição abaixo do cursor

  hoverText.innerText = text;
  hoverText.style.left = `${mouseX}px`;
  hoverText.style.top = `${mouseY}px`;
  hoverText.style.display = "block";

  // Clique
  copyArea.addEventListener("click", () => {
    Copy(textContent);
    text = "Email copiado!";
    hoverText.innerText = text;
  });
});
// Mouse Out
copyArea.addEventListener("mouseout", () => {
  hoverText.style.display = "none";
  text = "Clique para copiar o email";
});
