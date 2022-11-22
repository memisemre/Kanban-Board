import { eventListeners } from "./js/eventListeners.js";
import { querySnapShot } from "./js/firestoreDatabase.js";
import { createCardElements } from "./js/addTaskCardFromUI.js";
import {infoMessagePopUp } from "./js/infoMessages.js";
function startApp(){
    eventListeners();
    querySnapShot.forEach((doc) => {
        createCardElements(doc.id,doc.data().cardSession,doc.data().cardPriority);
    });
}
startApp();
