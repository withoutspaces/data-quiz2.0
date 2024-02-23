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

export interface QuestionData {
    question: string,
    correctAnswer: string,
    alternatives: string[],
    category: string,
    difficulty: string,
    contributor: string,
    githubProfile: string,
    createdAt: string,
  };

  export interface Category {
    category: string;
    difficulty: string;
  }