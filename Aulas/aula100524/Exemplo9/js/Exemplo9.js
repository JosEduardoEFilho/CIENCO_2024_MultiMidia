function experimente(){
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length; i++){
        text += x.elements[i].value + " ";
    }
    document.getElementById("demo").innerHTML = text;
}