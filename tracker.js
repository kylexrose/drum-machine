const tracker = document.querySelector("#tracker");

function resetTracker(){
    let reset = document.querySelector(`.beat1`).getBoundingClientRect();
    tracker.style.left = `${reset["x"] - 10}px`;
}

function updateTracker(currentBeat){
    let position = document.querySelector(`.beat${currentBeat}`).getBoundingClientRect();
    console.log(currentBeat)
    tracker.style.left = `${position["x"] - 10}px`;
}