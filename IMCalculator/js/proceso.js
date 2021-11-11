function mostrar() {
     let nombre = document.getElementById("nombre").value;
     let peso = document.getElementById("peso").value;
     let estatura = document.getElementById("estatura").value;
     let resultado = peso / (estatura * estatura);
     // redondeando a 1 decimal
     resultado = resultado.toFixed(1);
     let img;

     if (resultado < 18.5) {
          nivel = "Bajo de peso";
          img = "<img src='img/bajo.jpg' width='100%' height='200px'>";
          //document.getElementById('info').innerHTML = ;
     } else if (resultado >= 18.5 && resultado <= 24.9) {
          nivel = "Normal";
          img = "<img src='img/normal.jpg' width='100%' height='200px'>";
          //document.getElementById('info').innerHTML = ;
     } else if (resultado >= 25.0 && resultado <= 29.9) {
          nivel = "Sobrepeso";
          img = "<img src='img/sobrepeso.jpg' width='100%' height='200px'>";
          //document.getElementById('info').innerHTML = ;
     } else if (resultado >= 30.0) {
          nivel = "Obeso";
          img ="<img src='img/obeso.jpg' width='100%' height='200px'>";
          //document.getElementById('info').innerHTML = ;
     }

     if (nombre && peso && estatura) {
          document.getElementById("saludo").innerHTML = "Welcome " + nombre + "! <br>";
          document.getElementById("imc").innerHTML = "<b>IMC:</b> " + resultado + "<br>";
          document.getElementById("nivel").innerHTML = "<b>NIVEL PESO:</b> " + nivel + "<br>";
          document.getElementById('img').innerHTML = img;
     }

}
// funcion para resetear
function vaciar() {
     document.getElementById("nombre").value = "";
     document.getElementById("peso").value = "";
     document.getElementById("estatura").value = "";
     document.getElementById("saludo").innerHTML = "";
     document.getElementById("imc").innerHTML = "";
     document.getElementById("nivel").innerHTML = "";
     document.getElementById('img').innerHTML = "";
}
