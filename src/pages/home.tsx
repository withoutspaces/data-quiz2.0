import { CategorySelector } from "@/components/category-selector";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/quiz/logo";

type CategorySelector = {
  category: string;
  difficulty: string;
}

export function Home() {
  const navigate = useNavigate();

  function handleContinue({ category, difficulty }: CategorySelector) {
    navigate("/quiz", { state: { category, difficulty }});
  }
  function handleContribute() {
    navigate("/contribute");
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center px-6">
        <div className="flex flex-col items-center gap-8 mb-20">
          <Logo/>
          <p className="text-center">
            Bem vindo ao DataQuiz! Para continuar, selecione a categoria das
            perguntas e a dificuldade.
          </p>
          <CategorySelector 
            handleNavigate={handleContinue}
          />
        </div>

        <div className="absolute bottom-0">
          <Button
            onClick={handleContribute}
            variant="link"
            className="justify-end font-normal hover:underline text-indigo-400 hover:text-indigo-50"
          >
            Quer contribuir com questões?{" "}
            <span className="font-semibold">&nbsp;Clique aqui</span>
          </Button>
        </div>
      </div>
    </>
  );
}
