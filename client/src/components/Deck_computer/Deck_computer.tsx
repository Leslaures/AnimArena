import "./Deck_computer.css";
import Deck_card_computer from "../Deck_card_computer/Deck_card_computer";

type AnimalType = {
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

interface Deck_cardProps {
  setAnimalComputer: (animal: AnimalType) => void;
}

function Deck_computer({ setAnimalComputer }: Deck_cardProps) {
  return (
    <div id="deck">
      <Deck_card_computer setAnimalComputer={setAnimalComputer} />
      <Deck_card_computer setAnimalComputer={setAnimalComputer} />
      <Deck_card_computer setAnimalComputer={setAnimalComputer} />
      <Deck_card_computer setAnimalComputer={setAnimalComputer} />
      <Deck_card_computer setAnimalComputer={setAnimalComputer} />
    </div>
  );
}
export default Deck_computer;
