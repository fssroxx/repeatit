import {FORM_SUBJECT_ID, SHOW_SUBJECTS, FORM_SUBJECT_NAME} from "../actions/types";

const initialState = {
    subjects: [],
    subjectId:'',
    subjectName:''
};


export const subjectsReducer = (state = initialState, action) => {
    switch(action.type){
        case FORM_SUBJECT_ID:
            return {...state, subjectId: action.payload }
        case FORM_SUBJECT_NAME:
            return {...state, subjectName: action.payload }
        case SHOW_SUBJECTS:
            return {...state, subjects: [ ...action.payload]}
        default:
            return state
    }
}

