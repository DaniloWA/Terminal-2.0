import { getDadosEntrada } from "../main.js"

export function analisarTexto(){
    console.log("ANALISAR TEXTO")
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


/*
 console.log("Gerando Senha")
      let vezes = regexGerarSenha().exec(dados)[1]
      let comSem = regexGerarSenha().exec(dados)[2]

      if(comSem == "com" && vezes){
        for(let i = 0; i < vezes; i++){
          password += Numeros[random(9,0)] + LetrasMaisculas[random(24,0)] + LetrasMinusculas[random(25,0)] + CaracteresEspeciais[random(18,0)]
        }
        return password
      }

      if(comSem == "sem" && vezes){
        for(let i = 0; i < vezes; i++){
          password += Numeros[random(9,0)] + LetrasMaisculas[random(25,0)] + LetrasMinusculas[random(26,0)]
        }
        return password
      }

      if(comSem == undefined || vezes == undefined){
        return  "Experimente assim : gerar senha (n) (com ou sem) caracteres especiais"
      }
*/