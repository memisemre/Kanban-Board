import { todoSessionCardArea,
progressSessionCardArea,
reviewSessionCardArea,
endSessionCardArea,
todoSessionAddTaskButton,
progressSessionAddTaskButton,
reviewSessionAddTaskButton,
endSessionAddTaskButton
 } from "./selectors.js";
export let newCardSession;
import { addTaskCardAddUI } from "./addTaskCardFromUI.js";
export function createTemporaryCard(cardSession){
    newCardSession = cardSession;
    //Create Element
    const temporaryCardContainer = document.createElement("div");
    const temporaryCardTitleDesc = document.createElement("p");
    const temporaryCardInput = document.createElement("input");
    const temporaryCardPriorityDesc = document.createElement("p");
    const temporaryCardPriorityButtonArea = document.createElement("div");
    const temporaryCardHighPriorityButton = document.createElement("button");
    const temporaryCardMediumPriorityButton = document.createElement("button");
    const temporaryCardLowPriorityButton = document.createElement("button");
    //Add ClassName
    temporaryCardContainer.className = "temporary-card-container";
    temporaryCardInput.className = "temporary-card-title";
    temporaryCardPriorityButtonArea.className = "priority-buttons-area";
    temporaryCardHighPriorityButton.className = "select-high-priority";
    temporaryCardMediumPriorityButton.className = "select-medium-priority";
    temporaryCardLowPriorityButton.className = "select-low-priority";
    //Create Text Node 
    temporaryCardTitleDesc.appendChild(document.createTextNode("Please,enter title task."));
    temporaryCardPriorityDesc.appendChild(document.createTextNode("Select the priority level."));
    temporaryCardHighPriorityButton.appendChild(document.createTextNode("High Priority"));
    temporaryCardMediumPriorityButton.appendChild(document.createTextNode("Medium Priority"));
    temporaryCardLowPriorityButton.appendChild(document.createTextNode("Low Priority"));
    //Append Child's
    temporaryCardPriorityButtonArea.appendChild(temporaryCardHighPriorityButton);
    temporaryCardPriorityButtonArea.appendChild(temporaryCardMediumPriorityButton);
    temporaryCardPriorityButtonArea.appendChild(temporaryCardLowPriorityButton);
    temporaryCardContainer.appendChild(temporaryCardTitleDesc);
    temporaryCardContainer.appendChild(temporaryCardInput);
    temporaryCardContainer.appendChild(temporaryCardPriorityDesc);
    temporaryCardContainer.appendChild(temporaryCardPriorityButtonArea);
    //Input Function
    temporaryCardInput.value = "Task Title";
    temporaryCardInput.onfocus = ()=>{
        if(temporaryCardInput.value =="Task Title") temporaryCardInput.value = "";
    };
    temporaryCardInput.onblur = ()=>{
        if(temporaryCardInput.value =="") temporaryCardInput.value = "Task Title";
    };
    //Event Listener's
    temporaryCardHighPriorityButton.addEventListener("click",()=>{
        if(temporaryCardInput.value !="" && temporaryCardInput.value !="Task Title"){
            let newCardTitle = temporaryCardInput.value;
            let newCardSession = cardSession;
            let newCardPriority = "highPriority";
            temporaryCardContainer.remove();
            addTaskCardAddUI(newCardTitle,newCardSession,newCardPriority);
            addTaskButtonsOp();
        }
        else alert("Please enter title task."); //Custom Alert Box;
    });
    temporaryCardMediumPriorityButton.addEventListener("click",()=>{
        if(temporaryCardInput.value !="" && temporaryCardInput.value !="Task Title"){
            let newCardTitle = temporaryCardInput.value;
            let newCardSession = cardSession;
            let newCardPriority = "mediumPriority";
            temporaryCardContainer.remove();
            addTaskCardAddUI(newCardTitle,newCardSession,newCardPriority);
            addTaskButtonsOp();
        }
        else alert("Please enter title task."); //Custom Alert Box;
    });
    temporaryCardLowPriorityButton.addEventListener("click",()=>{
        if(temporaryCardInput.value !="" && temporaryCardInput.value !="Task Title"){
            let newCardTitle = temporaryCardInput.value;
            let newCardSession = cardSession;
            let newCardPriority = "lowPriority";
            temporaryCardContainer.remove();
            addTaskCardAddUI(newCardTitle,newCardSession,newCardPriority);
            addTaskButtonsOp();
        }
        else alert("Please enter title task."); //Custom Alert Box;
    });
    //Card Session 
    if(cardSession == "todoSession") todoSessionCardArea.appendChild(temporaryCardContainer);
    if(cardSession == "progressSession") progressSessionCardArea.appendChild(temporaryCardContainer);
    if(cardSession == "reviewSession") reviewSessionCardArea.appendChild(temporaryCardContainer);
    if(cardSession == "endSession") endSessionCardArea.appendChild(temporaryCardContainer);
}
function addTaskButtonsOp(){
    todoSessionAddTaskButton.style.opacity = "1";
    progressSessionAddTaskButton.style.opacity = "1";
    reviewSessionAddTaskButton.style.opacity = "1";
    endSessionAddTaskButton.style.opacity = "1";
}