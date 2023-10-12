function getGeocode(address) {
  const { naver } = window;

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
        console.log(items);
        // do Something
      }
    );
  });
}

export default getGeocode;
