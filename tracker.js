const tracker = document.querySelector("#tracker");

function resetTracker(){
    let reset = document.querySelector(`.beat1`).getBoundingClientRect();
    tracker.style.transition = "none";
    tracker.style.left = `${reset["left"] - 10}px`;
    tracker.offsetHeight;
    tracker.style.transition = `left ${speed}ms linear`;
}

function updateTracker(currentBeat){
    if (currentBeat === 1){
        let end = document.querySelector(`.beat${beatsOnLoop}`).getBoundingClientRect();
        tracker.style.transition = `left ${speed/2}ms linear`;
        tracker.style.left = `${end["right"] + 10}px`;
        resetTracker();
        //tracker.offsetHeight;
        tracker.style.transition = `left ${speed}ms linear`;
    }
    let position = document.querySelector(`.beat${currentBeat}`).getBoundingClientRect();
    
    tracker.style.left = `${position["left"] + 5}px`;
}