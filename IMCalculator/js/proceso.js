function mostrar() {
     let nombre = document.getElementById("nombre").value;
     let peso = document.getElementById("peso").value;
     let estatura = document.getElementById("estatura").value;
     let resultado = peso / (estatura * estatura);
     // redondeando a 1 decimal
     resultado = resultado.toFixed(1);

     if (resultado < 18.5) {
          nivel = "Bajo de peso";
     } else if (resultado >= 18.5 && resultado <= 24.9) {
          nivel = "Normal";
     } else if (resultado >= 25.0 && resultado <= 29.9) {
          nivel = "Sobrepeso";
     } else if (resultado >= 30.0) {
          nivel = "Obeso";
     }

     if (nombre && peso && estatura) {
          document.getElementById("saludo").innerHTML = "Welcome " + nombre + "! <br>";
          document.getElementById("imc").innerHTML = "IMC: " + resultado + "<br>";
          document.getElementById("nivel").innerHTML = "NIVEL PESO: " + nivel + "<br>";
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
}
