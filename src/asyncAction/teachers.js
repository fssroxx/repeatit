import {
  getTeachersAction,
  getTeachersCardsAction,
} from "../store/actions/actionCreators";

export const fetchTeachers = (areaId, districtId, subjectId) => {
  return function (dispatch) {
    fetch(
      `http://api.repetit.ru/public/search/teacherIds?AreaId=${areaId}&DistrictId=${districtId}&SubjectId=${subjectId}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => dispatch(getTeachersAction(json)))
      .catch((e) => console.error(e));
  };
};

export const fetchTeachersCards = (areaId, districtId, subjectId) => {
  return async function (dispatch) {
    try {
      const teachersId = await makeRequest(
        `http://api.repetit.ru/public/search/teacherIds?AreaId=${areaId}&DistrictId=${districtId}&SubjectId=${subjectId}`,
        {
          method: "GET",
        }
      );

      const ids = teachersId
        .map((teacher, i) => `Ids[${i}]=${teacher}`)
        .join("&");

      const cards = await makeRequest(
        `http://api.repetit.ru/public/teachers/short?${ids}`,
        {
          method: "GET",
        }
      );

      dispatch(getTeachersCardsAction(cards));
    } catch (e) {
      console.error(e);
    }
  };
};

const headers = {
  "Cache-Control": "no-cache no-store, max-age=0",
  Pragma: "no-cache",
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};

export async function makeRequest(url, options) {
  try {
    const response = await fetch(url, { headers, ...options });

    return await response.json();
  } catch (e) {
    console.warn(e.toString());

    throw e;
  }
}
