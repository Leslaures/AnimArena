// import Header from "../components/Header/Header";
// import Pseudo from "../components/Pseudo/Pseudo";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function Home_page() {
//   const [pseudo, setPseudo] = useState("");

//   return (
//     <>
//       <Header />
//       <div>
//       <Pseudo pseudo={pseudo} setPseudo={setPseudo} />

//       {pseudo ? (
//         <nav>
//           <Link to="/game" className="Game_button">
//             Jouer
//           </Link>
//         </nav>
//       ) : (
//         ""
//       )}
//     </div>
//     </>
//   );
// }

// export default Home_page;

import { Link, useOutletContext } from "react-router-dom";
import Header from "../components/Header/Header";
import Pseudo from "../components/Pseudo/Pseudo";

function Home_page() {
  const { pseudo, setPseudo } = useOutletContext<{ pseudo: string; setPseudo: (value: string) => void }>();

  return (
    <>
      <Header />
      <div>
        <Pseudo pseudo={pseudo} setPseudo={setPseudo} />

        {pseudo ? (
          <nav>
            <Link to="/game" className="Game_button">
              Jouer
            </Link>
          </nav>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home_page;
