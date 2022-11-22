import { body } from "./selectors.js";
export function infoMessagePopUp(alertDesc){
    const infoMessageContainer = document.createElement("div");
    const iconArea = document.createElement("div");
    const stick = document.createElement("div");
    const dot = document.createElement("div");
    const infoMessageTitle = document.createElement("h1");
    const infoMessageDesc = document.createElement("p");
    const infoMessageConfirmButton = document.createElement("button");
    infoMessageContainer.className = "info-message-container";
    iconArea.className = "icon-area";
    stick.className = "stick";
    dot.className = "dot";
    infoMessageTitle.className = "info-message-title";
    infoMessageDesc.className = "info-message-description";
    infoMessageConfirmButton.className = "info-message-confirm-button";
    infoMessageTitle.appendChild(document.createTextNode("Alert"));
    infoMessageDesc.appendChild(document.createTextNode(alertDesc));
    infoMessageConfirmButton.appendChild(document.createTextNode("Confirm"));
    iconArea.appendChild(stick);
    iconArea.appendChild(dot);
    infoMessageContainer.appendChild(iconArea);
    infoMessageContainer.appendChild(infoMessageTitle);
    infoMessageContainer.appendChild(infoMessageDesc);
    infoMessageContainer.appendChild(infoMessageConfirmButton);
    body.appendChild(infoMessageContainer);
    infoMessageConfirmButton.addEventListener("click",()=>{
        infoMessageContainer.remove();
    });

}