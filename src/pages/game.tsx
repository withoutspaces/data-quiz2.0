import { useNavigate } from "react-router-dom";
import { Alternative } from "@/components/quiz/alternative";
import { questoes } from "@/data/questions";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/quiz/title";
import { toast } from "sonner";

/*
  *ideias* 
  colocar botoes de proximo e anterior
  salvar o estado das respostas anteriores
  deixar o user livre para ir e voltar respondendo as questoes
  
*/
export function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentAlternativeSelected, setCurrentAlternativeSelected] = useState<string | null>(null);
  // const location = useLocation();
  const navigate = useNavigate();

  const { alternatives, correctAnswer, question } =
    questoes.general.easy[currentQuestion];

  function handleClickedOption(alternative: string) {
    setCurrentAlternativeSelected(alternative);
  }

  function verifyAnswer() {
    if(currentAlternativeSelected === correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      toast.success("Resposta correta");
      return ;
    }
    toast.error("Resposta incorreta");
  }

  function handleNextQuestion() {
    if (!currentAlternativeSelected) {
      toast.warning("Selecione uma alternativa");
      return;
    }
    verifyAnswer()
    if(currentQuestion === 9 && currentAlternativeSelected) {
      navigate("/end", { state: { correctAnswers } })
    }
    setCurrentAlternativeSelected(null);
    setCurrentQuestion(currentQuestion + 1);
  }

  function handleJumpQuestion() {
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div className="flex flex-col items-center px-4 gap-8 h-screen justify-center">
      <div className="flex items-center gap-1 ">
        <img src="/src/assets/logo2.png" alt="" className="w-[72px]" />
        <h1 className="font-bold tracking-tighter text-xl">DataQuiz</h1>
      </div>

      <div className="flex gap-4 items-center">
        <span className="font-semibold">Questão: {currentQuestion + 1}/10</span>
        {currentQuestion > 0 && (
          <>
            <div className="ring-1 ring-indigo-400 py-1 pl-1 pr-2 flex gap-1 rounded-sm">
              <span>✅</span>
              <p>{correctAnswers}</p>
            </div>
            <div className="ring-1 ring-indigo-400 py-1 pl-1 pr-2 flex gap-1 rounded-sm">
              <span>❌</span>
              <p>{currentQuestion - correctAnswers}</p>
            </div>
          </>
        )}
      </div>

      <Title title={question} />

      <div className="flex flex-col min-w-80 gap-4">
        {alternatives.map((alternative, index) => (
          <Alternative
            selected={currentAlternativeSelected === alternative}
            handleClickedOption={() => handleClickedOption(alternative)}
            alternative={alternative}
            key={index}
          />
        ))}
      </div>

      <div className="space-x-4">
        <Button
          onClick={handleNextQuestion}
          variant="default"
          className="bg-indigo-700 text-white p-4 rounded-md w-28 outline-none
            hover:bg-indigo-800 hover:scale-110 ease-in-out transition-all active:bg-indigo-800
             active:scale-110"
        >
          {currentQuestion === 9 ? "Finalizar" : "Próximo"}
        </Button>
        <Button
          onClick={handleJumpQuestion}
          disabled={currentQuestion === 9}
          variant="destructive"
          className="text-white p-4 rounded-md w-28 outline-none
            hover:bg-red-700 hover:scale-110 ease-in-out transition-all active:bg-red-700
            active:scale-110"
        >
          Pular
        </Button>
      </div>
    </div>
  );
}
