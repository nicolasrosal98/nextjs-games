export default function TicTacToe() {
  const cards = [
    { side: "back" },
    { side: "back" },
    { side: "back" },
    { side: "front" },
    { side: "back" },
    { side: "front" },
    { side: "back" },
    { side: "back" },
    { side: "front" },
  ];

  const gridCards = cards.map((card, key) => {
    const cardContent = card.side === "back" ? "🐶" : "🐱";

    return (
      <button
        key={key}
        className="cell bg-gray-200 flex items-center justify-center h-32 text-5xl"
      >
        {cardContent}
      </button>
    );
  });

  return (
    <div className="h-screen bg-white flex flex-col justify-evenly">
      <h1 className="text-5xl text-black self-center">TicTacToe Game</h1>
      <div className="grid grid-cols-3 gap-4 m-5">{gridCards}</div>
    </div>
  );
}
