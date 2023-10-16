import { useEffect, useState } from "react";
import Map from "./components/Map";
import getData from "./services/getData";
import "./styles/reset.css";
import { styled } from "styled-components";
import City from "./components/City";

function App() {
  const Board = styled.div``;
  const [city, setCity] = useState();
  const [totalCount, setTotalCount] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData("전국");
      setTotalCount(data.response.body.totalCount);
    }
    fetchData();
  }, []);

  const onchangeCity = (param) => {
    setCity(param);
  };

  return (
    <Board>
      <Map></Map>
      <City onchangeCity={onchangeCity}></City>
    </Board>
  );
}

export default App;
