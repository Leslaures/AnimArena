import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";

import Game_page from "./pages/Game_page";
import Home_page from "./pages/Home_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <main>
          <Home_page />
        </main>
        <App />
      </>
    ),
  },
  {
    path: "/Jeux",
    element: (
      <>
        <main>
          <Game_page />
        </main>
      </>
    ),
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
