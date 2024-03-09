"use client";

import { SyntheticEvent, useState } from "react";
import { words } from "./words";
import { sample } from "lodash";
import { matchedLetters } from "./helpers/matchedLetters";

export default function Hangman() {
  const initWord = sample(words);
  if (!initWord) {
    throw new Error("no words in words array");
  }

  const [wordToGuess, setWordToGuess] = useState<string>(initWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let [guessMatches, missCount] = matchedLetters(wordToGuess, guessedLetters);

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

  const guessField = guessMatches.map((guess, key) => {
    let field = guess !== null ? guess : "_";
    return field;
  });

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
    <div className="h-screen font-sans bg-blue-100 text-black flex flex-col items-center justify-evenly">
      <h1 className="text-5xl text-center ">Hangman</h1>
      <h1 className="flex items-center justify-center text-2xl">
        {guessField.join(" ")}
      </h1>
      <h1 className="text-2xl text-center">{guessedLetters.join(", ")}</h1>
      <h1 className="text-2xl text-center">{wordToGuess}</h1>
      {missCount < 10 ? (
        <h1>Number of Misses: {missCount}</h1>
      ) : (
        <h1>You Lost</h1>
      )}
      {guessField.join("") === wordToGuess && (
        <h1 className="text-8xl">You Won</h1>
      )}
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
