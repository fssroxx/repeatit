import {GET_TEACHERS, GET_TEACHERS_CARDS} from "../actions/types";

const initialState = {
  teachers:[],
    teachersCards:[],
};


export const teachersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TEACHERS:
            return { ...state, teachers: [...action.payload] }
        case GET_TEACHERS_CARDS:
            return { ...state, teachersCards: [...action.payload] }
        default:
            return state
    }
}


