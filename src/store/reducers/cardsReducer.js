import {SHOW_MORE_CARDS} from "../actions/types";


const initialState = {
    showCards: 10
};


export const cardsReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_MORE_CARDS:
            return {...state, showCards: state.showCards + action.payload }
        default:
            return state
    }
}