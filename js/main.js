import * as Calculadora from "../js/terminal/calculadora.js"
import * as AnalisarTXT from "../js/terminal/analisarTxt.js"
import * as EmbaralharTXT from "../js/terminal/embaralhar.js"

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
    let dados = getDadosEntrada()

    adcElemento(Calculadora.calculadoraRG().exec(dados), Calculadora.respostaCalculos())
    adcElemento(AnalisarTXT.analisarTxt().exec(dados), AnalisarTXT.analisarTexto())
    adcElemento(EmbaralharTXT.regexEmbaralharTexto().exec(dados), EmbaralharTXT.embaralharTexto())
    
}

export function adcElemento(exec,txt){
    let dados = getDadosEntrada()
    let paragrafo = document.createElement("p")
    let paragrafo2 = document.createElement("p")

    if(exec){
        console.log(exec)
        paragrafo.className = 'resposta'
        paragrafo.innerHTML = getHora() + ` : ${dados} <br>`

        div.appendChild(paragrafo)

        paragrafo2.className = 'resposta'
        paragrafo2.innerHTML = getHora() + ` : ${txt}<br>`

        return div.appendChild(paragrafo2)
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
