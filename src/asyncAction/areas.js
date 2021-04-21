import {getAreasAction, getDistrictsAction} from "../store/actions/actionCreators";


export const fetchAreas = () => {
    return function (dispatch) {
        fetch('https://api.repetit.ru/public/areas')
            .then(response => response.json())
            .then(json => dispatch(getAreasAction(json)))
    }
}

export const fetchAreaId = (areaId) => {
    return function (dispatch) {

        fetch(`https://api.repetit.ru/public/districts?AreaId=${areaId}`, {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(getDistrictsAction(json)));
    }
}


