import { addDoc, getDocs, collection, where, query } from 'firebase/firestore';
import { db } from "@/services/firebase"; 

import type { Category, QuestionData } from '@/types/questions';

export function useFirebase() {
    
    const addQuestion = async (data: QuestionData) => {
        const questionsRef = collection(db, `questions-test/${data.category}/${data.difficulty}`)
        const querySnapshot = await getDocs(query(
            questionsRef,
            where("question", "==", data.question),
            where("correctAnswer", "==", data.correctAnswer),
        ))
        if(!querySnapshot.empty) {
            throw new Error("Essa questão já existe!")
        }
        await addDoc(questionsRef, data)
    }

    const getQuestions = async ({category, difficulty}: Category): Promise<{id: string, data: QuestionData}[]> => {
        
        const questionsRef = collection(db, `questions/${category}/${difficulty}`)
        const snapshot = await getDocs(questionsRef)
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data() as QuestionData
        }))

    }


    return { addQuestion, getQuestions }
}