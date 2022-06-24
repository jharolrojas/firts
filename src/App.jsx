import { useState } from "react";
import "./App.css";
import users from "./quotes.json";
import Card from "./components/Card";
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
  const numberRandom = Math.floor(Math.random() * users.length);
  const [count, setCount] = useState(numberRandom);
  const [countColor, setCountColor] = useState(numberRandom);

  function random() {
    setCount(Math.floor(Math.random() * users.length));
    randomColor();
  }
  function randomColor() {
    setCountColor(Math.floor(Math.random() * color.length));
  }

  return (
    <div className="App" style={{ backgroundColor: color[countColor] }}>
      <article style={{ color: color[countColor] }}>
        <Card
          title={users[count].name.title}
          name={users[count].name.first}
          firts={users[count].name.last}
          direction={
            users[count].location.country +
            " " +
            users[count].location.city +
            " " +
            users[count].location.state
          }
          phone={users[count].cell}
          email={users[count].email}
          color={color[count]}
          img={users[count].picture.large}
        />
        <ButtonRamdon color={color[countColor]} random={random} />
      </article>
    </div>
  );
}

export default App;
