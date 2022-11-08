import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, ref, set, update, remove, get, child } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { newTaskCardAddUI } from "./createNewTaskCardUI.js";
import { startApp  } from "../app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDzWr0z7mAUdf-7fUQlJZ2Y4jrAzF9ed1I",
    authDomain: "kanban-board-fire-base.firebaseapp.com",
    databaseURL: "https://kanban-board-fire-base-default-rtdb.firebaseio.com",
    projectId: "kanban-board-fire-base",
    storageBucket: "kanban-board-fire-base.appspot.com",
    messagingSenderId: "782909558738",
    appId: "1:782909558738:web:d8e8226870ea109dec420b"
};
const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);
export function writeCardFromData(newTaskCardTitle,taskCardPriorityValue,sessionValue) {
    set(ref(dataBase, "cards/" + newTaskCardTitle), {
        cardName: newTaskCardTitle,
        priority: taskCardPriorityValue,
        session: sessionValue
    });}
export function updateCardFromData(newTaskCardTitle,taskCardPriorityValue,sessionValue){
    update(ref(dataBase, "cards/" + newTaskCardTitle), {
        cardName: newTaskCardTitle,
        priority: taskCardPriorityValue,
        session: sessionValue
      });}
export function removeCardFromData(newTaskCardTitle){
    remove(ref(dataBase,"cards/"+ newTaskCardTitle));}
export function getAllData(){
    const refDB = ref(dataBase); 
    get(child(refDB,"cards"))
    .then((snapshot=>{
        let cards = [];
        snapshot.forEach(childSnapshot =>{
            cards.push(childSnapshot.val());
        });
        cards.forEach(card=>{
            newTaskCardAddUI(card.cardName,card.priority, card.session);
        });
        startApp();
    }));}