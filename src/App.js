import React, { useState } from "react";
import "./App.css";

function App() {
  const [tank, setTank] = useState("");
  const [km, setKm] = useState("");
  const [result, setResult] = useState("");

  function consumed(e) {
    e.preventDefault();

    let contador = 0;
    const calc = km / tank;

    const countdown = setInterval(function () {
      setResult(contador);

      if (contador >= 100) {
        clearInterval(countdown);
        return setResult(calc.toFixed(1));
      }
      contador++;
    }, 20);
  }
  return (
    <div className="App">
      <div className="content">
        <h1>Medidor de consumo de combustivel por km rodado</h1>
        <p>AV1 Desenvolvimento Web por Jefferson brito</p>
        <div className="display">
          <div className="result">{result}</div>
          <div className="pointer"></div>
        </div>
        <form>
          <input
            placeholder="Combustivel no tanque que irá ser usada na viagem"
            required
            type="number"
            value={tank}
            onChange={(e) => setTank(e.target.value)}
          ></input>
          <input
            placeholder="KM percorrido na viagem"
            required
            type="number"
            value={km}
            onChange={(e) => setKm(e.target.value)}
          ></input>

          <button type="submit" onClick={consumed}>
            verificar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
