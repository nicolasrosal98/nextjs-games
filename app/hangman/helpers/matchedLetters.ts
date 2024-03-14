/**
 * Adds together two numbers
 * @param targetWord - the word to guess
 * @param guessedArray - the users's letter guesses
 * @returns an array with the matching letters and null if not matched
 */

type LetterMatchResult = [(string | null)[], number]

function matchedLetters(targetWord: string | null, guessedArray: string[]): LetterMatchResult {
    
    if (targetWord === null) {
        return [[], 0]
    }

    let missCount = 0;
    const targetLetters = targetWord.split("")
    const outputArray: (string | null)[] = Array<(string | null)>(targetWord.length).fill(null);

    for (const guessedLetter of guessedArray) {
        if (targetLetters.indexOf(guessedLetter) === -1) {
            missCount++ 
        }
            
        for (let index = 0; index < targetWord.length; index++) {
            if (guessedLetter === targetWord[index]) {
                outputArray[index] = guessedLetter
            }
        }
    }

    return [outputArray, missCount];
}

export { matchedLetters };