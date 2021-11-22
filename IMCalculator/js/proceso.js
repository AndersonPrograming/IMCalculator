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
          fun = "bajo()";
     } else if (resultado >= 18.5 && resultado <= 24.9) {
          nivel = "Normal";
          img = "<img src='img/normal.jpg' width='100%' height='200px'>";
          fun = "normal()";
     } else if (resultado >= 25.0 && resultado <= 29.9) {
          nivel = "Sobrepeso";
          img = "<img src='img/sobrepeso.jpg' width='100%' height='200px'>";
          fun = "sobrepeso()";
     } else if (resultado >= 30.0) {
          nivel = "Obeso";
          img ="<img src='img/obeso.jpg' width='100%' height='200px'>";
          fun = "obeso()";
     }

     if (nombre && peso && estatura) {
          document.getElementById("saludo").innerHTML = "Welcome " + nombre + "! <br>";
          document.getElementById("imc").innerHTML = "<b>IMC:</b> " + resultado + "<br>";
          document.getElementById("nivel").innerHTML = "<b>NIVEL PESO:</b> " + nivel + "<br>";
          document.getElementById('img').innerHTML = img;
          document.getElementById('btn-info').innerHTML = "<button onclick='"+fun+"'>mas informacion</button>";
          document.getElementById('ingreso').innerHTML = "";
     }

}

function vaciar() {
     document.getElementById("nombre").value = "";
     document.getElementById("peso").value = "";
     document.getElementById("estatura").value = "";
}
function bajo(){
     document.getElementById('btn-info').innerHTML = "";

     document.getElementById("titulo").innerHTML = "<b>Recomendaciones para ti:</b>";
     document.getElementById("uno").innerHTML = "<hr><b>1.</b> Comer cada 3 horas e Incluir proteínas en todas las comidas";
     document.getElementById("dos").innerHTML = "<hr><b>2.</b> Comer por lo menos 3 frutas por día y consumir grasas buenas";
     document.getElementById("tres").innerHTML = "<hr><b>3.</b> Beber por lo menos 2,5 L de agua por día";
     document.getElementById("cuatro").innerHTML = "<hr><b>4.</b> Realizar actividad física";
     
     document.getElementById('btn-volver').innerHTML = "<hr><button onclick='location.reload()'>volver</button>";
}
function normal() {
     document.getElementById('btn-info').innerHTML = "";

     document.getElementById("titulo").innerHTML = "<hr><b>Recomendaciones para ti:</b>";
     document.getElementById("msg").innerHTML = "<hr><b><h2>Felicidades! eres una persona saludable</h2></b>";
     document.getElementById("uno").innerHTML = "<hr><b>1.</b> Elimina los dulces extra";
     document.getElementById("dos").innerHTML = "<hr><b>2.</b> Duerme bien";
     document.getElementById("tres").innerHTML = "<hr><b>3.</b> Reduce la ingesta de carbohidratos";
     document.getElementById("cuatro").innerHTML = "<hr><b>4.</b> Prepara menos comida";

     document.getElementById('btn-volver').innerHTML = "<hr><button onclick='location.reload()'>volver</button>";
}
function sobrepeso() {
     document.getElementById('btn-info').innerHTML = "";

     document.getElementById("titulo").innerHTML = "<b>Recomendaciones para ti:</b>";
     document.getElementById("uno").innerHTML = "<hr><b>1.</b> Suspender el azúcar simple (dulces, gaseosa, helados, bizcochos, etc.)";
     document.getElementById("dos").innerHTML = "<hr><b>2.</b> Disminuir los azúcares complejos. No es necesario erradicar su consumo, solo equilibrar sus porciones.";
     document.getElementById("tres").innerHTML = "<hr><b>3.</b> Por lo menos 150 minutos de trabajo cardiovascular (trotar, caminar, montar bicicleta).";
     document.getElementById("cuatro").innerHTML = "<hr><b>4.</b> Realizar ejercicios de fuerza para recuperar la masa muscular perdida durante el tiempo de reposo.";

     document.getElementById('btn-volver').innerHTML = "<hr><button onclick='location.reload()'>volver</button>";
}
function obeso() {
     document.getElementById('btn-info').innerHTML = "";

     document.getElementById("titulo").innerHTML = "<b>Recomendaciones para ti:</b>";
     document.getElementById("uno").innerHTML = "<hr><b>1.</b> Asimila que la obesidad es una enfermedad";
     document.getElementById("dos").innerHTML = "<hr><b>2.</b> La obesidad conlleva riesgos: toma decisiones y actúa pronto";
     document.getElementById("tres").innerHTML = "<hr><b>3.</b> Solicita información a profesionales expertos";
     document.getElementById("cuatro").innerHTML = "<hr><b>4.</b> Tú no tienes que encontrar la mejor solución, esta te la indicará un profesional.";

     document.getElementById('btn-volver').innerHTML = "<hr><button onclick='location.reload()'>volver</button>";
}