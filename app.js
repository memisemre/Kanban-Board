document.querySelector(".todo-session-add-task-button").onclick = () => {
    const newTaskCard = document.createElement("div");
    newTaskCard.className = "task-card";
    const taskCardPriority = document.createElement("div");
    taskCardPriority.className = "task-card-priority-value";
    const taskCardTitle = document.createElement("h1");
    taskCardTitle.className = "task-card-title";
    taskCardTitle.innerHTML = "osman";
    const taskCardSettingsIcon = document.createElement("div");
    taskCardSettingsIcon.className = "task-card-settings-icon";
    taskCardSettingsIcon.innerHTML = "<img src='settings.png' alt=''>";
    newTaskCard.appendChild(taskCardPriority);
    newTaskCard.appendChild(taskCardTitle);
    newTaskCard.appendChild(taskCardSettingsIcon);
    document.querySelector(".todo-session-card-area").appendChild(newTaskCard);
    taskCardSettingsIcon.addEventListener("click",()=>{
        console.log("osman");
    });
};