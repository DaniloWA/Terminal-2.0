import * as Calculadora from "../js/terminal/calculadora.js"

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
    createLinha()
    adcElemento(Calculadora.calculadoraRG().exec(dados), Calculadora.respostaCalculos())
}


export function createLinha(){
  let linhatxt = document.createElement("p")
  
  linhatxt.className = 'resposta'

  div.appendChild(linhatxt)
} 

export function adcElemento(exec,txt){
    let dados = getDadosEntrada()
    let paragrafo = document.createElement("p")
    let paragrafo2 = document.createElement("p")

    paragrafo.className = 'resposta'
    paragrafo.innerHTML = getHora() + ` : ${dados} <br>`

    div.appendChild(paragrafo)

    if(exec){
        console.log(exec)
        paragrafo2.className = 'resposta'
        paragrafo2.innerHTML = getHora() + ` : ${txt}<br>`
        return div.appendChild(paragrafo2)
    }
    if(!exec){
        console.log(exec)
        paragrafo2.className = 'resposta'
        paragrafo2.innerHTML = getHora() + ` : Digite Help! <br>`
        return div.appendChild(paragrafo2)
    }
}

/*

    if(regexGerarNumeroTelefone().exec(dados)){
        console.log("Gerando Numero Telefone Portugues")
        let div = document.getElementById("res") 
        let paragrafo = document.createElement("p")
        paragrafo.id = 'resposta'
        paragrafo.innerHTML = getHora() + " : (+351) " +  numeroTratado1 + "-" + numeroTratado2 + "-" + numeroTratado3
        div.appendChild(paragrafo)
    }

    if(regexEmbaralharTexto().exec(dados)){
       console.log("Embaralhando Texto")
       let div = document.getElementById("res") 
       let paragrafo = document.createElement("p")
       paragrafo.id = 'resposta'
       paragrafo.innerHTML = getHora() + " : " + embaralhar
       div.appendChild(paragrafo)
    }

*/
  export function getHora() {
    let data    = new Date()
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    
    var str_hora = hora + ':' + min + ':' + seg;
    
    return str_hora
  }
