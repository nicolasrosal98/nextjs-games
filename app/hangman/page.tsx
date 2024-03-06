"use client";

import { useState } from "react";
import { words } from "./words";
import { sample } from "lodash";

export default function Hangman() {
  const [wordToGuess, setWordToGuess] = useState<string>("unrented");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([
    "z",
    "r",
    "e",
    "w",
    "x",
  ]);

  const resetGame = () => {
    const randomWord = sample(words);
    if (!randomWord) {
      throw new Error("no words in words array");
    }
    setWordToGuess(randomWord);
    setGuessedLetters([]);
  };

  return (
    <div className="h-screen bg-gray-500 flex flex-col items-center justify-evenly">
      <h1 className="text-5xl text-center">Hangman</h1>
      <h1 className="text-2xl text-center">{guessedLetters.join(", ")}</h1>
      <h1 className="text-2xl text-center">{wordToGuess}</h1>
      <button
        onClick={resetGame}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        reset
      </button>
    </div>
  );
}
