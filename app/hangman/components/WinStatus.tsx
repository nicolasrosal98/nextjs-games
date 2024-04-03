type WinStatusProps = {
  wordToGuess: string;
  guessIsComplete: boolean;
  missCount: number;
};

export default function WinStatus(props: WinStatusProps): JSX.Element {
  const { guessIsComplete, missCount } = props;
  const missesRemain = missCount < 10;

  return missesRemain ? (
    guessIsComplete ? (
      <h1 className="text-8xl">You Won</h1>
    ) : (
      <h1>Number of Misses: {missCount}</h1>
    )
  ) : (
    <div>
      <h1>You Lost</h1>
      <h2>Word: {props.wordToGuess}</h2>
    </div>
  );
}
