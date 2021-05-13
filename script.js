    /*USUARIO*/
/*variaveis*/
const listaSuspensaUser = document.getElementById("lista-suspensa")
const divUsuario =document.querySelector(".escolha-user")
let escolhaUsuario = "" 
 let option =listaSuspensaUser.value  

/*variaveis*/
function verificarUsuario() {
    let option =listaSuspensaUser.value  
    divUsuario.textContent= `Você escolheu ${option} !` 
    escolhaUsuario=option
    //console.log(option)
    console.log(escolhaUsuario) 
    mostrarNaDiv()
  return option  
}  

 listaSuspensaUser.addEventListener('change', function () {
      verificarUsuario()  

 });  


    /*CONDICOES DE VITORIA*/   
const divResult = document.querySelector(".show-result") 

function mostrarNaDiv () { 
    if(escolhaUsuario === "pedra" && escolhaMaquina ==="pedra") {
        divResult.textContent="Empate" 
    } 
    if(escolhaUsuario === "papel" && escolhaMaquina ==="papel") {
        divResult.textContent="Empate" 
    }  
    if(escolhaUsuario === "tesoura" && escolhaMaquina ==="tesoura") {
        divResult.textContent="Empate" 
    }  

    /*usuario*/
    if(escolhaUsuario === "pedra" && escolhaMaquina ==="papel") {
        divResult.textContent="A máquina ganhou!" 
    }  
    if(escolhaUsuario === "pedra" && escolhaMaquina ==="tesoura") {
        divResult.textContent="Parabéns ,você ganhou!" 
    }  
    
    if(escolhaUsuario === "papel" && escolhaMaquina ==="pedra") {
        divResult.textContent="Parabéns ,você ganhou!" 
    }  

    if(escolhaUsuario === "papel" && escolhaMaquina ==="tesoura") {
        divResult.textContent="A máquina ganhou!"
    }  

    if(escolhaUsuario === "tesoura" && escolhaMaquina ==="pedra") {
        divResult.textContent="A máquina ganhou!"
    }  

    if(escolhaUsuario === "tesoura" && escolhaMaquina ==="papel") {
        divResult.textContent="Parabéns ,você ganhou!" 
    } 
 
/*maquina*/ 
    if(escolhaMaquina === "pedra" && escolhaUsuario ==="papel") {
    divResult.textContent="Parabéns ,você ganhou!"
    }  


    if(escolhaMaquina === "pedra" && escolhaUsuario ==="tesoura") {
        divResult.textContent="A máquina ganhou!" 
    }   


    if(escolhaMaquina === "papel" && escolhaUsuario ==="pedra") {
        divResult.textContent="A máquina ganhou!" 
    }  

    if(escolhaMaquina === "papel" && escolhaUsuario ==="tesoura") {
        divResult.textContent="Parabéns ,você ganhou!"
    }  

    if(escolhaMaquina === "tesoura" && escolhaUsuario ==="pedra") {
        divResult.textContent="Parabéns ,você ganhou!"
    }  

    if(escolhaMaquina === "tesoura" && escolhaUsuario ==="papel") {
        divResult.textContent="A máquina ganhou!"
    } 

}
  
    /*MAQUINA*/  
/*variaveis*/
const btnMaquina = document.getElementById("btn__maquina") 
const divMaquina = document.getElementById("escolha-maquina") 
let escolhaMaquina = ""

function GerarNumeroRandom (min,max){
    return Math.floor(Math.random() * (max-min) + min)
   }

btnMaquina.addEventListener("click",function(){ 
let array =["papel","tesoura","pedra"]  

let result =array[GerarNumeroRandom(1,4)-1]
    divMaquina.textContent =`A máquina escolheu ${result} !`
    escolhaMaquina=result
    mostrarNaDiv()

}) 


 /*reset*/  

const jogarNovamente = document.querySelector(".jogar-novamente")

jogarNovamente.addEventListener("click" ,function (params) {
    divMaquina.textContent =`-`
    divUsuario.textContent= `-` 
    
    divResult.textContent="-" 
   
}) 

 /*QUADRO PONTOS*/  

 let userPoint = document.getElementById("user-result")

 function points () {
    if( divResult.textContent==="A máquina ganhou!"){
        userPoint.textContent= "1"
    }
 }


