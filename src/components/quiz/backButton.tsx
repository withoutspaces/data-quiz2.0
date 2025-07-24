interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      className="text-indigo-200 absolute top-4 left-4 font-semibold hover:text-indigo-400 hover:line"
      onClick={onClick}
    >
      ◀️ Voltar
    </button>
  );
}
