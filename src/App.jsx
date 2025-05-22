import { useState } from "react";
import Page from "./components/Page";
import { MovieContext, ThemeContext } from "./context";

export default function App() {
  const [cards, setCards] = useState([]);
  const [dark, setDark] = useState(true);
  return (
    <MovieContext.Provider value={{ cards, setCards }}>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <Page />
      </ThemeContext.Provider>
    </MovieContext.Provider>
  );
}
