import { nomes } from "./gerarnomes.js"

export function Email(){
    let email = [
        "@gmail.com",
        "@iCloud.com",
        "@outlook.com",
        "@Inbox.com",
    ]
    
    let nomesTratados = nomes[[random(19,0)]].replace(regexLimparEmail(), "")
    console.log("Gerando Email")
    return nomesTratados + email[random(3,0)]
}

export function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt

}

export function regexGerarEmail() {
    let regExp = /gerar email/i
    return regExp
}

function regexLimparEmail(){
    let regExp1 = /\s?/ig
    return regExp1
}


/*

*/

