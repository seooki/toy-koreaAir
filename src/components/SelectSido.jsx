import { useEffect, useState } from "react";
import sidoArr from "../assets/sidoArr";
import { styled } from "styled-components";
import getData from "../services/getData";

function SelectSido(props) {
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

  const sido = sidoArr;

  const [selectSido, setSelectSido] = useState(null);
  const [sidoData, setSidoData] = useState([]);

  const createSelectSido = (e) => {
    setSelectSido(e.target.innerHTML);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getData(selectSido);
      setSidoData(data);
    }
    fetchData();
  }, [selectSido]);

  useEffect(() => {
    props.propsData(sidoData);
  });

  return (
    <SidoBoard>
      {sido.map((item, index) => (
        <SidoList onClick={createSelectSido} key={index} value={item}>
          {item}
        </SidoList>
      ))}
    </SidoBoard>
  );
}

export default SelectSido;
