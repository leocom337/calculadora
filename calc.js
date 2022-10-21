var operacao = null;
var resultado = 0;
var primeira = true;
var primeiro = 0;
var gray=false;

function btnN(valor){
    var visor = document.getElementById("visor");
    if(gray){
        visor.value = 0
    }
    if(operacao == null && visor.value != 0){
        visor.value += valor;
    }
    if(visor.value == 0){
        visor.value = valor;
        gray = false;
    }
    
}

function btnF(valor){
    var visor = document.getElementById("visor");
    if(!primeira){
        operacoes(visor);
        primeiro=resultado;
    }else
        primeiro = visor.value
    operacao = valor;
    primeira = false;
    visor.value = 0;
    gray = false;
}

function btnc(valor){
    var visor = document.getElementById("visor");
    visor.value = 0;
    operacao = null;
    primeira = true;
    gray = false;
}

function operacoes(visor){
    switch(operacao){
        case "/":
            resultado = primeiro / visor.value;
            break
        case "*":
            resultado = visor.value * primeiro;
            break
        case "-":
            resultado =  primeiro - visor.value;
            break
        case "+":
            resultado = parseInt(visor.value) + parseInt(primeiro);
            break
        default:
    }
}

function btnig(){
    var visor = document.getElementById("visor");
    operacoes(visor);
    console.log(resultado)
    visor.value = resultado;
    resultado = 0;
    operacao = null;
    primeira = true;
    primeiro = 0;
    gray = true;    
}

