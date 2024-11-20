import Selected_characteristic from "../Selected_characteristic/Selected_characteristic";
import "./Header.css";

function Header({ selectedChar }: { selectedChar: string }) {
  return (
    <header>
      <figure id="logoImgContainer">
        <img src="../src/assets/images/animarena.png" alt="logo AnimArena" />
      </figure>
      <Selected_characteristic selectedChar={selectedChar} />
    </header>
  );
}

export default Header;
