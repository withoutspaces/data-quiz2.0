import { useState, useMemo, useCallback } from "react";
import type { Category, Difficulty } from "../types/questions";
import { useLocation, useNavigate } from "react-router-dom";
import { randomizeQuestions } from "../utils/randomizeQuestions";
import { ScoreDisplay } from "@/components/quiz/scoreDisplay";
import { Alternative } from "@/components/quiz/alternative";
import { BackButton } from "@/components/quiz/backButton";
import { useSound } from "@/hooks/useSound";
import { shuffle } from "@/utils/shuffle";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import response from "../data/data.json";

const TOTAL_QUESTIONS = 10;
const LAST_QUESTION_INDEX = TOTAL_QUESTIONS - 1;

export function Game() {
  const [currentAlternativeSelected, setCurrentAlternativeSelected] = useState<string | null>(null);
  const [showRightAlternative, setShowRightAlternative] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const { playSound: playCorretSound } = useSound("sounds/correct.mp3");
  const { playSound: playWrongSound } = useSound("sounds/wrong.mp3");

  const navigate = useNavigate();

  const { category, difficulty } = useLocation().state as {
    category: Category;
    difficulty: Difficulty;
  };

  const questions = response[category][difficulty];

  const randomizedQuestions = useMemo(() => {
    return randomizeQuestions(questions);
  }, [questions]);

  const { alternatives, correctAnswer, question } = randomizedQuestions[currentQuestion];

  const shuffledAlternatives = useMemo(() => {
    return shuffle(alternatives);
  }, [alternatives]);

  const handleClickedOption = useCallback((alternative: string) => {
    setCurrentAlternativeSelected(alternative);
  }, []);

  const handleEndGame = useCallback(() => {
    navigate("/end", {
      state: { score: currentScore, numberOfQuestions: TOTAL_QUESTIONS },
    });
  }, [navigate, currentScore]);

  const handleNextQuestion = useCallback(() => {
    setShowRightAlternative(false);
    setCurrentAlternativeSelected(null);
    setCurrentQuestion((prev) => prev + 1);
  }, []);

  const verifyAnswer = useCallback(() => {
    setShowRightAlternative(true);
    if (currentAlternativeSelected === correctAnswer) {
      setCurrentScore((prev) => prev + 1);
      playCorretSound();
      toast.success("Resposta correta");
    } else {
      playWrongSound();
      toast.error("Resposta incorreta");
    }
  }, [currentAlternativeSelected, correctAnswer, playCorretSound, playWrongSound]);

  return (
    <>
      <BackButton />
      <div className="flex flex-col items-center px-4 gap-8 h-screen justify-center">
        <div className="flex items-center gap-1">
          <img src="/logo2.png" alt="" className="w-[72px]" />
          <h1 className="font-bold tracking-tighter text-xl">
            Quizz<span className="text-green-400">fy</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-semibold">Questão: {currentQuestion + 1}/10</span>
          <ScoreDisplay currentQuestion={currentQuestion} currentScore={currentScore} />
        </div>

        <div className="text-center ring-1 ring-indigo-800 rounded-md p-3 md:max-w-xl">
          <p>{question}</p>
        </div>

        <div className="flex flex-col min-w-80 gap-4">
          {shuffledAlternatives.map((alternative) => (
            <Alternative
              isRight={showRightAlternative && alternative === correctAnswer}
              isWrong={showRightAlternative && alternative !== correctAnswer}
              selected={currentAlternativeSelected === alternative}
              disabled={showRightAlternative}
              handleClickedOption={handleClickedOption}
              alternative={alternative}
              key={alternative}
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
            className="bg-green-700 hover:bg-green-800 hover:scale-110 transition-all ease-in-out w-3/4 sm:w-2/5 md:w-3/12"
          >
            Finalizar
          </Button>
        ) : showRightAlternative ? (
          <Button
            onClick={() => handleNextQuestion()}
            variant="default"
            className="bg-indigo-700 text-white p-4 rounded-md outline-none
          hover:bg-indigo-800 hover:scale-110 ease-in-out transition-all active:bg-indigo-800
          active:scale-110 disabled:cursor-not-allowed w-3/4 sm:w-2/5 md:w-3/12"
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
          active:scale-110 disabled:cursor-not-allowed w-3/4 sm:w-2/5 md:w-3/12"
          >
            Confirmar
          </Button>
        )}
      </div>
    </>
  );
}
