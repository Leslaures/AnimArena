import "./Round.css";

function Round({ round }: { round: number }) {
  return <h1 id="round">Manche {round} /5</h1>;
}
export default Round;
