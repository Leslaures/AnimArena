import { useEffect, useRef, useState } from "react";
import Animals_card from "../components/Animals_card/Animals_card";
import "./EncyclopediaPage.css";
import { useNavigate } from "react-router-dom";
import type { AnimalType } from "../pages/Game_page";
import type { SelectedCharType } from "../pages/Game_page";

const defaultSelectedChar: SelectedCharType = {
  label: "",
  value: 0,
  unit: "",
};

function EncyclopediaPage() {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState<AnimalType[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // Pour suivre la sélection
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]); // Refs pour les éléments de la liste
  const searchContainerRef = useRef<HTMLDivElement | null>(null); // Référence pour la barre de recherche et suggestions
  const navigate = useNavigate();

  // Récupère les données de l'API au chargement
  useEffect(() => {
    fetch("https://arenapi.creativebrain.fr/api/animalsLibrary")
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
    const lowerSearch = searchTerm.trim().toLowerCase();
    if (lowerSearch === "") {
      setFilteredAnimals([]);
      setHighlightedIndex(-1);
      return;
    }

    const suggestions = animals.filter(
      (animal) =>
        animal.nom?.toLowerCase().startsWith(lowerSearch) ||
        animal.nom_male?.toLowerCase().startsWith(lowerSearch) ||
        animal.nom_femelle?.toLowerCase().startsWith(lowerSearch),
    );

    setFilteredAnimals(suggestions);
    setHighlightedIndex(-1); // Réinitialiser la sélection
  }, [searchTerm, animals]);

  useEffect(() => {
    if (highlightedIndex >= 0 && itemRefs.current[highlightedIndex]) {
      itemRefs.current[highlightedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  // Fermer la liste de suggestions lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setFilteredAnimals([]); // Cache les suggestions
        setHighlightedIndex(-1); // Réinitialiser la sélection
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (filteredAnimals.length > 0 && filteredAnimals.length === 1) {
      const [suggestedAnimal] = filteredAnimals;
      if (
        suggestedAnimal.nom === searchTerm ||
        suggestedAnimal.nom_male === searchTerm ||
        suggestedAnimal.nom_femelle === searchTerm
      ) {
        setFilteredAnimals([]); // Masque les suggestions si un animal est trouvé
      }
    }
  }, [searchTerm, filteredAnimals]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredAnimals.length === 0) return;

    switch (event.key) {
      case "ArrowDown": // Flèche bas
        setHighlightedIndex((prevIndex) =>
          prevIndex < filteredAnimals.length - 1 ? prevIndex + 1 : 0,
        );
        event.preventDefault();
        break;
      case "ArrowUp": // Flèche haut
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredAnimals.length - 1,
        );
        event.preventDefault();
        break;
      case "Enter": // Entrée
        if (highlightedIndex >= 0) {
          handleSuggestionClick(filteredAnimals[highlightedIndex]);
          setFilteredAnimals([]); // Cache immédiatement les suggestions
          setHighlightedIndex(-1); // Réinitialise la sélection
        }
        break;
      default:
        break;
    }
  };

  const handleSuggestionClick = (animal: AnimalType) => {
    const index = animals.indexOf(animal);
    setSearchTerm(animal.nom_male || animal.nom || ""); // Remplit la barre de recherche avec l'animal sélectionné
    setCurrentAnimalIndex(index);
    setSearchTerm("");
    setFilteredAnimals([]); // Cache les suggestions
    setHighlightedIndex(-1); // Réinitialise la sélection
  };

  const handleNext = () => {
    setCurrentAnimalIndex((prevIndex) => (prevIndex + 1) % animals.length);
  };

  const handlePrevious = () => {
    setCurrentAnimalIndex((prevIndex) =>
      prevIndex === 0 ? animals.length - 1 : prevIndex - 1,
    );
  };

  const handleBackToGame = () => {
    navigate("/game");
  };

  return (
    <div className="encyclopedia">
      {/* Barre de recherche avec autocomplétion */}
      <div className="search-container" ref={searchContainerRef}>
        <input
          id="search-bar"
          type="text"
          placeholder="Rechercher un animal"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="search-bar"
          autoComplete="off"
          name="fake-name-for-autocomplete"
          aria-autocomplete="list"
          aria-controls="suggestions-list"
          aria-expanded={filteredAnimals.length > 0}
        />
        {/* Liste des suggestions */}
        {filteredAnimals.length > 0 && (
          <ul id="suggestions-list" className="suggestions-list">
            {filteredAnimals.map((animal, index) => (
              <li
                key={`${animal.nom || "unknown"}-${animal.nom_male || "unknown"}`}
                ref={(el) => {
                  if (!itemRefs.current) itemRefs.current = [];
                  itemRefs.current[index] = el;
                }} // Associe les refs
                className={`suggestion-item ${highlightedIndex === index ? "highlighted" : ""}`}
                onClick={() => handleSuggestionClick(animal)}
                onMouseEnter={() => setHighlightedIndex(index)}
                // Rend l'élément focusable au clavier
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSuggestionClick(animal);
                  }
                }}
              >
                {animal.nom_male || animal.nom}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bouton pour revenir à GamePage */}
      <button onClick={handleBackToGame} className="back-button" type="button">
        Retour à la page de jeu
      </button>

      {/* Affichage de la carte de l'animal sélectionné */}
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
            onValidateCharacteristic={() => {}}
            isP1={false}
            selectedChar={defaultSelectedChar}
            setIsP1Turn={() => {}}
            characteristicValidated={false}
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
