"use client";
type PickHandlerFunction = (pickedLetter: string) => void;
type LetterKeyboardProps = {
  handleLetterPick: PickHandlerFunction;
  guessedLetters: string[];
};
export function LetterKeyboard(props: LetterKeyboardProps) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const keyboard = alphabet.map((letter, key) => {
    const isDisabled = props.guessedLetters.includes(letter);
    return (
      <button
        disabled={isDisabled}
        key={key}
        onClick={() => props.handleLetterPick(letter)}
        className="transition-all duration-1000 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform disabled:scale-90 disabled:hover:outline-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-1"
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
