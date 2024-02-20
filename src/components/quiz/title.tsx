interface TitleProps {
    title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="text-center ring-1 ring-indigo-800 rounded-md p-3 md:min-w-96">
      <p>
        { title }
      </p>
    </div>
  );
}
