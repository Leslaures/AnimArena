import "./Deck.css";
import { useState } from "react";
import Animals_card from "../Animals_card/Animals_card";
import Deck_card from "../Deck_card/Deck_card";

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

function Deck() {
  const [animal, setAnimalInDeck] = useState(null as null | AnimalType);
  return (
    <div>
      <Deck_card setAnimal={setAnimalInDeck} />
      <Deck_card setAnimal={setAnimalInDeck} />
      <Deck_card setAnimal={setAnimalInDeck} />
      <Deck_card setAnimal={setAnimalInDeck} />
      <Deck_card setAnimal={setAnimalInDeck} />
      {animal && <Animals_card animal={animal} />}
    </div>
  );
}
export default Deck;
