function visibleDiaNoche(){
  document.getElementById("fullpage").style.display = "block";
  document.getElementById("section-content.bottom").style.display = "none";
  document.getElementById("content-resultado").style.display = "none";
}

function diaNoche() {
  if (document.getElementById("fullpage").classList.contains("night")) {
    document.getElementById("fullpage").classList.remove("night");
  }else{
    document.getElementById("fullpage").classList.add("night");
  }
}

function disappearFullpage(){
  document.getElementById("fullpage").style.display = "none";
  document.getElementById("section-content.bottom").style.display = "flex";
  document.getElementById("content-resultado").style.display = "flex";
}
