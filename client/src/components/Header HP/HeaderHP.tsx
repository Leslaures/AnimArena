import "./HeaderHP.css";
import logo from "../../assets/images/animarena.png";

function HeaderHP() {
  return (
    <header id="headerHP">
      <figure id="logoImgContainerHP">
        <img src={logo} alt="logo AnimArena" />
      </figure>
    </header>
  );
}

export default HeaderHP;
