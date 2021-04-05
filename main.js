// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const tock = new Audio('sounds/tock.mp3');
const metCheck = document.querySelector("#metCheck");
const hihatCheck = document.querySelector("#hihatCheck");
const snareCheck = document.querySelector("#snareCheck");
const kickCheck = document.querySelector("#kickCheck");
const metBeats = document.querySelector("#metBeats");
const hihatBeats = document.querySelector("#hihatBeats");
const snareBeats = document.querySelector("#snareBeats");
const kickBeats = document.querySelector("#kickBeats");

let beatCount = 1
const beatsPerMeasure = 4;

// This function is called every 600ms
function update() {
    // Play the 'tick' sound
    console.log(beatCount);
    if(metCheck.checked){
        if (beatCount !== beatsPerMeasure){
            tick.play();
        }else{
            tock.play();
        }
    }
    if(hihatCheck.checked){
        hihat.load();
        checkBeat(hihatBeats.value.split(""), hihat)
    }
    if(snareCheck.checked){
        checkBeat(snareBeats.value.split(""), snare)
    }
    if(kickCheck.checked){
        checkBeat(kickBeats.value.split(""), kick)
    }
    if (beatCount !== beatsPerMeasure){
        beatCount++;
    }else{
        beatCount = 1;
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

function checkBeat(instrumentBeats, audio){
    console.log(instrumentBeats)
    if(instrumentBeats.indexOf(beatCount.toString()) !== -1){
        audio.play();
    }
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
 