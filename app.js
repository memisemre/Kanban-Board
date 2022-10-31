const appContainer = document.querySelector(".app-container");
const addTaskCardMenuContainer = document.querySelector(".add-task-card-menu-container");
document.querySelector(".todo-session-add-task-button").addEventListener("click",()=>{
    appContainer.style.opacity = "0.3";
    addTaskCardMenuContainer.style.display = "flex";
});
document.querySelector(".add-task-card-menu-button").addEventListener("click",createTaskCard);
function createTaskCard(){
    const newTaskCard = document.createElement("div");
    newTaskCard.className = "task-card";
    const taskCardPriority = document.createElement("div");
    taskCardPriority.className = "task-card-priority-value";
        if(document.querySelector(".high-priority").checked == true){
        taskCardPriority.style.background = "#E26868";
        taskCardPriority.appendChild(document.createTextNode("High Priority"));
        }
        else if(document.querySelector(".medium-priority").checked == true){    
        taskCardPriority.style.background = "#69dfca";
        taskCardPriority.appendChild(document.createTextNode("Medium Priority"));
        }
        else if(document.querySelector(".low-priority").checked == true){    
        taskCardPriority.style.background = "#84adfd";
        taskCardPriority.appendChild(document.createTextNode("Low Priority"));
        }
    const taskCardTitle = document.createElement("h1");
    taskCardTitle.className = "task-card-title";
    taskCardTitle.appendChild(document.createTextNode(document.querySelector(".task-card-title-input").value));
    const taskCardSettingsIcon = document.createElement("div");
    taskCardSettingsIcon.className = "task-card-settings-icon";
    taskCardSettingsIcon.innerHTML = "<img src='settings.png' alt=''>";
    const taskCardSettingsMenu = document.createElement("div");
    taskCardSettingsMenu.className = "task-card-settings-menu";
    const settingsChangeSessionTodo = document.createElement("div");
    settingsChangeSessionTodo.innerHTML = "Todo Session <img src='transfer.png' alt=''>";
    const settingsChangeSessionProgress = document.createElement("div");
    settingsChangeSessionProgress.innerHTML = "Progress Session <img src='transfer.png' alt=''>";
    const settingsChangeSessionCompleted = document.createElement("div");
    settingsChangeSessionCompleted.innerHTML = "Complete Session <img src='transfer.png' alt=''>";
    const settingsDeleteTaskCard = document.createElement("div");
    settingsDeleteTaskCard.innerHTML = "Delete Card <img src='delete.png' alt=''>";
    taskCardSettingsMenu.appendChild(settingsChangeSessionTodo);
    taskCardSettingsMenu.appendChild(settingsChangeSessionProgress);
    taskCardSettingsMenu.appendChild(settingsChangeSessionCompleted);
    taskCardSettingsMenu.appendChild(settingsDeleteTaskCard);
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
    settingsDeleteTaskCard.addEventListener("click",()=>{
        settingsDeleteTaskCard.parentElement.parentElement.parentElement.remove();
    });

    document.querySelector(".todo-session-card-area").appendChild(newTaskCard);
    appContainer.style.opacity = "1";
    addTaskCardMenuContainer.style.display = "none";
    let taskCards  = [];
    taskCards.push(newTaskCard);
    console.log(JSON.parse(taskCards))
};
