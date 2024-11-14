import GameRulesModal from "../components/GameRulesModal/GameRulesModal";
import Header from "../components/Header/Header";

function Home_page() {
  return (
    <>
      <Header />
      <GameRulesModal position="bottom-position" />
    </>
  );
}

export default Home_page;
