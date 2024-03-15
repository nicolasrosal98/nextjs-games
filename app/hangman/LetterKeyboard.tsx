"use client";
type PickHandlerFunction = (pickedLetter: string) => void;
type LetterKeyboardProps = {
  handleLetterPick: PickHandlerFunction;
};
export function LetterKeyboard(props: LetterKeyboardProps) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const keyboard = alphabet.map((letter, key) => {
    return (
      <button
        key={key}
        onClick={() => props.handleLetterPick(letter)}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-1"
      >
        {letter}
      </button>
    );
  });

  return (
    <div className="w-2/5 flex flex-wrap justify-center items-center">
      {keyboard}
    </div>
  );
}
