import { todoSessionAddTaskButtonAddFunction, addTaskMenuButtonAddFunction } from "./modules/buttonFunctions.js";
import { getAllData } from "./modules/firebase.js";
const appContainer = document.querySelector(".app-container");
const addTaskCardMenuContainer = document.querySelector(".add-task-card-menu-container");
export function startApp(){
    addTaskMenuButtonAddFunction(appContainer,addTaskCardMenuContainer);
    todoSessionAddTaskButtonAddFunction(appContainer,addTaskCardMenuContainer);
}
window.addEventListener("DOMContentLoaded",()=>{
    getAllData();
});