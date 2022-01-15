import * as Calculadora from "../js/terminal/calculadora.js"
import * as AnalisarTXT from "../js/terminal/analisarTxt.js"
import * as EmbaralharTXT from "../js/terminal/embaralhar.js"
import * as GerarDestino from "../js/terminal/gerarDestino.js"
import * as GerarNomes from "../js/terminal/gerarNomes.js"
import * as GerarEmail from "../js/terminal/gerarEmail.js"
import * as GerarNumero from "../js/terminal/gerarNumeroPortugues.js"
import * as GerarSenha from "../js/terminal/gerarSenha.js"
import * as InverterTexto from "../js/terminal/inverterTexto.js"

const getDados = document.querySelector('#txt')
const div = document.querySelector(".display")


getDados.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        start()
    }
})

export function getDadosEntrada(){
    return document.querySelector('#txt').value.toString()
}

function start(){
    verificador()
}

export function adcElemento(exec,txt){
    let dados = getDadosEntrada()
    let paragrafo = document.createElement("p")
    let paragrafo2 = document.createElement("p")

    if(exec){
        console.log(exec)
        paragrafo.className = 'resposta'
        paragrafo.innerHTML = getHora() + ` : ${dados} <br>`
        paragrafo.className = 'digitado'

        div.appendChild(paragrafo)

        paragrafo2.className = 'resposta'
        paragrafo2.innerHTML = getHora() + ` : ${txt}<br>`

        return div.appendChild(paragrafo2)
    }
    else {
        return
    }
 
}


function verificador(){
    let dados = getDadosEntrada()

    if(Calculadora.calculadoraRG().exec(dados)){
        adcElemento(Calculadora.calculadoraRG().exec(dados), Calculadora.respostaCalculos())
    }
   
    if(AnalisarTXT.analisarTxt().exec(dados)){
        adcElemento(AnalisarTXT.analisarTxt().exec(dados), AnalisarTXT.analisarTexto())
    }
    
    if(EmbaralharTXT.regexEmbaralharTexto().exec(dados)){
        adcElemento(EmbaralharTXT.regexEmbaralharTexto().exec(dados), EmbaralharTXT.embaralharTexto())
    }
    
    if(GerarDestino.regexGerarDestino().exec(dados)){
        adcElemento(GerarDestino.regexGerarDestino().exec(dados), GerarDestino.destino())
    }
    
    if(GerarNomes.regexGerarNomes().exec(dados)){
        adcElemento(GerarNomes.regexGerarNomes().exec(dados), GerarNomes.gerarNomes())
    }
   
    if(GerarEmail.regexGerarEmail().exec(dados)){
        adcElemento(GerarEmail.regexGerarEmail().exec(dados), GerarEmail.Email())
    }

    if(GerarNumero.regexGerarNumeroTelefone().exec(dados)){
        adcElemento(GerarNumero.regexGerarNumeroTelefone().exec(dados), GerarNumero.gerarNumerosPortugues())
    }

    if(GerarSenha.regexGerarSenha().exec(dados)){
        adcElemento(GerarSenha.regexGerarSenha().exec(dados), GerarSenha.Senha())
    }
    
    if(InverterTexto.regexInverterTexto().exec(dados)){
        adcElemento(InverterTexto.regexInverterTexto().exec(dados), InverterTexto.inverterTexto())
    } 
}


export function getHora() {
    let data    = new Date()
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59

    var str_hora = hora + ':' + min + ':' + seg;

    return str_hora
}