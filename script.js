const ligada = document.getElementById("ligada");
const desligada = document.getElementById("desligada");

const lampada = document.getElementById("lampada");


function retornaQuebrada (){
    return lampada.src.indexOf("quebrada") > 1
}


function ligarLampada(){
    if(!retornaQuebrada()){
        lampada.src = "./img/ligada.jpg"
    }
    }
    
function desligarLampada(){
    if(!retornaQuebrada()){
        lampada.src = "./img/desligada.jpg"
    }
    
}
function quebrarLampada(){
    lampada.src = "./img/quebrada.jpg"
}
ligada.addEventListener("click", ligarLampada);
lampada.addEventListener("mouseover",ligarLampada)
desligada.addEventListener("click", desligarLampada);
lampada.addEventListener("mouseleave",desligarLampada)

lampada.addEventListener("dblclick",quebrarLampada)