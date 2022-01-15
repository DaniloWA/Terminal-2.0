import { getDadosEntrada} from "../main.js"

export function embaralharTexto(){
    let dados = getDadosEntrada()
    let dadosLimpos = dados.replace(regexEmbaralharTexto(), '' )
    let embaralhar = dadosLimpos.split('').sort(function(){return 0.5-Math.random()}).join('');
    return embaralhar
   }

export function regexEmbaralharTexto() {
    let regExp = /embaralhar texto /i
    return regExp
}