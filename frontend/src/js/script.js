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

let traduzir1 = 0;
function traduzirIntroducao() {
  let titulo1 = document.getElementById("titulo1");
  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  let btnIntroducao = document.getElementById("btnIntroducao");

  traduzir1 += 1;

  if (traduzir1 % 2 === 0) {
    titulo1.textContent = "The Essence of Thanksgiving";
    p1.textContent = "Happy Thanksgiving! 🍂🍁";
    p2.textContent =
      "Gratitude is the recognition and appreciation for what you have, promoting happiness and well-being. Thanksgiving is a holiday, mainly in the USA and Canada, dedicated to expressing gratitude for the year's victories, originating in the 17th century with the celebration of harvests by European settlers. It promotes reflection, gratitude and fraternization.";
    btnIntroducao.textContent = "Traduza";
  } else {
    titulo1.textContent = "A Essência do Dia de Ação de Graças";
    p1.textContent = "Feliz Dia de Ação de Graças! 🍂🍁";
    p2.textContent =
      "A gratidão é o reconhecimento e a apreciação pelo que você tem, promovendo a felicidade e o bem-estar. O Dia de Ação de Graças é um feriado, principalmente nos Estados Unidos e no Canadá, dedicado a expressar gratidão pelas vitórias do ano, originado no século XVII com a celebração das colheitas pelos colonos europeus. Ele promove a reflexão, a gratidão e a fraternização.";
    btnIntroducao.textContent = "Volte ao inglês";
  }
}

let traduzir2 = 0;
function traduzirPequenoPrincipe() {
  let titulo2 = document.getElementById("titulo2");
  let p3 = document.getElementById("p3");
  let btnPequenoPrincipe = document.getElementById("btnPequenoPrincipe");

  traduzir2 += 1;

  if (traduzir2 % 2 === 0) {
    titulo2.textContent =
      "“One sees clearly only with the heart. What is essential is invisible to the eyes.” - The Little Prince";
    p3.textContent =
      "This phrase is said by the fox to the Little Prince during their farewell, after they have formed a special bond. It emphasizes that the most important things cannot be seen with the eyes but must be felt with the heart. This understanding awakens gratitude, as it teaches us to value the feelings and deep connections we have with people and experiences. By recognizing the true value of these connections, which are often invisible to the eyes, we learn to be more grateful for their presence and the impact they have on our lives.";
    btnPequenoPrincipe.textContent = "Traduza";
  } else {
    titulo2.textContent =
      "“Somente se vê bem com o coração. O essencial é invisível aos olhos.” - O Pequeno Príncipe";
    p3.textContent =
      "Esta frase é dita pela raposa ao Pequeno Príncipe durante a despedida deles, depois que eles formaram um vínculo especial. Ela enfatiza que as coisas mais importantes não podem ser vistas pelos olhos, mas devem ser sentidas com o coração. Esse entendimento desperta a gratidão, pois nos ensina a valorizar os sentimentos e as conexões profundas que temos com as pessoas e as experiências. Ao reconhecer o verdadeiro valor dessas conexões, que muitas vezes são invisíveis aos olhos, aprendemos a ser mais gratos pela sua presença e pelo impacto que têm em nossas vidas.";
    btnPequenoPrincipe.textContent = "Volte ao inglês";
  }
}

let traduzir3 = 0;
function traduzirFriends() {
  let titulo3 = document.getElementById("titulo3");
  let p4 = document.getElementById("p4");
  let btnFriends = document.getElementById("btnFriends");

  traduzir3 += 1;

  if (traduzir3 % 2 === 0) {
    titulo3.textContent = "Cinematic Industry";
    p4.textContent =
      "Thanksgiving is a recurring theme in cinema, often used to create stories that range from comedy to drama. Series like Friends, Brooklyn Nine-Nine, and Gilmore Girls show different contexts, but in all of them, the union of people who love each other brings humor and emotion, exploring the challenges and connections between characters. Additionally, the holiday serves as a backdrop to highlight issues of identity, cultural diversity, and social themes. The date is also strategic for the release of prominent films, marking the beginning of the awards season in Hollywood.";
    btnFriends.textContent = "Traduza";
  } else {
    titulo3.textContent = "Indústria Cinematográfica";
    p4.textContent =
      "O Dia de Ação de Graças é um tema recorrente no cinema, muitas vezes usado para criar histórias que variam de comédia a drama. Séries como Friends, Brooklyn Nine-Nine e Gilmore Girls mostram contextos diferentes, mas em todas elas, a união de pessoas que se amam traz humor e emoção, explorando os desafios e as conexões entre os personagens. Além disso, o feriado serve de pano de fundo para destacar questões de identidade, diversidade cultural e temas sociais. A data também é estratégica para o lançamento de filmes importantes, marcando o início da temporada de premiações em Hollywood.";
    btnFriends.textContent = "Volte ao inglês";
  }
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

async function historiaAleatoria() {
  const sessaoHistoria = document.getElementById("sessaoHistoria");

  sessaoHistoria.innerHTML = "";

  const response = await fetch(`${apiUrl}/historiaAleatoria`);
  const historias = await response.json();

  historias.forEach((historiaAleatoria) => {
    const historiaItem = document.createElement("div");
    historiaItem.className = "container2 column";
    historiaItem.innerHTML = `
      <h2>${historiaAleatoria.Titulo}</h2>
      <br>
      <p>${historiaAleatoria.Historia}</p>
      <br>
      <img src="../../${historiaAleatoria.ImagemURL}" alt="">`;
    sessaoHistoria.appendChild(historiaItem);
  });
}

async function historiaPorPalavra() {
  const sessaoHistoria = document.getElementById("sessaoHistoria");
  const palavraChaveInput = document.getElementById("palavraChaveInput");

  const palavraChave = palavraChaveInput.value.trim();

  sessaoHistoria.innerHTML = "";

  const response = await fetch(`${apiUrl}/historia/palavra/${palavraChave}`);
  const historinhas = await response.json();

  historinhas.forEach((historias) => {
    const historiaItem = document.createElement("div");
    historiaItem.className = "container2 column";
    historiaItem.innerHTML = `
      <h2>${historias.Titulo}</h2>
      <br>
      <p>${historias.Historia}</p>
      <br>
      <img src="../../${historias.ImagemURL}" alt="">`;
    sessaoHistoria.appendChild(historiaItem);
  });
}

async function enviarMensagem() {
  const mensagemInput = document.getElementById("mensagemInput");
  const temaInput = document.getElementById("temaInput");

  const mensagemDigitada = mensagemInput.value.trim();
  const temaDigitado = temaInput.value.trim();

  if (!mensagemDigitada || !temaDigitado) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const response = await fetch(`${apiUrl}/enviarMensagem`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Mensagem: mensagemDigitada, Tema: temaDigitado }),
  });

  if (response.ok) {
    alert("Mensagem adicionada com sucesso!");
    // Limpa os campos do formulário
    mensagemInput.value = "";
    temaInput.value = "";
  } else {
    const error = await response.json();
    alert(`Erro ao adicionar mensagem: ${error.message}`);
  }
}
