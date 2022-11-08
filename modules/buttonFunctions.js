export function todoSessionAddTaskButtonAddFunction(appContainer,addTaskCardMenuContainer){
    document.querySelector(".todo-session-add-task-button").addEventListener("click",()=>{
        appContainer.style.opacity = "0.3";
        addTaskCardMenuContainer.style.display = "flex";
        }
    );
};
import { writeCardFromData } from "./firebase.js";
import { newTaskCardAddUI } from "./createNewTaskCardUI.js";
export function addTaskMenuButtonAddFunction(appContainer,addTaskCardMenuContainer){
    document.querySelector(".add-task-card-menu-button").addEventListener("click",()=>{
        appContainer.style.opacity = "1";
        addTaskCardMenuContainer.style.display = "none";
        const newTaskCardTitle = document.querySelector(".task-card-title-input").value;
        if(newTaskCardTitle != ""){
                let sessionValue = 1;
                let taskCardPriorityValue;
                if(document.querySelector(".high-priority").checked == true) taskCardPriorityValue = 1;
                else if(document.querySelector(".medium-priority").checked == true) taskCardPriorityValue = 2;
                else if(document.querySelector(".low-priority").checked == true) taskCardPriorityValue = 3;
                else taskCardPriorityValue = 1;
                newTaskCardAddUI(newTaskCardTitle,taskCardPriorityValue,sessionValue);
                writeCardFromData(newTaskCardTitle,taskCardPriorityValue,sessionValue);
            }
            else alert("Please fill in the values.");
        }
    );
}
