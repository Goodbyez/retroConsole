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
    if(evento.keyCode==87){pushButton('w')}
    if(evento.keyCode==65){pushButton('a')}
    if(evento.keyCode==83){pushButton('s')}
    if(evento.keyCode==68){pushButton('d')}
}
function unPusher(elEvento2) {
    var evento = window.event || elEvento2;
    if(evento.keyCode==79){unPushButton('o')}
    if(evento.keyCode==75){unPushButton('k')}
    if(evento.keyCode==87){unPushButton('w')}
    if(evento.keyCode==65){unPushButton('a')}
    if(evento.keyCode==83){unPushButton('s')}
    if(evento.keyCode==68){unPushButton('d')}
}

function systemOn(){
    document.onkeydown = pusher;
    document.onkeyup = unPusher;
}