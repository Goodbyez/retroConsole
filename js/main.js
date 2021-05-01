function pushButton(letter, vHeigh, vWidth){
    document.getElementById(letter).style.height =vHeigh;
    document.getElementById(letter).style.width =vWidth;
}
function unPushButton(letter2, vHeigh2, vWidth2){
    document.getElementById(letter2).style.height = vHeigh2;
    document.getElementById(letter2).style.width = vWidth2;
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
function playVFX(vfxRef){
    let audio = document.getElementById(vfxRef);
    audio.play();
}

function pusher(elEvento) {
    let buttonsOK = '2.6em';
    let buttonsWASD = '2.2em';
    let buttonWhiteH = '0.9em';
    let buttonWhiteW = '1.6em';
    let soundWButton = "audioWPush";
    let soundRButton = "audioPush";
    var evento = window.event || elEvento;
    if(evento.keyCode==79){pushButton('o', buttonsOK, buttonsOK); playVFX(soundRButton)}
    if(evento.keyCode==75){pushButton('k', buttonsOK, buttonsOK); playVFX(soundRButton)}
    if(evento.keyCode==87){pushButton('w', buttonsWASD, buttonsWASD); playVFX(soundRButton)}
    if(evento.keyCode==65){pushButton('a', buttonsWASD, buttonsWASD); playVFX(soundRButton)}
    if(evento.keyCode==83){pushButton('s', buttonsWASD, buttonsWASD); playVFX(soundRButton)}
    if(evento.keyCode==68){pushButton('d', buttonsWASD, buttonsWASD); playVFX(soundRButton)}
    if(evento.keyCode==86){play(1, 'bsoMute'); pushButton('v', soundWButton, buttonWhiteH, buttonWhiteW)}
}
function unPusher(elEvento2) {
    var evento = window.event || elEvento2;
    let buttonsOK = '3em';
    let buttonsWASD = '2.5em';
    let buttonWhiteH = '1.1em';
    let buttonWhiteW = '2em';
    if(evento.keyCode==79){unPushButton('o', buttonsOK, buttonsOK)}
    if(evento.keyCode==75){unPushButton('k', buttonsOK, buttonsOK)}
    if(evento.keyCode==87){unPushButton('w', buttonsWASD, buttonsWASD)}
    if(evento.keyCode==65){unPushButton('a', buttonsWASD, buttonsWASD)}
    if(evento.keyCode==83){unPushButton('s', buttonsWASD, buttonsWASD)}
    if(evento.keyCode==68){unPushButton('d', buttonsWASD, buttonsWASD)}
    if(evento.keyCode==86){unPushButton('v', buttonWhiteH, buttonWhiteW)}
}


function systemOn(){
    document.onkeydown = pusher;
    document.onkeyup = unPusher;
}



systemOn();