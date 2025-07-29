import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Logo } from "@/components/quiz/logo";
import { useSound } from "@/hooks/useSound";

export function EndGame() {
  const [params, setParams] = useState({ score: 0, numberOfQuestions: 0 });
  const location = useLocation();
  const navigate = useNavigate();
  const { playSound: playWinningSound } = useSound("sounds/success-final.mp3");
  const { playSound: playLostSound } = useSound("sounds/lost-final2.mp3");

  const WINNING_CONDITION = 8;

  useEffect(() => {
    if (!location.state) {
      return navigate("/play");
    }
    const { score, numberOfQuestions } = location.state;
    setParams({
      score: Number(score),
      numberOfQuestions: Number(numberOfQuestions),
    });
  }, []);

  useEffect(() => {
    if (params.numberOfQuestions !== 0) {
      if (params.score >= WINNING_CONDITION) {
        playWinningSound();
      } else {
        playLostSound();
      }
    }
  }, [params.score, params.numberOfQuestions]);

  function handlePlayAgain() {
    navigate("/");
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
        <Logo />
        <div className="flex items-center gap-2">
          <span className="text-4xl">
            {Number(params.score) >= WINNING_CONDITION ? "🎉" : "😿"}
          </span>
          <h1 className="text-4xl font-bold">Fim de jogo</h1>
        </div>
        <div className="flex items-center flex-col gap-2">
          <span className="font-semibold">Sua pontuação:</span>
          <div className="flex gap-2 items-center">
            <div className="ring-1 ring-indigo-400 py-1 pl-1 pr-2 flex gap-1 rounded-sm">
              <span>✅</span>
              <p>{params.score}</p>
            </div>
            <div className="ring-1 ring-indigo-400 py-1 pl-1 pr-2 flex gap-1 rounded-sm">
              <span>❌</span>
              <p>{Number(params.numberOfQuestions) - Number(params.score)}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePlayAgain}
            type="button"
            className="bg-indigo-500 text-white p-4 rounded-md hover:bg-indigo-600 hover:scale-110 ease-in-out transition-all active:bg-indigo-700 font-bold min-w-32"
          >
            Jogar novamente
          </button>

          <a
            target="_blank"
            href="https://github.com/withoutspaces/data-quiz2.0"
            className="flex items-center gap-2 ring-1 ring-indigo-600 p-2 rounded-md hover:bg-indigo-900"
          >
            <i className="fa fa-github text-2xl" />
            <span className="text-sm">Contribua no GitHub</span>
          </a>
        </div>
      </div>
    </>
  );
}
