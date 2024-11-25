import "./Winner.css";

function Winner({ winner }: { winner: string | null }) {
  return (
    <div className="Score">
      <h2>{winner}</h2>
    </div>
  );
}

export default Winner;
