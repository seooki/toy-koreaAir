import { useRef, useState } from "react";
import { useEffect } from "react";
import { styled } from "styled-components";
import getData from "../services/getData";
import getGeocode from "../services/getGeocode";

function Map(props) {
  const Map = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
  `;

  const { naver } = window;
  const [data, setData] = useState([]);
  const [station, setStation] = useState([]);
  const [geocode, setGeocode] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (props.city != undefined) {
        getData(props.city).then((res) => setData(res.response.body.items));
      }
    }
    fetchData();
  }, [props]);

  useEffect(() => {
    setStation(
      data.map((item) => {
        return [item.stationName];
      })
    );
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(station);
    async function fetchData() {
      getGeocode(station).then((item) => {
        console.log(item);
      });
    }
    fetchData();
  }, [station]);

  useEffect(() => {
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 8,
    };

    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 8,
    });
  });

  return <Map id="map"></Map>;
}

export default Map;
