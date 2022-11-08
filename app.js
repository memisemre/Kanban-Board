import { todoSessionAddTaskButtonAddFunction,addTaskMenuButtonAddFunction } from "./modules/buttonFunctions.js";
const appContainer = document.querySelector(".app-container");
const addTaskCardMenuContainer = document.querySelector(".add-task-card-menu-container");
function startApp(){
    addTaskMenuButtonAddFunction(appContainer,addTaskCardMenuContainer);
    todoSessionAddTaskButtonAddFunction(appContainer,addTaskCardMenuContainer);
}
startApp();