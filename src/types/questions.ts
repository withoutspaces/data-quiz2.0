type Question = {
    question: string;
    alternatives: string[];
    correctAnswer: string
}

type QuestionsDifficulty = {
    easy: Question;
    medium: Question;
    hard: Question;
  }

export interface Questions {
    history: QuestionsDifficulty;
    science: QuestionsDifficulty
    technology: QuestionsDifficulty
    general: QuestionsDifficulty
    pop: QuestionsDifficulty
}