interface IButton {
  onChange: () => void;
  text: string;
}

export default function Button({ onChange, text }: IButton) {
  return (
    <button
      onChange={onChange}
      className="bg-red-500 text-white py-2.5 px-4 rounded-sm"
    >
      {text}
    </button>
  );
}
