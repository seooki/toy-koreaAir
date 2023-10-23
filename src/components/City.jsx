import { useEffect, useState, useRef } from "react";
import React from "react";
import sidoArr from "../assets/sidoArr";
import { styled } from "styled-components";

function City(props) {
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

  const onclickCity = (e) => {
    props.selectCity(e.target.innerHTML);
  };

  return (
    <SidoBoard>
      {sidoArr.map((item, index) => (
        <SidoList onClick={onclickCity} key={index} value={item}>
          {item}
        </SidoList>
      ))}
    </SidoBoard>
  );
}

export default City;
