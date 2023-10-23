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
  const cities = useRef();

  const selectCity = (param) => {
    const city = param;
    cities.current = city;
  };

  return (
    <ThemeContext.Provider>
      <Board>
        <Map cities={cities}></Map>
        <City selectCity={selectCity}></City>
      </Board>
    </ThemeContext.Provider>
  );
}

export default App;
