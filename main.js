let stop = true;

const bpm = document.querySelector("#speed");
let speed = Math.floor(60 / bpm.value * 500)
bpm.addEventListener('change', () => {
    stop = false;
    stopOrStartLoop();
    speed = Math.floor(60 / bpm.value * 500);
})

const numOfBeats = document.querySelector("#beatsLooped");
let beatsOnLoop = numOfBeats.value;
numOfBeats.addEventListener('change', () => {
    stop = false;
    stopOrStartLoop();
    beatsOnLoop = numOfBeats.value;
    updatePage();
})

document.querySelector("#clearAll").addEventListener('click', () => clearAll())


updatePage();



const playButton = document.querySelector("#play")
playButton.addEventListener('click', () => stopOrStartLoop())

//functions ===============================================================

function updatePage(){
    document.querySelector("#instrumentInterface").innerHTML = "";
    let table = `<thead><tr><th scope="col">Instrument</th><th scope="col">Select All`;
    for(let i = 1; i <= beatsOnLoop; i++){
        table += `<th scope="col">${i}</th>`
        if(i === beatsOnLoop){
            table += `</tr></thead>`
        }
    }
    if(instruments.length){
        table += `<tbody id="instrumentCheckboxes">`
    }
    for (let i = 0; i < instruments.length; i++){
        table += `<tr><th scope="row">${instruments[i].instrument}</th><td><input type="checkbox" class="${instruments[i].sound} selectAll">`;
        for(let j = 1; j <= beatsOnLoop; j++){
            table += `<td><input type="checkbox" class="${instruments[i].sound} beat beat${j}" id="${instruments[i].sound}Beat${j}"></td>`
            if (j === beatsOnLoop){
                table += `</tr>`;
            }
        }
        if (i === instruments.length - 1){
            table += `</tbody>`
        }
    }
    document.querySelector("#instrumentInterface").innerHTML = table;
    const selectAllBeats = document.querySelectorAll(".selectAll");
    for(let instrument of selectAllBeats){
        instrument.addEventListener('change', (e) => selectAll(e.target, instrument.classList[0]))
}
}

function beatPlayback(){
    let beatCount = 1;
    const play = setInterval(() => {
        console.log(beatCount)
        stop ? clearInterval(play) : true;
        let currentBeat = document.querySelectorAll(`.beat${beatCount}`);
        for(let instrument of currentBeat){
            if(instrument.checked){
                eval(instrument.classList[0]).load()
                eval(instrument.classList[0]).play()
            }
        }
        beatCount++;
        beatCount = (beatCount > beatsOnLoop) ? 1 : beatCount;
    }, speed);
}

function selectAll(checkbox, instrument){
    const allBoxes = document.querySelectorAll(`.${instrument}`);
    for(let current of allBoxes){
        current.checked = checkbox.checked;
    }
}

function stopOrStartLoop(){
    if(stop){
        stop = !stop;
        playButton.innerHTML = "Stop";
        beatPlayback();
    }
    else{
        stop = !stop;
        playButton.innerHTML = "Play";
    }
}

function clearAll(){
    let all = document.querySelectorAll(".beat");
    for (let beat of all){
        beat.checked = false;
    }
    for (let box of document.querySelectorAll(".selectAll")){
        box.checked = false;
    }
}