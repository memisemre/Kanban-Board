import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore,
    doc,
    setDoc,
    getDocs,
    collection,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { firebaseConfig } from "./firebaseUserInfos.js";
const firebaseApp = initializeApp(firebaseConfig);
const fireStore = getFirestore(firebaseApp);
export function writeCardFromDataBase(newCardTitle,newCardSession,newCardPriority){
    const cardID = doc(fireStore,`taskCards/${newCardTitle}`);
    const data = {
        cardSession: newCardSession,
        cardPriority: newCardPriority
    };
    setDoc(cardID,data);
}
export function updateCardFromDataBase(newCardTitle,newCardSession,newCardPriority){
    updateDoc(doc(fireStore, "taskCards",`${newCardTitle}`),{
        cardSession: newCardSession,
        cardPriority: newCardPriority
    });
}
export function deleteCardFromDataBase(newCardTitle){
   deleteDoc(doc(fireStore,"taskCards",`${newCardTitle}`));
}
export const querySnapShot = await getDocs(collection(fireStore,"taskCards"));