"use client";

import { SyntheticEvent, useState } from "react";
import { words } from "./words";
import { sample } from "lodash";

export default function Hangman() {
  const [wordToGuess, setWordToGuess] = useState<string>("unrented");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const resetGame = () => {
    const newRandomWord = sample(words);
    if (!newRandomWord) {
      throw new Error("no words in words array");
    }
    setWordToGuess(newRandomWord);
    setGuessedLetters([]);
  };

  const handleLetterPick = (e: SyntheticEvent) => {
    e.preventDefault();
    setGuessedLetters([...guessedLetters, e.currentTarget.innerHTML]);
  };

  const keyboard = alphabet.map((letter, key) => {
    return (
      <button
        key={key}
        onClick={handleLetterPick}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-1"
      >
        {letter}
      </button>
    );
  });

  return (
    <div className="h-screen font-sans bg-blue-100 flex flex-col items-center justify-evenly">
      <h1 className="text-5xl text-center">Hangman</h1>
      <h1 className="text-2xl text-center">{guessedLetters.join(", ")}</h1>
      <h1 className="text-2xl text-center">{wordToGuess}</h1>
      <div className="w-2/5 flex flex-wrap justify-center items-center">
        {keyboard}
      </div>
      <button
        onClick={resetGame}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        reset
      </button>
    </div>
  );
}

["#1b676b", "#519548", "#88c425", "#bef202", "#eafde6"];
