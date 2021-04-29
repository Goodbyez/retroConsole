function pushButton(letter){
    document.getElementById(letter).style.display ="none";
}
function unPushButton(letter2){
    document.getElementById(letter2).style.display = "block";
}
function pusher(elEvento) {
    var evento = window.event || elEvento;
    if(evento.keyCode==79){pushButton('o')}
    if(evento.keyCode==75){pushButton('k')}
}
function unPusher(elEvento2) {
    var evento = window.event || elEvento2;
    if(evento.keyCode==79){unPushButton('o')}
    if(evento.keyCode==75){unPushButton('k')}
}

function systemOn(){
    document.onkeydown = pusher;
    document.onkeyup = unPusher;
}