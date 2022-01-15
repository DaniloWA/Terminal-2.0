import { getDadosEntrada } from "../main.js"

export function analisarTexto(){
    let dados = getDadosEntrada()
    let numPalavras = dados.match(contaPalavras()).length -1 // o -1 elimina o Analisar texto da equação
    let numCaracteres = dados.match(contaCaracteres()).length -13 // o -1 elimina o Analisar texto da equação

    return `Palavras: ${numPalavras} Letras: ${numCaracteres}`
}

export function analisarTxt() {
    let regExp = /^analisar texto/i
    return regExp
}

export function contaPalavras() {
    let regExp = /\s+/ig
    return regExp
}

export function contaCaracteres() {
    let regExp = /\w/ig
    return regExp
}


