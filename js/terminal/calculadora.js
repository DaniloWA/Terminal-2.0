import { getDadosEntrada } from "../main.js"

export function operadoresIA(operadoresTxt) {
    let dado = operadoresTxt
    let operador = 0

    if(dado == "mais" || dado == "+"){
         operador = 1
         return operador
    }

    if(dado == "menos" || dado == "-"){
         operador = 2
         return operador
    }

    if(dado == "dividir" || dado == "/" || dado == "por"){
         operador = 3
         return operador
    }

    if(dado == "vezes" || dado == "*"){
         operador = 4
         return operador
    } 

}

export function calculos (n1, n2, operador) {
    let num1 = Number(n1)
    let num2 = Number(n2)
    
    let resultado
    switch (operador) {
         case 1:
              resultado = num1 + num2
              return resultado
              break;
         case 2:
              resultado = num1 - num2
              return resultado
              break;
         case 3:
              resultado = num1 / num2
              return resultado
              break;
         case 4:
              resultado = num1 * num2
              return resultado
              break;
    }

}

export function respostaCalculos(){
    let dados = getDadosEntrada()
    let dadosCalculadorRG = calculadoraRG()
   if(dadosCalculadorRG.exec(dados)){
    console.log("Gerando Resposta Calculadora")
        let num1 = dadosCalculadorRG.exec(dados)[1]
        let num2 = dadosCalculadorRG.exec(dados)[3]
        let operadores = dadosCalculadorRG.exec(dados)[2]
        console.log(dadosCalculadorRG.exec(dados)[2])
        let respostaF = calculos(num1,num2,operadoresIA(operadores))
    return respostaF
   }
}

 

export function calculadoraRG(){
    let regExp = /(\d+) (mais|\+|\-|\*|\/|menos|dividido|por|vezes) (\d+)/i
    return regExp
  }