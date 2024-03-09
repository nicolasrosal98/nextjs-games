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
    const gridCard =
      card.side === "back" ? (
        <button className="bg-white border-2 border-red-500 text-6xl grid place-items-center">
          🐶
        </button>
      ) : (
        <button className="bg-green-200 border-2 border-red-500 text-6xl grid place-items-center">
          🐱
        </button>
      );
    return gridCard;
  });

  return (
    <div className="h-screen bg-pink-500 border-2 border-blue-500 grid grid-cols-3 w-400 h-400">
      {gridCards}
    </div>
  );
}
