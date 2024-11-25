import "./Winner_modal.css";

interface Winner_modalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Winner_modal: React.FC<Winner_modalProps> = ({
  show,
  onClose,
  children,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button type="button" className="modal-closeBtn" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Winner_modal;
