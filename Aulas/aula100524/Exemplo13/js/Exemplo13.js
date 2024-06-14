function checaCookies(){
    var text = "";
    if (navigator.cookieEnabled == true){
        text = "Cookies Ativados";
    } else {
        text = "Cookies Desativados";
    }
    document.getElementById("demo").innerHTML = text;
}