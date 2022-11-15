
import { addTaskCardModalPageOneInput, 
addTaskCardModalPageTwoMediumPriority,
progressSessionAddTaskButton,
todoSessionAddTaskButton,
reviewSessionAddTaskButton,
endSessionAddTaskButton,
addTaskCardModalPageOne,
addTaskCardModalPageTwo,
addTaskCardModalPageOneButton,
addTaskCardModalPageTwoHighPriority,
addTaskCardModalPageTwoLowPriority,
todoSessionTotalCard,
progressSessionTotalCard,
reviewSessionTotalCard,
endSessionTotalCard
 } from "./selectors.js";

const appContainer = document.querySelector(".app-container");
let newTaskCardValues = [];
let selectSession;
let newTaskCardPriority;
function openAddTaskCardModalPageOne(){
    addTaskCardModalPageOne.style.display = "flex";
    appContainer.style.opacity = "0.3";
}
function selectTitleAddTaskCardModalPageOne(){
    if(addTaskCardModalPageOneInput.value !== "" && addTaskCardModalPageOneInput.value !== "Please, enter the title of task."){
        let taskCardTitle = addTaskCardModalPageOneInput.value;
        addTaskCardModalPageOne.style.display = "none";
        addTaskCardModalPageTwo.style.display = "flex";
        newTaskCardValues.push(taskCardTitle);
    }
    else{
        alert("Please, enter the title of task."); //Prepared Error PopUp Modal!
    }
}
import { addTaskCardAddUI } from "./addTaskCardFromUI.js";
function selectPriorityAddTaskCardModalPageTwo(newTaskCardPriority){
    newTaskCardValues.push(newTaskCardPriority);
    addTaskCardModalPageTwo.style.display = "none";
    addTaskCardAddUI(newTaskCardValues);
    appContainer.style.opacity = "1";
    newTaskCardValues.length = 0;
}
export function addEventListeners(){
    todoSessionAddTaskButton.addEventListener("click",()=>{
        openAddTaskCardModalPageOne();
        selectSession = "todoSession";
        newTaskCardValues.push(selectSession);
    });
    progressSessionAddTaskButton.addEventListener("click",()=>{
        openAddTaskCardModalPageOne();
        selectSession = "progressSession";
        newTaskCardValues.push(selectSession);
        
    });
    reviewSessionAddTaskButton.addEventListener("click",()=>{
        openAddTaskCardModalPageOne();
        selectSession = "reviewSession";
        newTaskCardValues.push(selectSession);
    });
    endSessionAddTaskButton.addEventListener("click",()=>{
        openAddTaskCardModalPageOne();
        selectSession = "endSession";
        newTaskCardValues.push(selectSession);
    });
    addTaskCardModalPageOneButton.addEventListener("click",()=>{
        selectTitleAddTaskCardModalPageOne();
    });
    addTaskCardModalPageTwoHighPriority.addEventListener("click",()=>{
        newTaskCardPriority = "highPriority";
        selectPriorityAddTaskCardModalPageTwo(newTaskCardPriority);
    });
    addTaskCardModalPageTwoMediumPriority.addEventListener("click",()=>{
        newTaskCardPriority = "mediumPriority";
        selectPriorityAddTaskCardModalPageTwo(newTaskCardPriority);
    });
    addTaskCardModalPageTwoLowPriority.addEventListener("click",()=>{
        newTaskCardPriority = "lowPrirority";
        selectPriorityAddTaskCardModalPageTwo(newTaskCardPriority);
    });
}
function selectSessionNewTaskCard(selectSession){

}