import { useState } from "react";
import "./Pseudo.css";

interface PseudoProps {
  pseudo: string;
  setPseudo: (value: string) => void;
}

function Pseudo({ pseudo, setPseudo }: PseudoProps) {
  const [inputValue, setInputValue] = useState("");

  function changeInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function changePseudo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPseudo(inputValue);
  }

  return (
    <div id="pseudo">
      {pseudo ? (
        <p>
          Bienvenue, {pseudo} ! <br /> Es-tu prêt / prête à jouer ?
        </p>
      ) : (
        <form onSubmit={changePseudo}>
          <label>
            Ton pseudo :
            <input type="text" value={inputValue} onChange={changeInputValue} />
          </label>
          <button type="submit">Valider</button>
        </form>
      )}
    </div>
  );
}
export default Pseudo;
