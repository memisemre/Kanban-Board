import { writeCardFromDataBase,
    updateCardFromDataBase,
    deleteCardFromDataBase
    } from "./firestoreDatabase.js";
import {todoSessionCardArea,
    progressSessionCardArea,
    reviewSessionCardArea,
    endSessionCardArea,
    todoSessionTotalCard,
    progressSessionTotalCard,
    reviewSessionTotalCard,
    endSessionTotalCard
    } from "./selectors.js";
let todoTotalCard = 0;
let progressTotalCard = 0;
let reviewTotalCard = 0;
let endTotalCard = 0;
export function addTaskCardAddUI(newCardTitle,newCardSession,newCardPriority){
    writeCardFromDataBase(newCardTitle,newCardSession,newCardPriority);
    createCardElements(newCardTitle,newCardSession,newCardPriority);
}
export function createCardElements(newCardTitle,newCardSession,newCardPriority){
    //Create Elements
    const newTaskCard = document.createElement("div");
    const newTaskCardPriority = document.createElement("div");
    const newTaskCardTitle = document.createElement("h1");
    const newTaskCardSettingsMenu = document.createElement("div");
    const newTaskCardSettingsMenuOpenIcon = document.createElement("i");
    const settingsMenu = document.createElement("div");
    const changeSessionTodoButton = document.createElement("button");
    const changeSessionProgressButton = document.createElement("button");
    const changeSessionReviewButton = document.createElement("button");
    const changeSessionEndButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    //Added ClassName for New Elements
    newTaskCard.className = "task-card";
    newTaskCardPriority.className = "task-card-priority";
    newTaskCardTitle.className = "task-card-title";
    newTaskCardSettingsMenu.className = "settings-icon";
    newTaskCardSettingsMenuOpenIcon.classList = "fa fa-light fa-gear";
    settingsMenu.className = "settings-menu";
    changeSessionTodoButton.className = "changeSession-todo";
    changeSessionProgressButton.className = "changeSession-progress";
    changeSessionReviewButton.className = "changeSession-review";
    changeSessionEndButton.className = "changeSession-end";
    deleteButton.className = "delete-card";
    //Inner HTML
    changeSessionTodoButton.innerHTML = "To do <i class='fa-solid fa-arrow-right'>";
    changeSessionProgressButton.innerHTML = "Progress <i class='fa-solid fa-arrow-right'>";
    changeSessionReviewButton.innerHTML = "Review <i class='fa-solid fa-arrow-right'>";
    changeSessionEndButton.innerHTML = "End <i class='fa-solid fa-arrow-right'>";
    deleteButton.innerHTML = "Delete <i class='fa-solid fa-trash'></i>";
    //Append Child 
    newTaskCardSettingsMenu.appendChild(newTaskCardSettingsMenuOpenIcon);
    newTaskCardTitle.appendChild(document.createTextNode(newCardTitle));
    settingsMenu.appendChild(changeSessionTodoButton);
    settingsMenu.appendChild(changeSessionProgressButton);
    settingsMenu.appendChild(changeSessionReviewButton);
    settingsMenu.appendChild(changeSessionEndButton);
    settingsMenu.appendChild(deleteButton);
    newTaskCard.appendChild(newTaskCardPriority);
    newTaskCard.appendChild(newTaskCardTitle);
    newTaskCard.appendChild(newTaskCardSettingsMenu);
    //Select Priority Color
    if(newCardPriority === "highPriority") newTaskCardPriority.style.backgroundColor = "var(--priority--red)";
    else if(newCardPriority === "mediumPriority") newTaskCardPriority.style.backgroundColor = "var(--priority--yellow)";
    else if(newCardPriority === "lowPriority") newTaskCardPriority.style.backgroundColor = "var(--priority--blue)";
    //Click Event's
    let cardNewSession;
    changeSessionTodoButton.addEventListener("click",()=>{
        cardNewSession = "todoSession";
        const session = changeCardSession(cardNewSession,newCardSession);
        newCardSession = session;
        newCardSelectSession(session,newTaskCard);
        settingsMenuSession(newCardSession,settingsMenu);
        updateCardFromDataBase(newCardTitle,newCardSession,newCardPriority);
    });
    changeSessionProgressButton.addEventListener("click",()=>{
        cardNewSession = "progressSession";
        const session = changeCardSession(cardNewSession,newCardSession);
        newCardSession = session;
        newCardSelectSession(session,newTaskCard);
        settingsMenuSession(newCardSession,settingsMenu);
        updateCardFromDataBase(newCardTitle,newCardSession,newCardPriority);
    });
    changeSessionReviewButton.addEventListener("click",()=>{
        cardNewSession = "reviewSession";
        const session = changeCardSession(cardNewSession,newCardSession);
        newCardSession = session;
        newCardSelectSession(session,newTaskCard);
        settingsMenuSession(newCardSession,settingsMenu);
        updateCardFromDataBase(newCardTitle,newCardSession,newCardPriority);
    });
    changeSessionEndButton.addEventListener("click",()=>{
        cardNewSession = "endSession";
        const session = changeCardSession(cardNewSession,newCardSession);
        newCardSession = session;
        newCardSelectSession(session,newTaskCard);
        settingsMenuSession(newCardSession,settingsMenu);
        updateCardFromDataBase(newCardTitle,newCardSession,newCardPriority);
    });
    deleteButton.addEventListener("click",()=>{
        newTaskCard.remove();
        deleteCardFromDataBase(newCardTitle);
        if(newCardSession==="todoSession") todoTotalCard--;
        else if(newCardSession==="progressSession") progressTotalCard--;
        else if(newCardSession === "reviewSession") reviewTotalCard--;
        else if(newCardSession=== "endSession") endTotalCard--;
        todoSessionTotalCard.textContent = `${todoTotalCard}`;
        progressSessionTotalCard.textContent = `${progressTotalCard}`;
        reviewSessionTotalCard.textContent = `${reviewTotalCard}`;
        endSessionTotalCard.textContent = `${endTotalCard}`;
    });
    document.addEventListener("click",(mouseE)=>{
        if(mouseE.target.classList != newTaskCardSettingsMenuOpenIcon.classList){
            settingsMenu.style.display = "none";
        }
    });
    settingsMenu.style.display = "none";
    newTaskCardSettingsMenu.addEventListener("click",()=>{
        if(settingsMenu.style.display == "none") settingsMenu.style.display = "flex";
        else settingsMenu.style.display = "none";
         
    });
    settingsMenuSession(newCardSession,settingsMenu);
    newCardSelectSession(newCardSession,newTaskCard);
}
function settingsMenuSession(newCardSession,settingsMenu){
    if(newCardSession ==="todoSession")todoSessionCardArea.appendChild(settingsMenu);
    if(newCardSession ==="progressSession")progressSessionCardArea.appendChild(settingsMenu);
    if(newCardSession ==="reviewSession")reviewSessionCardArea.appendChild(settingsMenu);
    if(newCardSession ==="endSession")endSessionCardArea.appendChild(settingsMenu);
}

function changeCardSession(cardNewSession,newCardSession){
    if(cardNewSession === "todoSession" && newCardSession !="todoSession"){
        if(newCardSession === "progressSession") progressTotalCard--;
        else if(newCardSession === "reviewSession") reviewTotalCard--;
        else if(newCardSession === "endSession") endTotalCard--;        
        newCardSession = "todoSession";
    }
    else if(cardNewSession ==="progressSession" && newCardSession !="progressSession"){
        if(newCardSession === "todoSession") todoTotalCard--;
        else if(newCardSession ==="reviewSession") reviewTotalCard--;
        else if(newCardSession === "endSession") endTotalCard--;
        newCardSession = "progressSession";
    }
    else if(cardNewSession ==="reviewSession" && newCardSession !="reviewSession"){
        if(newCardSession === "todoSession") todoTotalCard--;
        else if(newCardSession ==="progressSession") progressTotalCard--;
        else if(newCardSession === "endSession") endTotalCard--;
        newCardSession = "reviewSession";
    }
    else if(cardNewSession ==="endSession" && newCardSession !="endSession"){
        if(newCardSession === "todoSession") todoTotalCard--;
        else if(newCardSession ==="progressSession") progressTotalCard--;
        else if(newCardSession === "reviewSession") reviewTotalCard--;
        newCardSession = "endSession";
    }
    todoSessionTotalCard.textContent = `${todoTotalCard}`;
    progressSessionTotalCard.textContent = `${progressTotalCard}`;
    reviewSessionTotalCard.textContent = `${reviewTotalCard}`;
    endSessionTotalCard.textContent = `${endTotalCard}`;
    return newCardSession;
}
function newCardSelectSession(newCardSession,newTaskCard){
    if(newCardSession == "todoSession"){
        todoTotalCard++;
        todoSessionTotalCard.textContent = `${todoTotalCard}`;
        todoSessionCardArea.appendChild(newTaskCard);
    }
    else if(newCardSession == "progressSession"){
        progressTotalCard++;
        progressSessionTotalCard.textContent = `${progressTotalCard}`;
        progressSessionCardArea.appendChild(newTaskCard);
    }
    else if(newCardSession == "reviewSession"){
        reviewTotalCard++;
        reviewSessionTotalCard.textContent = `${reviewTotalCard}`;
        reviewSessionCardArea.appendChild(newTaskCard);
    }
    else if(newCardSession == "endSession"){
        endTotalCard++;
        endSessionTotalCard.textContent = `${endTotalCard}`;
        endSessionCardArea.appendChild(newTaskCard);
    }
}