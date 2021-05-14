const listaSuspensa= document.getElementById("lista-suspensa")
let divUser= document.querySelector(".escolha-user") 
const btnMaquina = document.getElementById("btn__maquina") 
const divMaquina = document.getElementById("escolha-maquina") 


function verificarsaida(opcao) {
    return opcao
}


function outputUsuario(callback) {


listaSuspensa.addEventListener('change', function (params) {   
let opcaoSelecionada = listaSuspensa.options[listaSuspensa.selectedIndex].text;
console.log(opcaoSelecionada) 
divUser.innerHTML= ` Você escolheu ${opcaoSelecionada} !`


})



} 




function outputMaquina(params) {

function GerarNumeroRandom (min,max){
        return Math.floor(Math.random() * (max-min) + min)
       }

    btnMaquina.addEventListener('click', function (params) {   
        let array =["papel","tesoura","pedra"]  

        let result =array[GerarNumeroRandom(1,4)-1]
            divMaquina.innerHTML =`A máquina escolheu ${result} !`

    })
    
    }  

outputMaquina()  

function condicaodeVitoria( ) {
    
    console.log(outputUsuario())
} 

condicaodeVitoria()