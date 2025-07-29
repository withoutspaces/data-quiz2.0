import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  const handlePageBack = () => {
    navigate("/");
  };

  return (
    <button
      className="text-indigo-200 absolute top-4 left-4 font-semibold hover:text-indigo-400 hover:line"
      onClick={handlePageBack}
    >
      ◀️ Voltar
    </button>
  );
}
