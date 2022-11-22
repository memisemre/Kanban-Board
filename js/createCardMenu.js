import { todoSessionAddTaskButton,
    progressSessionAddTaskButton,
    reviewSessionAddTaskButton,
    endSessionAddTaskButton,
    createCardMenuContainer,
    createCardMenuInput,
    createCardMenuHighPriority,
    createCardMenuLowPriority,
    createCardMenuMediumPriority,
    appContainer
 } from "./selectors.js";
import { addTaskCardAdd } from "./addTaskCardFromUI.js";
export function createCardMenu(newCardSession,temproaryCardContainer){
    temproaryCardContainer.remove();
    createCardMenuContainer.style.display = "flex";
    appContainer.style.opacity = "0.3";
    createCardMenuHighPriority.onclick = ()=>{
        elementDisplays();
        addTaskCardAdd(createCardMenuInput.value,newCardSession,"highPriority");
    };
    createCardMenuMediumPriority.onclick = ()=>{
        elementDisplays();
        addTaskCardAdd(createCardMenuInput.value,newCardSession,"mediumPriority");
    };
    createCardMenuLowPriority.onclick = ()=>{
        elementDisplays();
        addTaskCardAdd(createCardMenuInput.value,newCardSession,"lowPriority");
    };
}
function elementDisplays(){
    addTaskButtonsOp();
    createCardMenuContainer.style.display = "none";
    appContainer.style.opacity = "1";
}
function addTaskButtonsOp(){
    todoSessionAddTaskButton.style.opacity = "1";
    progressSessionAddTaskButton.style.opacity = "1";
    reviewSessionAddTaskButton.style.opacity = "1";
    endSessionAddTaskButton.style.opacity = "1";
}