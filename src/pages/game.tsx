import type { Category, Difficulty } from "../types/questions";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { ScoreDisplay } from "@/components/quiz/scoreDisplay";
import { Alternative } from "@/components/quiz/alternative";
import { useSound } from "@/hooks/useSound";
import { shuffle } from "@/utils/shuffle";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/quiz/title";
import { toast } from "sonner";

import response from "../data/data.json";

const TOTAL_QUESTIONS = 10;
const LAST_QUESTION_INDEX = TOTAL_QUESTIONS - 1;

export function Game() {
  const [currentAlternativeSelected, setCurrentAlternativeSelected] = useState<
    string | null
  >(null);
  const [showRightAlternative, setShowRightAlternative] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const navigate = useNavigate();
  const { category, difficulty } = useLocation().state as {
    category: Category;
    difficulty: Difficulty;
  };

  const { alternatives, correctAnswer, question } =
    response[category][difficulty][currentQuestion];

  const shuffledAlternatives = useMemo(() => {
    return shuffle(alternatives);
  }, [alternatives]);

  const { playSound: playCorretSound } = useSound(
    "/src/assets/sounds/correct.mp3"
  );
  const { playSound: playWrongSound } = useSound(
    "/src/assets/sounds/wrong.mp3"
  );

  function handleClickedOption(alternative: string) {
    setCurrentAlternativeSelected(alternative);
  }

  function handleEndGame() {
    navigate("/end", {
      state: { score: currentScore, numberOfQuestions: TOTAL_QUESTIONS },
    });
  }

  function verifyAnswer() {
    setShowRightAlternative(true);
    if (currentAlternativeSelected === correctAnswer) {
      setCurrentScore((prev) => prev + 1);
      playCorretSound();
      toast.success("Resposta correta");
    } else {
      playWrongSound();
      toast.error("Resposta incorreta");
    }
  }

  function handleNextQuestion() {
    setShowRightAlternative(false);
    setCurrentAlternativeSelected(null);
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div className="flex flex-col items-center px-4 gap-8 h-screen justify-center">
      <div className="flex items-center gap-1 ">
        <img src="/src/assets/logo2.png" alt="" className="w-[72px]" />
        <h1 className="font-bold tracking-tighter text-xl">DataQuiz</h1>
      </div>

      <ScoreDisplay
        currentQuestion={currentQuestion}
        currentScore={currentScore}
      />

      <Title title={question} />

      <div className="flex flex-col min-w-80 gap-4">
        {shuffledAlternatives.map((alternative, index) => (
          <Alternative
            isRight={showRightAlternative && alternative === correctAnswer}
            isWrong={showRightAlternative && alternative !== correctAnswer}
            selected={currentAlternativeSelected === alternative}
            disabled={showRightAlternative}
            handleClickedOption={() => handleClickedOption(alternative)}
            key={index}
          >
            {alternative}
          </Alternative>
        ))}
      </div>

      {currentQuestion === LAST_QUESTION_INDEX && showRightAlternative ? (
        <Button
          disabled={currentAlternativeSelected == null}
          variant="default"
          onClick={handleEndGame}
          className="bg-green-700 hover:bg-green-800 hover:scale-110 transition-all ease-in-out w-4/5 md:w-1/5"
        >
          Finalizar
        </Button>
      ) : showRightAlternative ? (
        <Button
          onClick={() => handleNextQuestion()}
          variant="default"
          className="bg-indigo-700 text-white p-4 rounded-md outline-none
          hover:bg-indigo-800 hover:scale-110 ease-in-out transition-all active:bg-indigo-800
          active:scale-110 disabled:cursor-not-allowed w-4/5 md:w-1/5"
        >
          Próxima pergunta
        </Button>
      ) : (
        <Button
          disabled={currentAlternativeSelected == null}
          onClick={() => verifyAnswer()}
          variant="default"
          className="bg-indigo-700 text-white p-4 rounded-md outline-none
          hover:bg-indigo-800 hover:scale-110 ease-in-out transition-all active:bg-indigo-800
          active:scale-110 disabled:cursor-not-allowed w-4/5 md:w-1/5"
        >
          Confirmar
        </Button>
      )}
    </div>
  );
}
