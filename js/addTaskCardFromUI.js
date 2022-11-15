import {todoSessionTotalCard,
    progressSessionTotalCard,
    reviewSessionTotalCard,
    endSessionTotalCard,
    todoSessionCardArea,
    progressSessionCardArea,
    reviewSessionCardArea,
    endSessionCardArea
     } from "./selectors.js";
let todoTotalCardArray = [];
let progressTotalCardArray = []; 
let reviewTotalCardArray = [];
let endTotalCardArray = [];
export function addTaskCardAddUI(newTaskCardValues){
    let taskCardSession = newTaskCardValues[0];
    let taskCardTitle = newTaskCardValues[1];
    let taskCardPriority = newTaskCardValues[2];
    createCardElements(taskCardSession,taskCardTitle,taskCardPriority);
}
function createCardElements(taskCardSession,taskCardTitle,taskCardPriority){
    //Create Elements
    const newTaskCard = document.createElement("div");
    const newTaskCardPriority = document.createElement("div");
    const newTaskCardTitle = document.createElement("h1");
    const newTaskCardSettingsMenu = document.createElement("div");
    const newTaskCardSettingsMenuOpenIcon = document.createElement("i");
    //Added ClassName for New Elements
    newTaskCard.className = "task-card";
    newTaskCardPriority.className = "task-card-priority";
    newTaskCardTitle.className = "task-card-title";
    newTaskCardSettingsMenu.className = "settings-icon";
    newTaskCardSettingsMenuOpenIcon.classList = "fa fa-light fa-gear";
    //Append Child 
    newTaskCardSettingsMenu.appendChild(newTaskCardSettingsMenuOpenIcon);
    newTaskCardTitle.appendChild(document.createTextNode(taskCardTitle));
    newTaskCard.appendChild(newTaskCardPriority);
    newTaskCard.appendChild(newTaskCardTitle);
    newTaskCard.appendChild(newTaskCardSettingsMenu);
    //Select Priority Color
    if(taskCardPriority == "highPriority") newTaskCardPriority.style.background = "var(--priority--red)";
    if(taskCardPriority == "mediumPriority") newTaskCardPriority.style.background = "var(--priority--yellow)";
    if(taskCardPriority == "lowPrirority") newTaskCardPriority.style.background = "var(--priority--blue)";
    newCardSelectSession(taskCardSession,newTaskCard);
}
function newCardSelectSession(taskCardSession,newTaskCard){
    if(taskCardSession == "todoSession"){
        todoSessionCardArea.appendChild(newTaskCard);
        todoTotalCardArray.push(newTaskCard);
        todoSessionTotalCard.textContent = `${todoTotalCardArray.length}`;
    }
    else if(taskCardSession == "progressSession"){
        progressSessionCardArea.appendChild(newTaskCard);
        progressTotalCardArray.push(newTaskCard);
        progressSessionTotalCard.textContent = `${progressTotalCardArray.length}`;
    }
    else if(taskCardSession == "reviewSession"){
        reviewSessionCardArea.appendChild(newTaskCard);
        reviewTotalCardArray.push(newTaskCard);
        reviewSessionTotalCard.textContent = `${reviewTotalCardArray.length}`;
    }
    else if(taskCardSession == "endSession"){
        endSessionCardArea.appendChild(newTaskCard);
        endTotalCardArray.push(newTaskCard);
        endSessionTotalCard.textContent = `${endTotalCardArray.length}`;
    }
}