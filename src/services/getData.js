import axios from "axios";

async function getData(sidoName) {
  const sido = sidoName;
  const url =
    "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
  let queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    process.env.REACT_APP_API_KEY;
  queryParams +=
    "&" + encodeURIComponent("returnType") + "=" + encodeURIComponent("json");
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("100"); /**/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" + encodeURIComponent("sidoName") + "=" + encodeURIComponent(sido); /**/

  const response = await axios(url + queryParams);
  const result = response.data;
  return result;
}

export default getData;
