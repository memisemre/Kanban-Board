export function checkCardFromStorage(){
    let taskCards; 
    if(localStorage.getItem("taskCards")===null){
        taskCards = [];
    }
    else{
        taskCards = JSON.parse(localStorage.getItem("taskCards"));
    }
    return taskCards;
}
export function addtoLocalStorage(localStorageValuesArray){
    let taskCards = checkCardFromStorage();
    taskCards.push(localStorageValuesArray);
    localStorage.setItem("taskCards",JSON.stringify(taskCards));
}
import { newTaskCardAddUI } from "./createNewTaskCardUI.js";
export function loginInCardReceiveFromStorage(taskCards){
    document.addEventListener("DOMContentLoaded",()=>{
        let taskCards = checkCardFromStorage();
        taskCards.forEach(taskCard=>{
            taskCard.reduce((newTaskCardTitle,taskCardPriorityValue)=>{
                newTaskCardAddUI(newTaskCardTitle,taskCardPriorityValue);
            });
        });
    });
};