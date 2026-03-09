function mostrarResposta() {
  document.getElementById("resposta").style.display = "block";
  document.getElementById("resposta").innerHTML = "se você concordou significa que você É kakakakka";
  document.getElementById("No").style.display = "none";
  document.getElementById("resposta-img").style.display = "block";
  var img = document.getElementById("resposta-img");
  img.src =
    "https://i.pinimg.com/736x/72/d7/f9/72d7f9a252d94df8b9656214838449d0.jpg";
  img.height = 300;
}

function mudarPosicao() {
  const buttonNao = document.getElementById("No");
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  buttonNao.style.left = `${randomX}px`;
  buttonNao.style.top = `${randomY}px`;
}