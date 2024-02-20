import { Logo } from "@/components/quiz/logo";
import { useLocation, useNavigate } from "react-router-dom";

const contributors: string[] = [
  "Danmiel",
  "Lucas",
  "Rafael",
  "Rafaela",
  "Vitor",
  "Yuri",
  "Danmiel",
  "Lucas",
  "Rafael",
  "Rafaela",
  "Vitor",
  "Yuri",
  "Danmiel",
  "Lucas",
  "Rafael",
  "Rafaela",
  "Vitor",
  "Yuri",
  "Danmiel",
  "Lucas",
  "Rafael",
  "Rafaela",
  "Vitor",
  "Yuri",
  "Danmiel",
  "Lucas",
  "Rafael",
  "Rafaela",
  "Vitor",
  "Yuri",
  "Danmiel",
  "Lucas",
  "Rafael",
  "Rafaela",
  "Vitor",
  "Yuri",
];

export function EndGame() {
  const location = useLocation();
  const navigate = useNavigate();

  const ponctuation = location.state
    ? location.state.correctAnswers.toString()
    : false;

  function handlePlayAgain() {
    navigate("/");
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
        <Logo />
        {ponctuation && (
          <div className="flex items-center gap-2">
            <span className="text-4xl">🎉</span>
            <h1 className="text-4xl font-bold">Fim de jogo</h1>
          </div>
        )}
        <span className="font-semibold">
          {ponctuation
            ? "Sua pontuação: "
            : "Você ainda não jogou! Clique no botão abaixo"}
        </span>
        {ponctuation && (
          <div className="flex gap-2 items-center">
            <div className="ring-1 ring-indigo-400 py-1 pl-1 pr-2 flex gap-1 rounded-sm">
              <span>✅</span>
              <p>{ponctuation}</p>
            </div>
            <div className="ring-1 ring-indigo-400 py-1 pl-1 pr-2 flex gap-1 rounded-sm">
              <span>❌</span>
              <p>{10 - Number(ponctuation)}</p>
            </div>
          </div>
        )}
        <p className="text-center">
          {ponctuation &&
            "Parabéns! Você finalizou o jogo. Clique no botão abaixo para jogar novamente."}
        </p>
        <div className="flex gap-3">

        
        <button
          onClick={handlePlayAgain}
          type="button"
          className="bg-indigo-500 text-white p-4 rounded-md hover:bg-indigo-600 hover:scale-110 ease-in-out transition-all active:bg-indigo-700 font-bold min-w-32"
        >
          {ponctuation ? "Jogar novamente" : "Jogar"}
        </button>

        <a
          target="_blank"
          href="https://github.com/withoutspaces"
          className="flex items-center gap-2 ring-1 ring-indigo-600 p-2 rounded-md"
        >
          <i className="fa fa-github text-2xl" />
          <span className="text-sm">Contribua no GitHub</span>
        </a>
        </div>

      </div>

      {contributors.length > 0 && (
        <div className="absolute -bottom-64 sm:-bottom-44 lg:-bottom-32 md:-bottom-40">
          <div className="flex flex-col items-center gap-2 px-6 mb-8">
            <p className="text-indigo-400 text-sm">
              💓 Agradecimento especial a:
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 my-2">
              {contributors.map((contributor, index) => (
                <li key={index} className="text-indigo-400 text-sm list-disc">
                  {contributor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
