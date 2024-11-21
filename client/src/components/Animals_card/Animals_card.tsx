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
    longevite: number;
    gestation_jours: number;
  };
  selectedChar: string;
  setSelectedChar: (selectedChar: string) => void;
  onValidateCharacteristic: () => void;
}

function Animals_card({
  animal,
  setSelectedChar,
  onValidateCharacteristic,
}: Animals_cardProps) {
  const handleCharacteristic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedChar(value);
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
              type="radio"
              id="poids"
              name="characteristic"
              value={`Poids : ${animal.poids_kg} kg`}
              onChange={handleCharacteristic}
            />
            <label htmlFor="poids">Poids : {animal.poids_kg} kg</label>
          </div>
          <div>
            <input
              type="radio"
              id="longueur"
              name="characteristic"
              value={`Longueur : ${animal.longueur_cm} cm`}
              onChange={handleCharacteristic}
            />
            <label htmlFor="longueur">Longueur : {animal.longueur_cm} cm</label>
          </div>
          <div>
            <input
              type="radio"
              id="longevite"
              name="characteristic"
              value={`Longévité : ${animal.longevite} ans`}
              onChange={handleCharacteristic}
            />
            <label htmlFor="longevite">
              Longévité : {animal.longevite} ans
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="gestation"
              name="characteristic"
              value={`Gestation : ${animal.gestation_jours} jours`}
              onChange={handleCharacteristic}
            />
            <label htmlFor="gestation">
              Gestation : {animal.gestation_jours} jours
            </label>
          </div>
          <div>
            <button type="submit">Valides-tu cette caractéristique ?</button>
          </div>
        </fieldset>
      </form>
    </figure>
  );
}

export default Animals_card;
