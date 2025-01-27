function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("verifique os dados e tente novamente");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let gênero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "img");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "imgmenino.png");
      } else if (idade < 21) {
        img.setAttribute("src", "imgmoço.png");
      } else if (idade < 50) {
        img.setAttribute("src", "imghomem.png");
      } else {
        img.setAttribute("src", "imgsenhor.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "imgmenina.png");
      } else if (idade < 21) {
        img.setAttribute("src", "imgmoça.png");
      } else if (idade < 50) {
        img.setAttribute("src", "imgmulher.png");
      } else {
        img.setAttribute("src", "imgsenhora.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
