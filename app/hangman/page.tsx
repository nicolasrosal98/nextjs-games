"use client";

import { useEffect, useState } from "react";
import { words } from "./words";
import { sample } from "lodash";
import { matchedLetters } from "./helpers/matchedLetters";
import WinStatus from "./components/WinStatus";
import { LetterKeyboard } from "./components/LetterKeyboard";

export default function Hangman() {
  const [wordToGuess, setWordToGuess] = useState<string | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  let [guessMatches, missCount] = matchedLetters(wordToGuess, guessedLetters);

  const resetGame = () => {
    const newRandomWord = sample(words);
    if (!newRandomWord) {
      throw new Error("no words in words array");
    }
    setWordToGuess(newRandomWord);
    setGuessedLetters([]);
  };

  const handleLetterPick = (pickedLetter: string) => {
    if (!guessedLetters.includes(pickedLetter)) {
      setGuessedLetters([...guessedLetters, pickedLetter]);
    }
  };

  // call reset game one second from now to avoid discrepancies
  // between server and client renders induced by randomness
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetGame();
    }, 1000);
    function cleanUp() {
      clearTimeout(timeoutId);
    }
    return cleanUp;
  }, []);

  const guessField = guessMatches.map((guess) => {
    let field = guess !== null ? guess : "_";
    return field;
  });

  const guessIsComplete = guessField.join("") === wordToGuess;

  return (
    <div className="h-screen font-sans bg-blue-100 text-black flex flex-col items-center justify-evenly">
      <h1 className="text-5xl text-center ">Hangman</h1>
      <h1 className="flex items-center justify-center text-2xl">
        {guessField.join(" ")}
      </h1>
      <WinStatus guessIsComplete={guessIsComplete} missCount={missCount} />
      <LetterKeyboard
        handleLetterPick={handleLetterPick}
        guessedLetters={guessedLetters}
      />
      <button
        onClick={resetGame}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        reset
      </button>
    </div>
  );
}
