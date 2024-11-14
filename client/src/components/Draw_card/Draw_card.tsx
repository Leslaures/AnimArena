import "./Draw_card.css";
import { useState } from "react";
import Animals_card from "../Animals_card/Animals_card";

function Draw_card() {
  const [animal, setAnimal] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(true);

  const getAnimal = () => {
    fetch("http://localhost:3310/api/animalsLibrary")
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setAnimal(data.results[randomIndex]);
        setIsButtonClicked(false);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="drawCard">
      {isButtonClicked && (
        <button type="button" onClick={getAnimal} className="buttonDrawCard">
          Clique ici pour piocher une carte
        </button>
      )}
      {animal && <Animals_card animal={animal} />}
    </div>
  );
}
export default Draw_card;
