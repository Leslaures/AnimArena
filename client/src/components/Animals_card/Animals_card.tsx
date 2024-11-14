import "./Animals_card.css";

interface Animals_cardProps {
  animal: {
    nom_male: string;
    nom_femelle: string;
    image: string;
    savais_tu: string;
    poids_kg: number;
    longueur_cm: number;
    longevite: number;
    gestation_jours: number;
  };
}

function Animals_card({ animal }: Animals_cardProps) {
  return (
    <figure className="DisplayCard">
      <h3>
        {animal.nom_male} / {animal.nom_femelle}
      </h3>
      <img
        src={animal.image}
        alt={`${animal.nom_male} / ${animal.nom_femelle}`}
      />
      <p>
        <em>
          <strong>{animal.savais_tu}</strong>
        </em>
      </p>
      <ul>
        <li>
          Poids : <strong>{animal.poids_kg} kg</strong>
        </li>
        <li>
          Longueur :<strong> {animal.longueur_cm} cm</strong>
        </li>
        <li>
          Longévité :<strong> {animal.longevite} ans</strong>
        </li>
        <li>
          Gestation : <strong>{animal.gestation_jours} jours</strong>
        </li>
      </ul>
    </figure>
  );
}

export default Animals_card;
