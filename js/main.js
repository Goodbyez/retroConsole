function pushButton(letter, valueSound, vHeigh, vWidth){
    document.getElementById(letter).style.height =vHeigh;
    document.getElementById(letter).style.width =vWidth;
    let audio = document.getElementById(valueSound);
    audio.play();
}
function unPushButton(letter2, vHeigh2, vWidth2){
    document.getElementById(letter2).style.height = vHeigh2;
    document.getElementById(letter2).style.width = vWidth2;
}



function pusher(elEvento) {
    var evento = window.event || elEvento;
    if(evento.keyCode==79){pushButton('o', 'audioPush', '2.6em', '2.6em')}
    if(evento.keyCode==75){pushButton('k', 'audioPush', '2.6em', '2.6em')}
    if(evento.keyCode==87){pushButton('w', 'audioPush', '2em', '2em')}
    if(evento.keyCode==65){pushButton('a', 'audioPush', '2em', '2em')}
    if(evento.keyCode==83){pushButton('s', 'audioPush', '2em', '2em')}
    if(evento.keyCode==68){pushButton('d', 'audioPush', '2em', '2em')}
    if(evento.keyCode==86){play(1, 'bsoMute'); pushButton('v', 'audioWPush','0.9em', '1.6em')}
}
function unPusher(elEvento2) {
    var evento = window.event || elEvento2;
    if(evento.keyCode==79){unPushButton('o', '3.4em', '3.4em')}
    if(evento.keyCode==75){unPushButton('k', '3.4em', '3.4em')}
    if(evento.keyCode==87){unPushButton('w', '2.4em', '2.4em')}
    if(evento.keyCode==65){unPushButton('a', '2.4em', '2.4em')}
    if(evento.keyCode==83){unPushButton('s', '2.4em', '2.4em')}
    if(evento.keyCode==68){unPushButton('d', '2.4em', '2.4em')}
    if(evento.keyCode==86){unPushButton('v', '1.2em', '2.2em')}
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