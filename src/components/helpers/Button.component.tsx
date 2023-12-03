interface IButton {
  onClick: () => void;
  text: string;
  className?: string;
}

export default function Button({ onClick, text, className = "" }: IButton) {
  return (
    <button
      onClick={onClick}
      className={`bg-rose-500 text-white py-2.5 px-4 rounded-sm ${className}`}
    >
      {text}
    </button>
  );
}
