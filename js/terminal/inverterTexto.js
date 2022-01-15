import { getDadosEntrada } from "../main.js"

export function inverterTexto(){
 let dados = getDadosEntrada()
    console.log("Invertendo Texto")
    return reverse(dados) 
}

function reverse(s) {
    var o = '';
    for (var i = s.length -1 ; i >= 14; i--) {
        o += s[i];
    }
    return o;
}

export function regexInverterTexto() {
    let regExp = /inverter texto/i
    return regExp
}

/*
inverter texto(13) Danilo Oliveira , TEXTO
inverter texto Danilo Oliveira
*/