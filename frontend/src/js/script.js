const apiUrl = "http://localhost:3000";

function cliquePeru() {
  let emojiPeru = document.getElementById("peru");

  emojiPeru.style.transition = "all 0.5s ease";
  emojiPeru.style.transform = "scale(1.2)";

  setTimeout(() => {
    emojiPeru.textContent = "🍗";
    emojiPeru.style.transform = "scale(1)";
  }, 500);
}

async function mensagemAleatoria() {
  const sessaoMensagens = document.getElementById("sessaoMensagens");

  sessaoMensagens.innerHTML = "";

  const response = await fetch(`${apiUrl}/mensagemAleatoria`);
  const mensagens = await response.json();

  mensagens.forEach((mensagem) => {
    const mensagemItem = document.createElement("div");
    mensagemItem.className = "container2 column";
    mensagemItem.innerHTML = `
      <span><strong>Mensagem:</strong> ${mensagem.Mensagem}</span>
      <br>
      <span><strong>Tema:</strong> ${mensagem.Tema}</span>
    `;
    sessaoMensagens.appendChild(mensagemItem);
  });
}

async function enviarMensagem() {
  const mensagemInput = document.getElementById("mensagemInput");
  const temaInput = document.getElementById("temaInput");

  const mensagem = mensagemInput.value.trim();
  const tema = temaInput.value.trim();

  const response = await fetch(`${apiUrl}/enviarMensagem`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mensagem, tema }),
  });

  if (response.ok) {
    alert("Mensagem adicionada com sucesso!");
    mensagemInput.value = "";
    temaInput.value = "";
  } else {
    const error = await response.json();
    alert(`Erro ao adicionar mensagem: ${error.message}`);
  }
}

