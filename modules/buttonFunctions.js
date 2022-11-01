export function todoSessionAddTaskButtonAddFunction(appContainer,addTaskCardMenuContainer){
    document.querySelector(".todo-session-add-task-button").addEventListener("click",()=>{
        appContainer.style.opacity = "0.3";
        addTaskCardMenuContainer.style.display = "flex";
    });
};
import { newTaskCardAddUI } from "./createNewTaskCardUI.js";
import { addtoLocalStorage } from "./localStorageFunctions.js";
export function addTaskMenuButtonAddFunction(appContainer,addTaskCardMenuContainer){
    document.querySelector(".add-task-card-menu-button").addEventListener("click",()=>{
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
        newTaskCardAddUI(newTaskCardTitle,taskCardPriorityValue);
        let localStorageValuesArray = [newTaskCardTitle,taskCardPriorityValue];
        addtoLocalStorage(localStorageValuesArray);
    });
}
