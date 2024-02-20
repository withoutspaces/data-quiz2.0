import { addDoc, collection } from 'firebase/firestore';
import { db } from "@/services/firebase"; 

export function useFirebase() {
    const questionsRef = collection(db, "questions");

    const addQuestion = async (data: any) => {
        await addDoc(questionsRef, data);
    }

}