import { useState } from "react";
import "./App.css";
import cite from "./quotes.json";
import QuoteBox from "./components/QuoteBox";
import ButtonRamdon from "./components/ButtonRamdon";

function App() {
  const color = [
    "#D7BDE2 ",
    "#AED6F1",
    "#F7DC6F",
    "#717D7E",
    "#9A7D0A",
    "#7B241C",
    "#D35400",
    "#1B2631",
    "#1D8348",
    "#0E6655",
  ];
  const numberRandomCite = Math.floor(Math.random() * cite.length);
  const numberRandomColor = Math.floor(Math.random() * color.length);
  const [count, setCount] = useState(numberRandomCite);
  const [countColor, setCountColor] = useState(numberRandomColor);

  function randomCite() {
    setCount(Math.floor(Math.random() * cite.length));
    randomColor();
  }
  function randomColor() {
    setCountColor(Math.floor(Math.random() * color.length));
  }

  return (
    <div className="App" style={{ backgroundColor: color[countColor] }}>
      <article style={{ color: color[countColor] }}>
        <div className="cite">
          <QuoteBox cite={cite[count].quote} />
        </div>
        <div className="buttonAndAuthor">
          <ButtonRamdon
            color={color[countColor]}
            random={randomCite}
            name={cite[count].author}
          />
        </div>
      </article>
    </div>
  );
}

export default App;
