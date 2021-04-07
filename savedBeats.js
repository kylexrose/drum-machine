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

const saveList = document.querySelectorAll("#saved li");
for(let listItem of saveList){
    listItem.addEventListener('click', () => {
        console.log(listItem)
        if(listItem.innerText == "Add Loop"){
            addLoop();
        }else{
            recallSave(saves[listItem.innerText]);
        }
    })
}

function populateSavedBeats(){
    let savedBeats = `<li><a class="dropdown-item">Add Loop</a></li>`;
    for (let key in saves){
        savedBeats += `<li><a class="dropdown-item">${key}</a></li>`
    }
    document.querySelector("#saved").innerHTML = savedBeats;
    const saveList = document.querySelectorAll("#saved li");
    for(let listItem of saveList){
        listItem.addEventListener('click', () => {
            console.log(listItem)
            if(listItem.innerText == "Add Loop"){
                addLoop();
            }else{
                recallSave(saves[listItem.innerText]);
            }
        })
    }
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
    let newList = document.createElement("li");
    newList.innerHTML = `<a class="dropdown-item" id="${saveName}">${saveName}</a>`;
    document.querySelector("#saved").appendChild(newList);
    document.querySelector(`#${saveName}`).addEventListener('click', () => recallSave(saves[listItem.innerText]));
}

function recallSave(beatArray){
    clearAll();
    beatsOnLoop = beatArray[0];
    numOfBeats.value = beatArray[0];
    updatePage();
    for(let beat of beatArray[1]){
        console.log(beat)
        document.querySelector(`#${beat}`).checked = true;
    }
}