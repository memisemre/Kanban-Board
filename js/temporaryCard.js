import { todoSessionCardArea,
progressSessionCardArea,
reviewSessionCardArea,
endSessionCardArea
 } from "./selectors.js";
import { createCardMenu } from "./createCardMenu.js";
export let newCardSession;
export function createTemporaryCard(cardSession){
    newCardSession = cardSession;
    const temproaryCardContainer = document.createElement("div");
    const temporaryCardTitle = document.createElement("h1");
    const temporaryCardSettingsButton = document.createElement("i");
    temporaryCardTitle.appendChild(document.createTextNode("New Task Card"));
    temproaryCardContainer.className = "temporary-card";
    temporaryCardTitle.className = "temporary-card-title";
    temporaryCardSettingsButton.classList = "fa fa-light fa-gear";
    temproaryCardContainer.appendChild(temporaryCardTitle);
    temproaryCardContainer.appendChild(temporaryCardSettingsButton);
    if(newCardSession === "todoSession") todoSessionCardArea.appendChild(temproaryCardContainer);
    else if(newCardSession === "progressSession") progressSessionCardArea.appendChild(temproaryCardContainer);
    else if(newCardSession === "reviewSession") reviewSessionCardArea.appendChild(temproaryCardContainer);
    else if(newCardSession === "endSession") endSessionCardArea.appendChild(temproaryCardContainer);
    temporaryCardSettingsButton.addEventListener("click",()=>{
        createCardMenu(newCardSession,temproaryCardContainer);
    });
}
