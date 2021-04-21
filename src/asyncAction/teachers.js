import {getTeachersAction, getTeachersCardsAction} from "../store/actions/actionCreators";


export const fetchTeachers = (areaId, districtId, subjectId) => {
    return async function (dispatch) {

        await fetch(`http://api.repetit.ru/public/search/teacherIds?AreaId=${areaId}&DistrictId=${districtId}&SubjectId=${subjectId}`, {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(getTeachersAction(json)));
    }
}

export const fetchTeachersCards = (ids) => {
    return async function (dispatch) {
    // console.log(ids)
        await fetch(`http://api.repetit.ru/public/teachers/short?${ids}`, {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(getTeachersCardsAction(json)));
    }
}

