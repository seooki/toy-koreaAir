import { useEffect, useState } from "react";
import Map from "./components/Map";
import getData from "./services/getData";
import "./styles/reset.css";
import SelectSido from "./components/SelectSido";
import { styled } from "styled-components";
function App() {
  const Board = styled.div``;

  const [data, setData] = useState([]);

  const propsData = (props) => {
    return props;
  };

  return (
    <Board>
      <Map></Map>
      <SelectSido propsData={propsData}></SelectSido>
    </Board>
  );
}

export default App;
