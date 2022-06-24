import { useState } from "react";
import "./App.css";
import users from "./users.json";
import Card from "./components/Card";
import ButtonRamdon from "./components/ButtonRamdon";

function App() {
  const [count, setCount] = useState(0);
  let min = 0;
  let max = users.length;
  function random() {
    setCount(Math.floor(Math.random() * (max - min) + min));
  }
//utilice el mismo contador para el array de colores 
//ya que el json es pequeño y no era tanto trabajo poner un color por usuario
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

  return (
    <div className="App" style={{ backgroundColor: color[count] }}>
      <article style={{ color: color[count] }}>
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
        <ButtonRamdon color={color[count]} random={random} />
      </article>
    </div>
  );
}

export default App;
