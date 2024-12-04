let peruClicado = 0
let emojiPeru = document.getElementById("peru")

function cliquePeru() {
  peruClicado += 1
  if (peruClicado >= 10) emojiPeru.textContent = "🍗"
}