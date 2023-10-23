import { useRef } from "react";
import { useEffect } from "react";
import { styled } from "styled-components";

function Map(props) {
  const isMounted = useRef(true);

  const Map = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
  `;

  const { naver } = window;

  useEffect(() => {
    if (props === undefined) {
      console.log(undefined);
    } else {
      console.log(props);
    }
  }, [props]);

  useEffect(() => {
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 8,
    };

    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 8,
    });
  }, []);

  return <Map id="map"></Map>;
}

export default Map;
