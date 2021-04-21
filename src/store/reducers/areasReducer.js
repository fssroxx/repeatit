import {GET_AREAS, GET_AREA_ID, GET_DISTRICTS, GET_DISTRICT_ID} from "../actions/types";


const initialState = {
    areas: [],
    areaId:'',
    districts:[],
    districtId:''
};


export const areasReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_AREAS:
            return { ...state, areas: [ ...action.payload] }
        case GET_AREA_ID:
            return { ...state, areaId: action.payload }
        case GET_DISTRICTS:
            return { ...state, districts: [...action.payload] }
        case GET_DISTRICT_ID:
            return { ...state, districtId: action.payload }
        default:
            return state
    }
}
