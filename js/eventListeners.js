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
    });
    progressSessionAddTaskButton.addEventListener("click",()=>{
        createTemporaryCard("progressSession");
    });
    reviewSessionAddTaskButton.addEventListener("click",()=>{
        createTemporaryCard("reviewSession");
    });
    endSessionAddTaskButton.addEventListener("click",()=>{
        createTemporaryCard("endSession");
    });
}