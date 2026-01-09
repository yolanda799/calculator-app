function insert(num){
    let resultado = document.getElementById("resultado");
    resultado.value += num;
}

function clean(){
    document.getElementById("resultado").value = "";
}
function backspace(){
    let resultado = document.getElementById("resultado");
    resultado.value = resultado.value.slice(0, -1);
    resultado.style.color = "black"; 
}

function calcular(){
    let resultado = document.getElementById("resultado").value;
    if(resultado){
        try {
            document.getElementById("resultado").value = eval(resultado);
        } catch {
            document.getElementById("resultado").value = "Error";
        }
    } else {
        document.getElementById("resultado").value = "Error";
    }
}
