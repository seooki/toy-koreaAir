import { useEffect, useState } from "react";
import Map from "./components/Map";
import getData from "./services/getData";
import "./styles/reset.css";
import { styled } from "styled-components";
import City from "./components/City";
import { useRef } from "react";

function App() {
  const Board = styled.div``;
  const isMounted = useRef();

  const onchangeCity = (param) => {
    isMounted.current = param;
    setCity(isMounted.current);
  };

  return (
    <Board>
      <Map></Map>
      <City onchangeCity={onchangeCity}></City>
    </Board>
  );
}

export default App;
