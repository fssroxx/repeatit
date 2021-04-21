import {ADD_CUSTOMER, FORM_SUBJECT_ID, SHOW_OBJECTS, REMOVE_CUSTOMER} from "../actions/types";

const initialState = {
    customers: [],
    subjectId:''
};


export const objectsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload] }
        case FORM_SUBJECT_ID:
            return {...state, subjectId: action.payload }
        case SHOW_OBJECTS:
            return {...state, customers: [ ...action.payload]}
        case REMOVE_CUSTOMER:
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state
    }
}

