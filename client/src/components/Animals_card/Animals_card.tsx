import "./Animals_card.css";
import type { AnimalType } from "../../pages/Game_page";
import type { SelectedCharType } from "../../pages/Game_page";

interface Animals_cardProps {
  animal: AnimalType;
  selectedChar: SelectedCharType;
  setSelectedChar: (selectedChar: SelectedCharType) => void;
  onValidateCharacteristic: () => void;
  isP1: boolean;
  setIsP1Turn: (show: boolean) => void;
}

let isSelectedChar = false;
let isValidatedChar = false;

function Animals_card({
  animal,
  setSelectedChar,
  onValidateCharacteristic,
  isP1,
  setIsP1Turn,
}: Animals_cardProps) {
  // Permet de récupérer la caractéristique choisie
  const handleCharacteristic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = JSON.parse(event.target.value);
    const formattedValue = {
      label: value.label,
      value: value.value,
      unit: value.unité,
    };

    setSelectedChar(formattedValue);
    isSelectedChar = true;
  };

  // Permet de valider la caractéristique choisie
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onValidateCharacteristic();
    isSelectedChar = false;
    isValidatedChar = true;
    setIsP1Turn(false); // tour du CPU  /*TODO:*/
  };

  return (
    <figure className="DisplayCard">
      <h3>{animal.nom}</h3>
      <div className="animalPicture">
        <img
          src={animal.image}
          alt={`${animal.nom_male} / ${animal.nom_femelle}`}
        />
      </div>
      <p className="did_you_know">{animal.savais_tu}</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <input
              className={`${isP1 ? "" : "CPU"} ${isValidatedChar ? "formDisabled" : ""}`}
              type="radio"
              id="vitesse"
              name="characteristic"
              value={JSON.stringify({
                label: "Vitesse",
                value: animal.vitesse_kmh,
                unité: "km/h",
              })}
              onChange={handleCharacteristic}
            />
            <label
              className={`${isP1 ? "" : "CPUlabel"} ${isValidatedChar ? "formDisabledLabel" : ""}`}
              htmlFor="vitesse"
            >
              Vitesse : {animal.vitesse_kmh} km/h
            </label>
          </div>

          <div>
            <input
              className={`${isP1 ? "" : "CPU"} ${isValidatedChar ? "formDisabled" : ""}`}
              type="radio"
              id="poids"
              name="characteristic"
              value={JSON.stringify({
                label: "Poids",
                value: animal.poids_kg,
                unité: "kg",
              })}
              onChange={handleCharacteristic}
            />
            <label
              htmlFor="poids"
              className={`${isP1 ? "" : "CPUlabel"} ${isValidatedChar ? "formDisabledLabel" : ""}`}
            >
              Poids : {animal.poids_kg} kg
            </label>
          </div>
          <div>
            <input
              className={`${isP1 ? "" : "CPU"} ${isValidatedChar ? "formDisabled" : ""}`}
              type="radio"
              id="longueur"
              name="characteristic"
              value={JSON.stringify({
                label: "Longueur",
                value: animal.longueur_cm,
                unité: "cm",
              })}
              onChange={handleCharacteristic}
            />
            <label
              htmlFor="longueur"
              className={`${isP1 ? "" : "CPUlabel"} ${isValidatedChar ? "formDisabledLabel" : ""}`}
            >
              Longueur : {animal.longueur_cm} cm
            </label>
          </div>
          <div>
            <input
              className={`${isP1 ? "" : "CPU"} ${isValidatedChar ? "formDisabled" : ""}`}
              type="radio"
              id="longevite"
              name="characteristic"
              value={JSON.stringify({
                label: "Longévité",
                value: animal.longevite_ans,
                unité: "ans",
              })}
              onChange={handleCharacteristic}
            />
            <label
              htmlFor="longevite"
              className={`${isP1 ? "" : "CPUlabel"} ${isValidatedChar ? "formDisabledLabel" : ""}`}
            >
              Longévité : {animal.longevite_ans} ans
            </label>
          </div>
          <div>
            <input
              className={`${isP1 ? "" : "CPU"} ${isValidatedChar ? "formDisabled" : ""}`}
              type="radio"
              id="gestation"
              name="characteristic"
              value={JSON.stringify({
                label: "Gestation",
                value: animal.gestation_jours,
                unité: "jours",
              })}
              onChange={handleCharacteristic}
            />
            <label
              htmlFor="gestation"
              className={`${isP1 ? "" : "CPUlabel"} ${isValidatedChar ? "formDisabledLabel" : ""}`}
            >
              Gestation : {animal.gestation_jours} jours
            </label>
          </div>
          <div className={isP1 ? "" : "CPU"}>
            {/* Permet d'afficher le bouton GO ! si une caractéristique est choisie*/}
            {isSelectedChar && (
              <button id="charValidatorButton" type="submit">
                GO !
              </button>
            )}
          </div>
        </fieldset>
      </form>
    </figure>
  );
}

export default Animals_card;
