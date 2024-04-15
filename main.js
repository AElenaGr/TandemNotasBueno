document.addEventListener("DOMContentLoaded", function () {
  showInfo();
});

document.getElementById("btn-add-nota").addEventListener("click", function () {
  getInfo();
  setInfo();
  showInfo();
});

document.getElementById("btn-clean-nota").addEventListener("click", function () {
  cleanInfo();
  showInfo();
});

function getInfo() {
  return document.getElementById("nota").innerHTML;
}

function setInfo() {
  const clave = Date.now();
  localStorage.setItem(clave, getInfo());
}

function showInfo() {
  const showNotas = document.getElementById("show-notas");
  showNotas.innerHTML = "";
  
  if (localStorage.length === 0) {
      showNotas.innerHTML = "<div class='no-nota'><span>No tienes notas guardadas</span></div>";
  } else {
      for (let i = 0; i < localStorage.length; i++) {
          let clave = localStorage.key(i);
          let valor = localStorage.getItem(clave);
          showNotas.innerHTML += `<div class='lista-notas'>${valor}</div>`;
      }
  }
}

function cleanInfo() {
  localStorage.clear();
}
