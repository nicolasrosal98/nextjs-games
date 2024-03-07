/**
 * Adds together two numbers
 * @param targetWord - the word to guess
 * @param guessedArray - the users's letter guesses
 * @returns an array with the matching letters and null if not matched
 */

type Result = [(string | null)[], number]

const expectedRes: Result = [['o', null, null, 'u'], 0]

function matchedLetters(targetWord: string, guessedArray: string[]): Result {
    let missCount = 0;
    const targetLetters = targetWord.split("")
    const outputArray: (string | null)[] = Array<(string | null)>(targetWord.length).fill(null);

    for (const guessedLetter of guessedArray) {
        if (targetLetters.indexOf(guessedLetter) === -1) missCount++ 

        for (let index = 0; index < targetWord.length; index++) {
            if (guessedLetter === targetWord[index]) {
                outputArray[index] = guessedLetter
            }
        }
    }

    return [outputArray, missCount];
}

export { matchedLetters };