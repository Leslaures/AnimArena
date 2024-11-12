import Home_display from "../components/Home_display/Home_display.tsx";
import Header from "../components/Header/Header";

function Home_page() {
  return (
    <>
      <Header />
      <main>
        <Home_display />
      </main>
    </>
  );
}

export default Home_page;
