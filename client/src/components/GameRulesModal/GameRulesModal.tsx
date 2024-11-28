import { useState } from "react";
import Modal from "react-modal";
import "./GameRulesModal.css";
import { useLocation } from "react-router-dom";

function GameRulesModal() {
  const location = useLocation();
  const buttonClassName =
    location.pathname === "/"
      ? "game-rules-button-home"
      : "game-rules-button-game";

  const [isModalOpen, setModalOpen] = useState(false);

  // Fonction pour ouvrir et fermer la modale
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {/* Bouton pour ouvrir la modale */}
      <button type="button" onClick={openModal} className={buttonClassName}>
        Règles du jeu
      </button>

      {/* Modale utilisant `react-modal` */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Règles du Jeu"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button type="button" onClick={closeModal} className="close-button">
          X
        </button>
        <h2>Règles du Jeu</h2>
        <p>Bienvenue dans Animarena. Voici les règles de base...</p>
      </Modal>
    </div>
  );
}

export default GameRulesModal;
