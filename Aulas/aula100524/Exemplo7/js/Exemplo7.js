
var x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML =
'O texto do primeiro parágrafo (indice 0) é: ' + x[0].innerHTML;

x = document.getElementsByClassName("intro");
document.getElementById("demo1").innerHTML =
'O texto do primeiro parágrafo (indice 1) é: ' + x[1].innerHTML;