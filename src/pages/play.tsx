import { Logo } from "@/components/quiz/logo";
import { useNavigate } from "react-router-dom";

export function Play() {
  const navigate = useNavigate();

  function handleNavigate() {
    return navigate("/");
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <Logo />
      <p className="text-center">
        Ops! Parece que você ainda não jogou! Clique abaixo para iniciar.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleNavigate}
          type="button"
          className="bg-indigo-500 text-white p-4 rounded-md hover:bg-indigo-600 hover:scale-110 ease-in-out transition-all active:bg-indigo-700 font-bold min-w-32"
        >
          Jogar
        </button>
      </div>
    </div>
  );
}
