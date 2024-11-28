import "./Selected_characteristic_CPU.css";
import type { SelectedCharType } from "../../pages/Game_page";

function Selected_characteristic_CPU({
  charCPU,
  winner,
  selectedChar,
}: {
  charCPU: number;
  winner: string | null;
  selectedChar: SelectedCharType;
}) {
  return (
    <div id="selected_char_cpu" className={winner === "cpu" ? "winner" : ""}>
      {selectedChar.value !== 0 && (
        <h1>{`${selectedChar.label} : ${charCPU} ${selectedChar.unit}`}</h1>
      )}
    </div>
  );
}

export default Selected_characteristic_CPU;
