import { eventListeners } from "./js/eventListeners.js";
import { querySnapShot } from "./js/firestoreDatabase.js";
import { createCardElements } from "./js/addTaskCardFromUI.js";
function startApp(){
    eventListeners();
    querySnapShot.forEach((doc) => {
        createCardElements(doc.id,doc.data().cardSession,doc.data().cardPriority);
        console.log(doc.id);
        console.log(doc.data().cardSession);
        console.log(doc.data().cardPriority);
    });
}
startApp();
