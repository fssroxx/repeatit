import {showObjectsAction} from "../store/actions/actionCreators";


export const fetchObjects = () => {
    return function (dispatch) {
        fetch('https://api.repetit.ru/public/subjects')
            .then(response => response.json())
            .then(json => dispatch(showObjectsAction(json)))
    }
}


