import { getDadosEntrada} from "../main.js"

export function Senha() {
    let dados = getDadosEntrada()
    let Numeros = "0123456789"
    let LetrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
    let LetrasMaisculas = "ABCDEFGHIJLMNOPQRSTUVWXYZ"
    let CaracteresEspeciais = "!@#$%^&*()+?><:{}[]"
    let pass = ""
    let password = pass.toString()

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

  }

export function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt

}

export function regexGerarSenha() {
    let regExp = /gerar senhas?\s?(\d+)?\s?(com|sem)?/i
    return regExp
}
