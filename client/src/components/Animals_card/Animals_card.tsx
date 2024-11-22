import "./Animals_card.css";

interface Animals_cardProps {
  animal: {
    nom: string;
    nom_male: string;
    nom_femelle: string;
    image: string;
    savais_tu: string;
    poids_kg: number;
    longueur_cm: number;
    longevite_ans: number;
    gestation_jours: number;
  };
  selectedChar: string;
  setSelectedChar: (selectedChar: string) => void;
  onValidateCharacteristic: () => void;
  isP1: boolean;
}

function Animals_card({
  animal,
  setSelectedChar,
  onValidateCharacteristic,
  isP1,
}: Animals_cardProps) {
  const handleCharacteristic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = JSON.parse(event.target.value);
    const formattedValue = `${value.label} : ${value.value} ${value.unité}`;
    setSelectedChar(formattedValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onValidateCharacteristic();
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
              className={isP1 ? "" : "CPU"}
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
            <label htmlFor="poids">Poids : {animal.poids_kg} kg</label>
          </div>
          <div>
            <input
              className={isP1 ? "" : "CPU"}
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
            <label htmlFor="longueur">Longueur : {animal.longueur_cm} cm</label>
          </div>
          <div>
            <input
              className={isP1 ? "" : "CPU"}
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
            <label htmlFor="longevite">
              Longévité : {animal.longevite_ans} ans
            </label>
          </div>
          <div>
            <input
              className={isP1 ? "" : "CPU"}
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
            <label htmlFor="gestation">
              Gestation : {animal.gestation_jours} jours
            </label>
          </div>
          <div className={isP1 ? "" : "CPU"}>
            <button type="submit">Valides-tu cette caractéristique ?</button>
          </div>
        </fieldset>
      </form>
    </figure>
  );
}

export default Animals_card;
