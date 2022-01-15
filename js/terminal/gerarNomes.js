import { getDadosEntrada } from "../main.js"

let nomesMasculinos = [
    "Vitor Hugo Alves",
    "Yuri Dias",
    "André da Cunha",
    "Sr. Erick Moura",
    "João Gabriel Nascimento",
    "Benício da Paz",
    "Pedro Lucas Pereira",
    "Nathan da Luz",
    "Thales Freitas",
    "João Gabriel Jesus",
]

let nomesFemininos = [
    "Dra. Mariana Teixeira",
    "Alexia Cardoso",
    "Emanuella Araújo",
    "Srta. Maria Eduarda Ferreira",
    "Rebeca Duarte",
    "Maria Alice Dias",
    "Srta. Maria Sophia Fernandes",
    "Dra. Pietra Santos",
    "Mirella da Mata",
    "Emilly Moura",
]

export let nomes = [
    "Vitor Hugo Alves",
    "Yuri Dias",
    "André da Cunha",
    "Sr. Erick Moura",
    "João Gabriel Nascimento",
    "Benício da Paz",
    "Pedro Lucas Pereira",
    "Nathan da Luz",
    "Thales Freitas",
    "João Gabriel Jesus",
    "Dra. Mariana Teixeira",
    "Alexia Cardoso",
    "Emanuella Araújo",
    "Srta. Maria Eduarda Ferreira",
    "Rebeca Duarte",
    "Maria Alice Dias",
    "Srta. Maria Sophia Fernandes",
    "Dra. Pietra Santos",
    "Mirella da Mata",
    "Emilly Moura",
]

export function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt

}

export function gerarNomes(){
    let dados = getDadosEntrada()
    let genero = ""
    
    if(regexGerarNomes().exec(dados)[1]){
        genero = regexGerarNomes().exec(dados)[1]
    }
    
    if(genero == "masculino" | genero == "masculinos"){
        console.log("Gerando Nomes Masculinos Aleatorios")
        return  nomesMasculinos[random(9,0)] 
    }

    if(genero == "feminino" | genero == "femininos"){
        console.log("Gerando Nomes Femininos Aleatorios")
        return nomesFemininos[random(9,0)] 
    }

    if(regexGerarNomes().exec(dados)[1] == undefined && regexGerarNomes().exec(dados)[2] == undefined ) {
        console.log("Gerando Nomes Aleatorios")
        return nomes[random(19,0)] 
    }

}


export function regexGerarNomes() {
    let regExp = /gerar nomes?\s?(masculinos?|femininos?)?\s?(\d+)?/i
    return regExp
}

/*
0: "gerar nome masculino 10"
1: "masculino" // "femininos"
2: "10"
groups: undefined
index: 0
input: "gerar nome masculino 10"
*/