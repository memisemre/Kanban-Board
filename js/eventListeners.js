import { 
    progressSessionAddTaskButton,
    todoSessionAddTaskButton,
    reviewSessionAddTaskButton,
    endSessionAddTaskButton
 } from "./selectors.js";
 import { createTemporaryCard } from "./temporaryCard.js";
export function eventListeners(){
    todoSessionAddTaskButton.addEventListener("click",()=>{
        createTemporaryCard("todoSession");
        addTaskButtonsNone();
    });
    progressSessionAddTaskButton.addEventListener("click",()=>{
        createTemporaryCard("progressSession");
        addTaskButtonsNone();
    });
    reviewSessionAddTaskButton.addEventListener("click",()=>{
        createTemporaryCard("reviewSession");
        addTaskButtonsNone();
    });
    endSessionAddTaskButton.addEventListener("click",()=>{
        createTemporaryCard("endSession");
        addTaskButtonsNone();
    });
}
function addTaskButtonsNone(){
    todoSessionAddTaskButton.style.opacity = "0";
    progressSessionAddTaskButton.style.opacity = "0";
    reviewSessionAddTaskButton.style.opacity = "0";
    endSessionAddTaskButton.style.opacity = "0";
}