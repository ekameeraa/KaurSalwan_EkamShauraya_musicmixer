var arr;
var snd1;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function func() {
    var txt = document.getElementById("div2").innerText;
    arr = txt.split(" ");
    for (i = 0; i < arr.length; i++) {
        snd1 = new Audio();
        var src1 = document.createElement("source");
        src1.type = "audio/mp3";
        src1.src = "music/" + arr[i] + ".mp3";
        snd1.appendChild(src1);
        snd1.play();
    }

}

function pauseaudio() {
    for (i = 0; i < arr.length; i++) {
        snd1.pause();
    }

}

function reset() {
    location.reload();
}