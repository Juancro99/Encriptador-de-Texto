
function actualizarTextoEncriptado() {
    var textoEntrada = document.getElementById("texto-entrada").value;
    if (/[^a-z\s]/g.test(textoEntrada)) {
      document.getElementById("texto-salida").value = "Solo se permiten minúsculas y espacios";
      return;
    }
    var textoEncriptado = encriptarTexto(textoEntrada);
    document.getElementById("texto-salida").value = textoEncriptado;
    document.getElementById("texto-entrada").value = "";
}
  
  
function actualizarTextoDesencriptado() {
    var textoEntrada = document.getElementById("texto-entrada").value;
    if (/[^a-z\s]/g.test(textoEntrada)) {
        document.getElementById("texto-salida").value = "Solo se permiten minúsculas y espacios";
        return;
      }
    var textoEncriptado = desencriptarTexto(textoEntrada);
    document.getElementById("texto-salida").value = textoEncriptado;
    document.getElementById("texto-entrada").value = "";    
}
  
function encriptarTexto(texto) {
    var llaves = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    
    var textoEncriptado = texto.replace(/[eiaou]/g, function(match) {
        return llaves[match];
    });
    
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
  let textoDesencriptado = textoEncriptado  .replace(/enter/g, 'e')
                                            .replace(/imes/g, 'i')
                                            .replace(/ai/g, 'a')
                                            .replace(/ober/g, 'o')
                                            .replace(/ufat/g, 'u');
  return textoDesencriptado;
}

function copyText(id){
    var txt = document.getElementById(id);
    txt.select();
    document.execCommand("Copy");
}