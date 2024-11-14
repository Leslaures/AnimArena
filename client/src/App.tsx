// import { useState } from "react";
// import "./App.css";
// import Home_page from "./pages/Home_page";


// function App() {
//   const [pseudo, setPseudo] = useState("");

//   return (
//     <div>
//       <Home_page />
//     </div>
//   )
// }

// export default App;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [pseudo, setPseudo] = useState("");

  return (
    <div>
      <Outlet context={{ pseudo, setPseudo }} />
    </div>
  );
}

export default App;
