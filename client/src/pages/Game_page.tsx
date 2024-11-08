import Game_zone from "../components/Game_zone/Game_zone";
import Header from "../components/Header/Header";

function Game_page() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Game_zone />
      </main>
    </>
  );
}

export default Game_page;
