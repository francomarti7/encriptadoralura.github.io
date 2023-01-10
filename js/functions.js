/*TEXTOS*/
const txtingresado = document.querySelector("#texto-entrada");
const txtresultado = document.querySelector("#texto-salida");
/*BOTONES*/
const encripta = document.querySelector("#encripta-msj");
const desencripta = document.querySelector("#desencripta-msj");
const copia = document.querySelector("#btncopiar");

function encriptar(){
    let texto = txtingresado.value.toLowerCase();

    if (texto)  {

        let txtencriptado = texto.replace(/e/g, "epe")
        .replace(/i/g, "ipi")
        .replace(/a/g, "apa")
        .replace(/o/g, "opo")
        .replace(/u/g, "upu");

        /* (/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat"); */
        

        document.getElementById("items-salida").style.visibility = "hidden";
        document.getElementById("btncopiar").style.visibility = "visible";
        document.getElementById("btncopiar").style.display = "unset";
        document.getElementById("texto-salida").style.display = "inline";
        
        txtresultado.value = txtencriptado;
        
        document.getElementById("texto-entrada").value = '';

} else {
    alert("Por favor ingrese un texto!");
}


}

function desencriptar(){
    let texto = txtingresado.value.toLowerCase();

    if (texto)  {

        let txtencriptado = texto.replace(/epe/g, "e")
        .replace(/ipi/g, "i")
        .replace(/apa/g, "a")
        .replace(/opo/g, "o")
        .replace(/upu/g, "u");

        /* (/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat"); */
        

        document.getElementById("items-salida").style.visibility = "hidden";
        document.getElementById("btncopiar").style.visibility = "visible";
        document.getElementById("btncopiar").style.display = "unset";
        document.getElementById("texto-salida").style.display = "inline";
        
        txtresultado.value = txtencriptado;

        document.getElementById("texto-entrada").value = '';
        
    } else {
        alert("Por favor ingrese un texto!");
    }

}

    function copiar() {
        let txtencriptado = txtresultado.value;
        navigator.clipboard.writeText(txtencriptado);
        alert("Texto copiado!");
      }

 


encripta.onclick = encriptar;
desencripta.onclick = desencriptar;
copia.onclick = copiar;