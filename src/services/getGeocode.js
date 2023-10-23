async function getGeocode(address) {
  const { naver } = window;
  let geocode = [];

  address.map((item) => {
    naver.maps.Service.geocode(
      {
        query: item,
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert("Something wrong!");
        }

        var result = response.v2, // 검색 결과의 컨테이너
          items = result.addresses; // 검색 결과의 배열

        if (items[0] != undefined) {
          geocode.push(items[0]);
        }
        // do Something
      }
    );
  });

  return geocode;
}

export default getGeocode;
