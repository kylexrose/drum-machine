let saves = {
            "Basic Beat": ["snareBeat3","snareBeat7", "hihatBeat1",
                        "hihatBeat2", "hihatBeat3", "hihatBeat4", 
                        "hihatBeat5", "hihatBeat6", "hihatBeat7", 
                        "hihatBeat8", "kickBeat1", "kickBeat5"],
            save2: ["kickBeat1", "hihatBeat1"]
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
    saves[saveName] = newSave;
    populateSavedBeats();
}

function recallSave(beatArray){
    clearAll();
    for(let beat of beatArray){
        console.log(beat)
        document.querySelector(`#${beat}`).checked = true;
    }
}