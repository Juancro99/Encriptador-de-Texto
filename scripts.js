
function actualizarTextoEncriptado() {
    
    var out = document.getElementById("texto-salida")
    var textoEntrada = document.getElementById("texto-entrada").value;
    if (/[^a-z\s]/g.test(textoEntrada)) {
        out.value = "No estan permitidas myusculas,ni caracteres especiales";
        animar("warn")
        return;
    }
    var textoEncriptado = encriptarTexto(textoEntrada);
    escribir(textoEncriptado)
    animar("lock")
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
function actualizarTextoDesencriptado() {
    var out = document.getElementById("texto-salida")
    var textoEntrada = document.getElementById("texto-entrada").value;
    if (/[^a-z\s]/g.test(textoEntrada)) {
        animar("warn")
        out.value = "Solo se permiten minúsculas y espacios";
        return;
      }
    var textoEncriptado = desencriptarTexto(textoEntrada);
    escribir(textoEncriptado)
    animar("lock-open")
}
function desencriptarTexto(textoEncriptado) {
  let textoDesencriptado = textoEncriptado  .replace(/enter/g, 'e')
                                            .replace(/imes/g, 'i')
                                            .replace(/ai/g, 'a')
                                            .replace(/ober/g, 'o')
                                            .replace(/ufat/g, 'u');
  return textoDesencriptado;
}
function escribir(texto){
    var indice = 0;
    var intervalo = setInterval(function() {
    var out = document.getElementById("texto-salida")
    out.value = texto.substring(0, indice + 1);
    indice++;
    if (indice >= texto.length) {
      clearInterval(intervalo);
     }
    }, 20);
      
}
function animar(img){
    var out = document.getElementById("texto-salida")
    if(document.getElementById("texto-entrada").value != ""){
        document.getElementById("texto-entrada").value = "";
        out.style.transitionDuration = "1s"
        out.style.opacity = "0";
        setTimeout(function() {
            out.style.backgroundImage = `url('imagenes/${img}.png')`;
            out.style.backgroundSize = "40%"
            out.style.opacity = "1";
        }, 500);
        borrar=true;
        }else if(borrar){
            out.style.transitionDuration = "0.5s"
            out.style.opacity = "0";
            setTimeout(function() {
            out.style.backgroundSize = "contain"
            out.style.backgroundImage = "url('imagenes/muneco.png')";
            }, 1000);
            setTimeout(function() {
            out.style.opacity = "1";
            }, 1300);
            borrar= false;
        }
}

function copyText(id){
    var txt = document.getElementById(id);
    txt.select();
    document.execCommand("Copy");
}
let borrar = false;
