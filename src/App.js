import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [bombsArray, setBombsArray] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const magic = [];
    while (magic.length < 10) {
      const temp = Math.floor(Math.random() * 100 + 1);
      if (!magic.includes(temp)) {
        magic.push(temp);
      }
    }
    setBombsArray(magic);
  }, [flag]);
  const arr = [];
  for (let i = 1; i < 101; i++) arr.push(i);
  const [clicked, setClicked] = useState([]);
  const [result, setResult] = useState("");
  const clickHandle = (i) => {
    if (result === "") {
      if (bombsArray.includes(i)) {
        setResult("you lost the game");
      } else {
        setClicked([...clicked, i]);
        if (clicked.length === 90) {
          setResult("you won the game");
        }
      }
    }
  };
  return (
    <div className="App">
      <h1>Bomberman</h1>
      <p>
        To win the game, click all the boxes <b>EXCEPT</b> the 10 boxes which
        contain bombs.
      </p>
      <div className="board">
        {arr.map((i) => {
          if (clicked.includes(i)) {
            return <div className="cell checked" key={i}></div>;
          } else if (bombsArray.includes(i) && result === "you lost the game") {
            return <div className="cell bombed" key={i}></div>;
          } else {
            return (
              <div
                className="cell"
                key={i}
                onClick={() => clickHandle(i)}
              ></div>
            );
          }
        })}
      </div>
      <h3>{result}</h3>
      <h3>Score: {clicked.length}</h3>
      {clicked.length > 0 ? (
        <button
          onClick={() => {
            setBombsArray([]);
            setClicked([]);
            setResult("");
            setFlag(!flag);
          }}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
