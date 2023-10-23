import Map from "./components/Map";
import "./styles/reset.css";
import { styled } from "styled-components";
import City from "./components/City";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const Board = styled.div``;
  const [city, setCity] = useState();

  const selectCity = (param) => {
    setCity(param);
  };

  return (
    <Board>
      <Map city={city}></Map>
      <City selectCity={selectCity}></City>
    </Board>
  );
}

export default App;
