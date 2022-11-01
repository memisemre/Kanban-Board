import { todoSessionAddTaskButtonAddFunction,addTaskMenuButtonAddFunction } from "./modules/buttonFunctions.js";
import { newTaskCardAddUI } from "./modules/createNewTaskCardUI.js";
import { checkCardFromStorage } from "./modules/localStorageFunctions.js";
const appContainer = document.querySelector(".app-container");
const addTaskCardMenuContainer = document.querySelector(".add-task-card-menu-container");
function startApp(){
    addTaskMenuButtonAddFunction(appContainer,addTaskCardMenuContainer);
    todoSessionAddTaskButtonAddFunction(appContainer,addTaskCardMenuContainer);
    document.addEventListener("DOMContentLoaded",()=>{
        let taskCards = checkCardFromStorage();
        taskCards.forEach(taskCard=>{
            taskCard.reduce((newTaskCardTitle,taskCardPriorityValue)=>{
                newTaskCardAddUI(newTaskCardTitle,taskCardPriorityValue);
            });
        });
    });
}
startApp();