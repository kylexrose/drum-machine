let saves = {
            "Basic Beat":   [8,["snareBeat3","snareBeat7", "hihatClosedBeat1",
                            "hihatClosedBeat2", "hihatClosedBeat3", "hihatClosedBeat4", 
                            "hihatClosedBeat5", "hihatClosedBeat6", "hihatClosedBeat7", 
                            "hihatClosedBeat8", "kickBeat1", "kickBeat5"]],
            "Techno-y Kinda?": [8,["snareBeat3", "snareBeat5", "hihatClosedBeat2", 
                            "hihatClosedBeat4", "hihatClosedBeat6", "hihatClosedBeat8", "kickBeat1", 
                            "kickBeat3", "kickBeat5", "kickBeat7"]]
            };

populateSavedBeats();

const saveList = document.querySelector("#saved");
saveList.addEventListener('change', () => {
    if(saveList.value === "add"){
        addLoop();
        saveList.value = "";
    }else{
        recallSave(saves[saveList.value]);
        saveList.value = "";
    }
})

function populateSavedBeats(){
    let savedBeats = `<option disabled selected value> -- Saved Loops -- </option>
    <option value="add">Add Loop</option>`;
    for (let key in saves){
        savedBeats += `<option value="${key}">${key}</option>`
    }
    document.querySelector("#saved").innerHTML = savedBeats;
}

function addLoop(){
    let saveName = prompt("Please name your save");
    if(saveName == null || saveName == ""){
        return;
    }
    let newSave = [];
    let allBeats = document.querySelectorAll(".beat");
    for (let beat of allBeats){
        if(beat.checked){
            newSave.push(beat.id);
        }
    }
    saves[saveName] = [beatsOnLoop, newSave];
    populateSavedBeats();
}

function recallSave(beatArray){
    clearAll();
    beatsOnLoop = beatArray[0];
    updatePage();
    for(let beat of beatArray[1]){
        console.log(beat)
        document.querySelector(`#${beat}`).checked = true;
    }
}