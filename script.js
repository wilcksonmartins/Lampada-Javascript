const ligada = document.getElementById("ligardesligar");

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


function ligaeDesliga(){
    if(!retornaQuebrada()){
        if(ligardesligar.textContent === "ligar"){
            ligarLampada()
            ligardesligar.textContent = "desligar"
        }else{
            desligarLampada()
            ligardesligar.textContent = "ligar"
        }
    }
    
}

ligardesligar.addEventListener("click", ligaeDesliga);








lampada.addEventListener("mouseover",ligarLampada)
lampada.addEventListener("mouseleave",desligarLampada)
lampada.addEventListener("dblclick",quebrarLampada)