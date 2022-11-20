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
    newTaskCardSettingsMenu.appendChild(settingsMenu);
    newTaskCard.appendChild(newTaskCardPriority);
    newTaskCard.appendChild(newTaskCardTitle);
    newTaskCard.appendChild(newTaskCardSettingsMenu);
    //Select Priority Color
    if(newCardPriority == "highPriority") newTaskCardPriority.style.background = "var(--priority--red)";
    if(newCardPriority == "mediumPriority") newTaskCardPriority.style.background = "var(--priority--yellow)";
    if(newCardPriority == "lowPrirority") newTaskCardPriority.style.background = "var(--priority--blue)";
    //Click Event's
    settingsMenu.style.display = "none";
    newTaskCardSettingsMenu.addEventListener("click",()=>{
        if(settingsMenu.style.display == "none") settingsMenu.style.display = "flex";
        else settingsMenu.style.display = "none";
    });
    newCardSelectSession(newCardSession,newTaskCard);
    let cardNewSession;
    changeSessionTodoButton.addEventListener("click",()=>{
        cardNewSession = "todoSession";
        changeCardSession(cardNewSession,newCardSession,newTaskCard);
    });
    changeSessionProgressButton.addEventListener("click",()=>{
        cardNewSession = "progressSession";
        changeCardSession(cardNewSession,newCardSession,newTaskCard);
    });
    changeSessionReviewButton.addEventListener("click",()=>{
        cardNewSession = "reviewSession";
        changeCardSession(cardNewSession,newCardSession,newTaskCard);
    });
    changeSessionEndButton.addEventListener("click",()=>{
        cardNewSession = "endSession";
        changeCardSession(cardNewSession,newCardSession,newTaskCard);
    });
    deleteButton.addEventListener("click",()=>{
        deleteButton.parentElement.parentElement.parentElement.remove();
        deleteCardFromDataBase(newCardTitle);
    });
    document.addEventListener("click",(mouseE)=>{
        if(mouseE.target.classList != newTaskCardSettingsMenuOpenIcon.classList){
            settingsMenu.style.display = "none";
        }
    });
}
function changeCardSession(cardNewSession,newCardSession,newTaskCard){
    if(cardNewSession == "todoSession" && newCardSession!="todoSession") {
        todoTotalCard++;
        todoSessionCardArea.appendChild(newTaskCard);
        if(newCardSession == "progressSession") progressTotalCard--;
        else if(newCardSession == "reviewSession") reviewTotalCard--;
        else if(newCardSession == "endSession") endTotalCard--;
        newCardSession = "todoSession";
        console.log(newCardSession);
        console.log(`todototalcard = ${todoTotalCard}`);
        console.log(`progresstotalcard = ${progressTotalCard}`);
        console.log(`reviewtotalcard = ${reviewTotalCard}`);
        console.log(`endtotalcard = ${endTotalCard}`);
    }
    else if(cardNewSession == "progressSession" && newCardSession!="progressSession") {
        progressTotalCard++;
        progressSessionCardArea.appendChild(newTaskCard);
        if(newCardSession =="todoSession") todoTotalCard--;
        else if(newCardSession == "reviewSession") reviewTotalCard--;
        else if(newCardSession == "endSession") endTotalCard--;
        newCardSession = "progressSession";
        console.log(newCardSession);
        console.log(`todototalcard = ${todoTotalCard}`);
        console.log(`progresstotalcard = ${progressTotalCard}`);
        console.log(`reviewtotalcard = ${reviewTotalCard}`);
        console.log(`endtotalcard = ${endTotalCard}`);
    }
    else if(cardNewSession == "reviewSession" && newCardSession!="reviewSession") {
        reviewTotalCard++;
        reviewSessionCardArea.appendChild(newTaskCard);
        if(newCardSession =="todoSession") todoTotalCard--;
        else if(newCardSession == "progressSession") progressTotalCard--;
        else if(newCardSession == "endSession") endTotalCard--;
        newCardSession = "reviewSession";
        console.log(newCardSession);
        console.log(`todototalcard = ${todoTotalCard}`);
        console.log(`progresstotalcard = ${progressTotalCard}`);
        console.log(`reviewtotalcard = ${reviewTotalCard}`);
        console.log(`endtotalcard = ${endTotalCard}`);
    }
    else if(cardNewSession == "endSession" && newCardSession!="endSession") {
        endTotalCard++;
        endSessionCardArea.appendChild(newTaskCard);
        if(newCardSession =="todoSession") todoTotalCard--;
        else if(newCardSession == "progressSession") progressTotalCard--;
        else if(newCardSession == "reviewSession") reviewTotalCard--;
        newCardSession = "endSession";
        console.log(newCardSession);
        console.log(`todototalcard = ${todoTotalCard}`);
        console.log(`progresstotalcard = ${progressTotalCard}`);
        console.log(`reviewtotalcard = ${reviewTotalCard}`);
        console.log(`endtotalcard = ${endTotalCard}`);
    }
    todoSessionTotalCard.textContent = `${todoTotalCard}`;
    progressSessionTotalCard.textContent = `${progressTotalCard}`;
    reviewSessionTotalCard.textContent = `${reviewTotalCard}`;
    endSessionTotalCard.textContent = `${endTotalCard}`;
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