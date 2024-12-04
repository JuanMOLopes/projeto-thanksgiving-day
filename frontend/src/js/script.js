let emojiPeru = document.getElementById("peru");

function cliquePeru() {
  emojiPeru.style.transition = "all 0.5s ease";
  emojiPeru.style.transform = "scale(1.2)"

  setTimeout(() => {
    emojiPeru.textContent = "🍗";
    emojiPeru.style.transform = "scale(1)"
  }, 500);
}
