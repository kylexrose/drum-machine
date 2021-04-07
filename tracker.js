const tracker = document.querySelector("#tracker");

function resetTracker(){
    let reset = document.querySelector(`.cell1`).getBoundingClientRect();
    tracker.style.transition = "none";
    tracker.style.left = `${reset["left"]}px`;
    tracker.offsetHeight;
    tracker.style.transition = `left ${speed}ms linear`;
}

function updateTracker(currentBeat){
    if (currentBeat === 1){
        resetTracker();
    }
    let position = document.querySelector(`.cell${currentBeat}`).getBoundingClientRect();
    tracker.style.left = `${position["right"]}px`;
}