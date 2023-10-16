import { useEffect, useState } from "react";
import sidoArr from "../assets/sidoArr";
import { styled } from "styled-components";
import getData from "../services/getData";

function City(props) {
  const [city, setCity] = useState();

  const SidoBoard = styled.ul`
    position: absolute;
    left: 0;
    top: 0;
  `;

  const SidoList = styled.li`
    width: 100px;
    height: 10px;
    border-radius: 14px;
    text-align: center;
    box-shadow: 1px 1px 5px gray;
    padding: 10px;
    margin: 5px;
    background-color: white;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  `;

  const selectCity = (e) => {
    setCity(e.target.innerHTML);
  };

  useEffect(() => {
    props.onchangeCity(city);
  }, [city]);

  return (
    <SidoBoard>
      {sidoArr.map((item, index) => (
        <SidoList onClick={selectCity} key={index} value={item}>
          {item}
        </SidoList>
      ))}
    </SidoBoard>
  );
}

export default City;
