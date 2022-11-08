import { updateCardFromData , removeCardFromData } from "./firebase.js";
export function newTaskCardAddUI(newTaskCardTitle,taskCardPriorityValue,sessionValue){
    const taskCardPriority = document.createElement("div");
    const newTaskCard = document.createElement("div");
    const taskCardTitle = document.createElement("h1");
    const taskCardSettingsIcon = document.createElement("div");
    const taskCardSettingsMenu = document.createElement("div");
    const settingsChangeSessionTodo = document.createElement("div");
    const settingsChangeSessionProgress = document.createElement("div");
    const settingsChangeSessionCompleted = document.createElement("div");
    const settingsDeleteButtonTaskCard = document.createElement("div");
    newTaskCard.className = "task-card";
    taskCardPriority.className = "task-card-priority-value";
    selectPriority(taskCardPriorityValue,taskCardPriority);
    taskCardTitle.className = "task-card-title";
    taskCardTitle.appendChild(document.createTextNode(newTaskCardTitle));
    taskCardSettingsIcon.className = "task-card-settings-icon";
    taskCardSettingsIcon.innerHTML = "<img src='./img/settings.png' alt=''>";
    taskCardSettingsMenu.className = "task-card-settings-menu";
    settingsChangeSessionTodo.innerHTML = "Todo Session <img src='./img/transfer.png' alt=''>";
    settingsChangeSessionTodo.addEventListener("click",()=>{
        sessionValue = 1;
        selectSession(sessionValue,newTaskCard);
        updateCardFromData(newTaskCardTitle,taskCardPriorityValue,sessionValue);
    });
    settingsChangeSessionProgress.innerHTML = "Progress Session <img src='./img/transfer.png' alt=''>";
    settingsChangeSessionProgress.addEventListener("click",()=>{
        sessionValue = 2;
        selectSession(sessionValue,newTaskCard);
        updateCardFromData(newTaskCardTitle,taskCardPriorityValue,sessionValue);
    });
    settingsChangeSessionCompleted.innerHTML = "Complete Session <img src='./img/transfer.png' alt=''>";
    settingsChangeSessionCompleted.addEventListener("click",()=>{
        sessionValue = 3;
        selectSession(sessionValue,newTaskCard);
        updateCardFromData(newTaskCardTitle,taskCardPriorityValue,sessionValue);
    }); 
    settingsDeleteButtonTaskCard.innerHTML = "Delete Card <img src='./img/delete.png' alt=''>";
    taskCardSettingsMenu.appendChild(settingsChangeSessionTodo);
    taskCardSettingsMenu.appendChild(settingsChangeSessionProgress);
    taskCardSettingsMenu.appendChild(settingsChangeSessionCompleted);
    taskCardSettingsMenu.appendChild(settingsDeleteButtonTaskCard);
    taskCardSettingsIcon.appendChild(taskCardSettingsMenu);
    newTaskCard.appendChild(taskCardPriority);
    newTaskCard.appendChild(taskCardTitle);
    newTaskCard.appendChild(taskCardSettingsIcon);
    taskCardSettingsIcon.addEventListener("click",()=>{
        if(taskCardSettingsMenu.style.display === "none" || taskCardSettingsMenu.style.display == ""){
            taskCardSettingsMenu.style.display = "flex";
        }
        else {
            taskCardSettingsMenu.style.display = "none";
        }
    });
    settingsDeleteButtonTaskCard.addEventListener("click",()=>{
        settingsDeleteButtonTaskCard.parentElement.parentElement.parentElement.remove();
        removeCardFromData(newTaskCardTitle);
    });
    selectSession(sessionValue,newTaskCard);
};
function selectSession(sessionValue,newTaskCard){
    if(sessionValue == 1) document.querySelector(".todo-session-card-area").appendChild(newTaskCard);
    if(sessionValue == 2) document.querySelector(".progress-session-card-area").appendChild(newTaskCard);
    if(sessionValue == 3) document.querySelector(".completed-session-card-area").appendChild(newTaskCard);
}
function selectPriority(taskCardPriorityValue,taskCardPriority){
        if(taskCardPriorityValue == 1){
        taskCardPriority.style.background = "#E26868";
        taskCardPriority.appendChild(document.createTextNode("High Priority"));
        }
        else if(taskCardPriorityValue == 2){    
        taskCardPriority.style.background = "#69dfca";
        taskCardPriority.appendChild(document.createTextNode("Medium Priority"));
        }
        else if(taskCardPriorityValue == 3){    
        taskCardPriority.style.background = "#84adfd";
        taskCardPriority.appendChild(document.createTextNode("Low Priority"));
        }
};
