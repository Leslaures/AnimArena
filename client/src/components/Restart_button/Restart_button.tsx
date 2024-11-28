import "./Restart_button.css";

interface RestartButtonProps {
  onRestart: () => void;
}

function Restart_button({ onRestart }: RestartButtonProps) {
  return (
    <div className="restartButton">
      <button type="button" className="buttonRestart" onClick={onRestart}>
        <p id="restartButton">Rejouer</p>
      </button>
    </div>
  );
}

export default Restart_button;
