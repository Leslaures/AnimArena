import "./Selected_characteristic.css";
import type { SelectedCharType } from "../../pages/Game_page";

interface selectedChar {
  selectedChar: SelectedCharType;
}

function Selected_characteristic({ selectedChar }: selectedChar) {
  return (
    <div id="selected_char">
      {selectedChar.value !== 0 && (
        <h1>{`${selectedChar.label} : ${selectedChar.value} ${selectedChar.unit}`}</h1>
      )}
    </div>
  );
}

export default Selected_characteristic;
