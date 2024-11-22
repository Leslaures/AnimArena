import { useEffect, useState } from "react";
import Animals_card from "../components/Animals_card/Animals_card";
import "./EncyclopediaPage.css";
import type { AnimalType } from "../../pages/Game_page";

function EncyclopediaPage() {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState<AnimalType[]>([]);

  // Récupère les données de l'API au chargement
  useEffect(() => {
    fetch("http://localhost:3310/api/animalsLibrary")
      .then((response) => response.json())
      .then((data) => {
        if (data?.results) {
          setAnimals(data.results);
        } else {
          console.error("Données incorrectes reçues de l'API");
        }
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des données", error),
      );
  }, []);

  // Met à jour les suggestions en fonction de la recherche
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredAnimals([]);
    } else {
      const suggestions = animals.filter((animal) => {
        const nom = animal?.nom?.toLowerCase() || "";
        const nom_male = animal?.nom_male?.toLowerCase() || "";
        const nom_femelle = animal?.nom_femelle?.toLowerCase() || "";

        return (
          nom.includes(searchTerm.toLowerCase()) ||
          nom_male.includes(searchTerm.toLowerCase()) ||
          nom_femelle.includes(searchTerm.toLowerCase())
        );
      });
      setFilteredAnimals(suggestions);
    }
  }, [searchTerm, animals]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionClick = (index: number) => {
    setCurrentAnimalIndex(index);
    setSearchTerm(""); // Réinitialise la barre de recherche
    setFilteredAnimals([]); // Cache les suggestions
  };

  const handleNext = () => {
    setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length);
  };

  const handlePrevious = () => {
    setCurrentAnimalIndex((prevIndex) =>
      prevIndex === 0 ? animals.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="encyclopedia">
      {/* Barre de recherche*/}
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un animal"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        {/* Liste des suggestions */}
        {filteredAnimals.length > 0 && (
          <ul className="suggestions-list">
            {filteredAnimals.map((animal) => (
              <li
                key={`${animal.nom}-${animal.nom_male}`}
                onClick={() => handleSuggestionClick(animals.indexOf(animal))}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSuggestionClick(animals.indexOf(animal));
                  }
                }}
                className="suggestion-item" // rendre l'élément focusable
              >
                {animal.nom_male || animal.nom}
              </li>
            ))}
          </ul>
        )}
      </div>

      {animals.length > 0 && (
        <div className="encyclopedia-content">
          <button
            type="button"
            onClick={handlePrevious}
            className="navigation-button"
          >
            Précédent
          </button>
          <Animals_card
            animal={animals[currentAnimalIndex]}
            setSelectedChar={() => {}}
          />
          <button
            type="button"
            onClick={handleNext}
            className="navigation-button"
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}

export default EncyclopediaPage;
