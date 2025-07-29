import { CategorySelector } from "@/components/category-selector";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/quiz/logo";

type CategorySelector = {
  category: string;
  difficulty: string;
};

export function Home() {
  const navigate = useNavigate();

  function handleContinue({ category, difficulty }: CategorySelector) {
    navigate("/quiz", { state: { category, difficulty } });
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center px-6">
        <div className="flex flex-col items-center gap-8 mb-20">
          <Logo />
          <p className="text-center">
            Bem vindo ao Quizzfy! Para continuar, selecione a categoria das perguntas e a
            dificuldade.
          </p>
          <CategorySelector handleNavigate={handleContinue} />
        </div>
      </div>
    </>
  );
}
