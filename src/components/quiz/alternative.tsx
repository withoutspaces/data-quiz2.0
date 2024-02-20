interface AlternativeProps {
    handleClickedOption: () => void;
    alternative: string
    selected: boolean
}

export function Alternative({ handleClickedOption, alternative, selected }: AlternativeProps) {
  return (
    <button
      type="button"
      onClick={() => handleClickedOption()}
      className={`bg-indigo-500 text-white p-4 rounded-md hover:bg-indigo-600 
      hover:scale-110 ease-in-out transition-all active:bg-indigo-700 ${selected && "bg-indigo-600 scale-110 ring-2 ring-indigo-400"}`}
    >
      {alternative}
    </button>
  );
}


