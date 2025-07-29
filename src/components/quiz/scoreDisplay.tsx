interface ScoreDisplayProps {
  currentScore: number;
  currentQuestion: number;
}

export function ScoreDisplay({ currentQuestion, currentScore }: ScoreDisplayProps) {
  const incorrectAnswers = currentQuestion - currentScore;

  return (
    <div className="flex gap-4 items-center">
      <div className="ring-1 ring-indigo-400 py-1 pl-1 pr-2 flex gap-1 rounded-sm">
        <span>✅</span>
        <p>{currentScore}</p>
      </div>
      <div className="ring-1 ring-indigo-400 py-1 pl-1 pr-2 flex gap-1 rounded-sm">
        <span>❌</span>
        <p>{incorrectAnswers < 0 ? 0 : incorrectAnswers}</p>
      </div>
    </div>
  );
}
