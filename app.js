const appContainer = document.querySelector(".app-container");
let newTaskCard = [];
let taskCardArrays;
let sessionValue = 1;
const addTaskCardMenuContainer = document.querySelector(".add-task-card-menu-container");
document.querySelector(".todo-session-add-task-button").addEventListener("click",()=>{
    appContainer.style.opacity = "0.3";
    addTaskCardMenuContainer.style.display = "flex";
});
document.querySelector(".add-task-card-menu-button").addEventListener("click",createNewTaskCard);
function createNewTaskCard(){
    appContainer.style.opacity = "1";
    addTaskCardMenuContainer.style.display = "none";
    const newTaskCardTitle = document.querySelector(".task-card-title-input").value;
    let taskCardPriorityValue;
    if(document.querySelector(".high-priority").checked == true){
        taskCardPriorityValue = 1;
    }
    else if(document.querySelector(".medium-priority").checked == true){    
        taskCardPriorityValue = 2;
    }
    else if(document.querySelector(".low-priority").checked == true){    
        taskCardPriorityValue = 3;
    }
    sessionValue = 1;
    newTaskCardAddUI(newTaskCardTitle,taskCardPriorityValue,sessionValue);
    let localStorageValuesArray = [newTaskCardTitle,taskCardPriorityValue];
    addtoLocalStorage(localStorageValuesArray);
}
function newTaskCardAddUI(newTaskCardTitle,taskCardPriorityValue){
    const newTaskCard = document.createElement("div");
    newTaskCard.className = "task-card";
    const taskCardPriority = document.createElement("div");
    taskCardPriority.className = "task-card-priority-value";
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
    const taskCardTitle = document.createElement("h1");
    taskCardTitle.className = "task-card-title";
    taskCardTitle.appendChild(document.createTextNode(newTaskCardTitle));
    const taskCardSettingsIcon = document.createElement("div");
    taskCardSettingsIcon.className = "task-card-settings-icon";
    taskCardSettingsIcon.innerHTML = "<img src='settings.png' alt=''>";
    const taskCardSettingsMenu = document.createElement("div");
    taskCardSettingsMenu.className = "task-card-settings-menu";
    const settingsChangeSessionTodo = document.createElement("div");
    settingsChangeSessionTodo.innerHTML = "Todo Session <img src='transfer.png' alt=''>";
    settingsChangeSessionTodo.addEventListener("click",()=>{
        sessionValue = 1;
        selectSession(sessionValue,newTaskCard);
    });
    const settingsChangeSessionProgress = document.createElement("div");
    settingsChangeSessionProgress.innerHTML = "Progress Session <img src='transfer.png' alt=''>";
    settingsChangeSessionProgress.addEventListener("click",()=>{
        sessionValue = 2;
        selectSession(sessionValue,newTaskCard);
    });
    const settingsChangeSessionCompleted = document.createElement("div");
    settingsChangeSessionCompleted.innerHTML = "Complete Session <img src='transfer.png' alt=''>";
    settingsChangeSessionCompleted.addEventListener("click",()=>{
        sessionValue = 3;
        selectSession(sessionValue,newTaskCard);
    });
    const settingsDeleteButtonTaskCard = document.createElement("div");
    settingsDeleteButtonTaskCard.innerHTML = "Delete Card <img src='delete.png' alt=''>";
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
    });
    document.querySelector(".todo-session-card-area").appendChild(newTaskCard);
    selectSession(sessionValue,newTaskCard);
};
function selectSession(sessionValue,newTaskCard,taskCards){
    if(sessionValue == 1) document.querySelector(".todo-session-card-area").appendChild(newTaskCard);
    if(sessionValue == 2) document.querySelector(".progress-session-card-area").appendChild(newTaskCard);
    if(sessionValue == 3) document.querySelector(".completed-session-card-area").appendChild(newTaskCard);
}
function checkCardFromStorage(){
    let taskCards; 
    if(localStorage.getItem("taskCards")===null){
        taskCards = [];
    }
    else{
        taskCards = JSON.parse(localStorage.getItem("taskCards"));
    }
    return taskCards;
}
function addtoLocalStorage(localStorageValuesArray){
    let taskCards = checkCardFromStorage();
    taskCards.push(localStorageValuesArray);
    localStorage.setItem("taskCards",JSON.stringify(taskCards));
}
document.addEventListener("DOMContentLoaded",()=>{
    let taskCards = checkCardFromStorage();
    taskCards.forEach(taskCard=>{
        taskCard.reduce((newTaskCardTitle,taskCardPriorityValue)=>{
            newTaskCardAddUI(newTaskCardTitle,taskCardPriorityValue);
        });
    });
});