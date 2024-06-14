document.getElementById("btn1").addEventListener("click", mostraData, false);

function mostraData(){
    document.getElementById("demo").innerHTML = Date();
}