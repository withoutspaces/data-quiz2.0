export type Question = {
  question: string;
  alternatives: string[];
  correctAnswer: string;
  category: string;
  contributor: string;
  createdAt: string;
  difficulty: string;
  githubProfile: string;
};

type QuestionsDifficulty = {
  easy: Question;
  medium: Question;
  hard: Question;
};

export type Questions = {
  history: QuestionsDifficulty;
  science: QuestionsDifficulty;
  technology: QuestionsDifficulty;
  general: QuestionsDifficulty;
  pop: QuestionsDifficulty;
};

export type Category = "history" | "science" | "technology" | "general" | "pop";
export type Difficulty = "easy" | "medium" | "hard";
