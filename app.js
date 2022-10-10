let segundos = 0;
let min = 0;
let horas = 0;
let segundosDec = 0;
let minDec = 0;
let horasDec = 0;
let fgCount = 0;
let fgIsValid = 0;
let fgIsPaused = 1;

console.log('fgCount = '+fgCount)

var alarme = new Audio('notifcacao_fim_contagem.mp3');

const body = document.querySelector("body");
const play = document.querySelector("#start");
const cancel = document.querySelector("#cancel");
const setTime = document.querySelector("#setTime");
const clearTimer = document.querySelector("#clearTimer");
const h = document.querySelector("#inputHoras");
const m = document.querySelector("#inputMin");
const s = document.querySelector("#inputSeg");
const hd = document.querySelector("#inputHorasDec");
const md = document.querySelector("#inputMinDec");
const sd = document.querySelector("#inputSegDec");
const corpoTimer = document.getElementById('note');

corpoTimer.innerHTML = 
    `<h3 class="textTimer">
        `+horas+``+horasDec+`
        : `+min+``+minDec+`
        : `+segundos+``+segundosDec+`
    </h3>`;

setTime.addEventListener('click',
    function(){
        if(s.value > 5 || s.value < 0) {
            window.alert("Favor inserir um tempo válido!5")
        }
        else if(sd.value > 9 || sd.value < 0) {
            window.alert("Favor inserir um tempo válido!4")
        }
        else if(m.value > 5 || m.value < 0) {
            window.alert("Favor inserir um tempo válido!3")
        }
        else if(md.value > 9 || md.value < 0) {
            window.alert("Favor inserir um tempo válido!2")
        }
        else if(h.value > 9 || m.value < 0) {
            window.alert("Favor inserir um tempo válido!")
        }
        else if(hd.value > 9 || hd.value < 0) {
            window.alert("Favor inserir um tempo válido!1")
        }
        else if (isNaN(parseInt(s.value))) {
            s.value = 0
        }
        else if (isNaN(parseInt(sd.value))) {
            sd.value = 0
        }
        else if (isNaN(parseInt(m.value))) {
            m.value = 0
        }
        else if (isNaN(parseInt(md.value))) {
            md.value = 0
        }
        else if (isNaN(parseInt(h.value))) {
            h.value = 0
        }
        else if (isNaN(parseInt(hd.value))) {
            hd.value = 0
        }
        else {
            console.log()
            fgCount = 0;
            segundos = s.value;
            segundosDec = sd.value;
            min = m.value;
            minDec = md.value;
            horas = h.value;
            horasDec = hd.value;
            if(segundos != 0 && segundosDec != 0 && min != 0 && minDec != 0 && horas != 0 && horasDec != 0) {
                fgIsValid = 0;
            } else {
                fgIsValid = 1;
            }
        }
        
    });
    
clearTimer.addEventListener('click',
    function(){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        hd.value = 0;
        md.value = 0;
        sd.value = 0;
    });

document.onkeyup = function(event) {
    if (event.keyCode == 73) {
        fgCount = 1;
        fgIsPaused = 0;
        window.alert("Iniciado!")
    }

    else if (event.keyCode == 80) {
        fgCount = 0;
        fgIsPaused = 1;
        window.alert("Pausado!")
    }
};

cancel.addEventListener('click',
    function(){
        fgCount = 0;
        fgIsPaused = 1;
        segundos = 0;
        segundosDec = 0;
        min = 0;
        minDec = 0;
        horas = 0;
        horasDec = 0;
        window.alert("Timer cancelado!")
    });

function contTempo() {
    if(fgCount == 1 && segundosDec == 0 && fgIsValid == 0) {
        window.alert("Favor inserir um tempo válido!");
        fgCount = 0;
        fgIsPaused = 1;
    }

    if (fgIsPaused == 1) {
        play.value = 'Start';
        play.addEventListener('click', 
            function() {
            fgCount = 1;
            fgIsPaused = 0;
            console.log('isPaused:'+fgIsPaused)
        })
    } 
    else if (fgIsPaused == 0) {
        play.value = 'Pause';
        play.addEventListener('click', 
        function() {
            fgCount = 0;
            fgIsPaused = 1;
            console.log('isPaused:'+fgIsPaused)
        })
    }

    document.getElementById('note').innerHTML = 
    `<h3 class="textTimer">
        `+horas+``+horasDec+`
        : `+min+``+minDec+`
        : `+segundos+``+segundosDec+`
    </h3>`
    if (segundosDec == 0 && segundos == 0 &&
        minDec == 0 && min == 0 && 
        horasDec == 0 && horas == 0 &&
        fgCount == 1 && fgIsValid == 1) {
            alarme.play();
            fgCount = 0;
            fgIsPaused = 1;
            window.alert("Fim!")
    }

    else if (segundosDec == 0 && segundos == 0 &&
        minDec == 0 && min == 0 && horasDec == 0 &&
        fgCount == 1 && fgIsValid == 1) {
        horas = horas - 1;
        horasDec = 9;
        min = 5;
        minDec = 9;
        segundos = 5;
        segundosDec = 9;
    }

    else if (segundosDec == 0 && segundos == 0 &&
        minDec == 0 && min == 0 &&
        fgCount == 1 && fgIsValid == 1) {
        horasDec = horasDec - 1;
        min = 5;
        minDec = 9;
        segundos = 5;
        segundosDec = 9;
    }

    else if (segundosDec == 0 && segundos == 0 &&
        minDec == 0 && 
        fgCount == 1 && fgIsValid == 1) {
        min = min - 1;
        minDec = 9;
        segundos = 5;
        segundosDec = 9;
    }

    else if (segundosDec == 0 && segundos == 0 && 
        fgCount == 1 && fgIsValid == 1) {
        minDec = minDec - 1;
        segundos = 5;
        segundosDec = 9;
    }

    else if (segundosDec == 0 && fgCount == 1 && fgIsValid == 1) {
        segundos = segundos - 1
        segundosDec = 9;
    }

    else if (fgCount == 1 && segundosDec != 0   && fgIsValid == 1) {
        segundosDec = segundosDec - 1;
    }
}

function onlynumber(input) {
    var theEvent = input || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }

setInterval(contTempo, 1000)

