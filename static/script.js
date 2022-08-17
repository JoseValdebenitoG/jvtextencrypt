/**
 * === llaves de encriptado ===
 * 
 * a = ai
 * e = enter
 * i = imes
 * o = ober
 * u = ufat
 * 
 */
/**
 * == Condiciones para replace ==
 * i = para que afecte tanto minusculas o mayusculas
 * g = para que afecte a toda la linea
 * m = para que afecte a toda el parrafo o multilineas
*/

// Funcion mostrar muñeco al inicio
document.getElementById("right-text").style.display = "none";


// Funciones para encriptado
function encrypt(){
    var inText = document.getElementById("insert-text").value.toLowerCase();
  
    var encodeText = inText.replace(/e/igm,"enter");
    var encodeText = encodeText.replace(/o/igm,"ober");
    var encodeText = encodeText.replace(/i/igm,"imes");
    var encodeText = encodeText.replace(/a/igm,"ai");
    var encodeText = encodeText.replace(/u/igm,"ufat");

    document.getElementById("right-doll").style.display = "none";
    document.getElementById("right-text").style.display = "block";
    document.getElementById("encryptText").innerHTML = encodeText;
}

function decrypt(){
    var inText = document.getElementById("insert-text").value.toLowerCase();
  
    var encodeText = inText.replace(/enter/igm,"e");
    var encodeText = encodeText.replace(/ober/igm,"o");
    var encodeText = encodeText.replace(/imes/igm,"i");
    var encodeText = encodeText.replace(/ai/igm,"a");
    var encodeText = encodeText.replace(/ufat/igm,"u");

    document.getElementById("right-doll").style.display = "none";
    document.getElementById("right-text").style.display = "block";
    document.getElementById("encryptText").innerHTML = encodeText;
}

function copy(){
    var content = document.querySelector("#encryptText");
    content.select();
    document.execCommand("copy");
    alert("Texto Copiado!");
}
 

 
    
