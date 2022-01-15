export function gerarNumerosPortugues(){
    let numeroTelefone1 = [9]
    let numeroTelefone2 = []
    let numeroTelefone3 = []

    for(let i = 0; i < 2; i++){
        numeroTelefone1.push(random(9,0))
    }
    for(let i = 0; i < 3; i++){
        numeroTelefone2.push(random(9,0))
    }
    for(let i = 0; i < 3; i++){
        numeroTelefone3.push(random(9,0))
    }
    let txt1 = numeroTelefone1.toString()
    let txt2 = numeroTelefone2.toString()
    let txt3 = numeroTelefone3.toString()

    let numeroTratado1 = txt1.replace(regexVirgula() , "")
    let numeroTratado2 = txt2.replace(regexVirgula() , "")
    let numeroTratado3 = txt3.replace(regexVirgula() , "")
   
    console.log("Gerando Numero Telefone Portugues")
    return " : (+351) " +  numeroTratado1 + "-" + numeroTratado2 + "-" + numeroTratado3
}

export function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt

}

export function regexGerarNumeroTelefone() {
    let regExp = /gerar numero\s?(portugues)?\s?/i
    return regExp
}

function regexVirgula(){
    let regExp1 = /,/ig
    return regExp1
}


/*
(+351) 942330477
*/