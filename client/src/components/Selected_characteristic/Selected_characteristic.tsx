import "./Selected_characteristic.css";
import type { SelectedCharType } from "../../pages/Game_page";

interface selectedChar {
  selectedChar: SelectedCharType;
  winner: string | null;
}

function Selected_characteristic({ selectedChar, winner }: selectedChar) {
  return (
    <div id="selected_char" className={winner === "player" ? "winner" : ""}>
      {selectedChar.value !== 0 && (
        <h1>{`${selectedChar.label} : ${selectedChar.value} ${selectedChar.unit}`}</h1>
      )}
    </div>
  );
}

export default Selected_characteristic;
