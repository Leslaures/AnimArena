import "./Winner.css";

function Winner({
  winnerMessage,
  winnerEmoji,
}: { winnerMessage: string | null; winnerEmoji: string | null }) {
  return (
    <div className="Score">
      <h2 id="winnerH2">
        {winnerMessage}
        <br />
        {winnerEmoji}
      </h2>
    </div>
  );
}

export default Winner;
