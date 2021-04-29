function pushButton(letter, value2){
    document.getElementById(letter).style.display ="none";
    let audio = document.getElementById(value2);
    audio.play();
}
function unPushButton(letter2){
    document.getElementById(letter2).style.display = "block";
}
function pusher(elEvento) {
    var evento = window.event || elEvento;
    if(evento.keyCode==79){pushButton('o', 'audioPush')}
    if(evento.keyCode==75){pushButton('k', 'audioPush')}
    if(evento.keyCode==87){pushButton('w', 'audioPush')}
    if(evento.keyCode==65){pushButton('a', 'audioPush')}
    if(evento.keyCode==83){pushButton('s', 'audioPush')}
    if(evento.keyCode==68){pushButton('d', 'audioPush')}
    if(evento.keyCode==86){play(1, 'bsoMute')}
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

var sumare=0;
function play(interp, idReference) {
    let audio = document.getElementById(idReference);
    if (interp > sumare){
        audio.play();
        sumare+=1;
    } else {
        audio.pause();
        sumare-=1;
    }
}

systemOn();