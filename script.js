//função para criptografar
function cript() {
    var text = document.getElementById("textInput").value.toLowerCase();
    var encryptedText = text.replace(/e/igm,"enter");
    var encryptedText = encryptedText.replace(/o/igm,"ober");
    var encryptedText = encryptedText.replace(/i/igm,"imes");
    var encryptedText = encryptedText.replace(/a/igm,"ai");
    var encryptedText = encryptedText.replace(/u/igm,"ufat");

    document.getElementById("textOutput").innerHTML = encryptedText;

    }

//função para descriptografar
function descript() {
    var text = document.getElementById("textInput").value.toLowerCase();
    var encryptedText = text.replace(/enter/igm,"e");
    var encryptedText = encryptedText.replace(/ober/igm,"o");
    var encryptedText = encryptedText.replace(/imes/igm,"i");
    var encryptedText = encryptedText.replace(/ai/igm,"a");
    var encryptedText = encryptedText.replace(/ufat/igm,"u");

    document.getElementById("textOutput").innerHTML = encryptedText;

    }

//função pra copiar
function copiar() {

    var content = document.getElementById('textOutput');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}

//alterar o foco assim que a pagina for carregada
window.onload = function () {
    document.getElementById("textInput").focus();
    }