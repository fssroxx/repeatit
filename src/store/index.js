import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {cardsReducer} from "./reducers/cardsReducer";
import {subjectsReducer} from "./reducers/subjectsReducer";
import {areasReducer} from "./reducers/areasReducer";
import {teachersReducer} from "./reducers/teachersReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    cards: cardsReducer,
    subjects: subjectsReducer,
    areas: areasReducer,
    teachers: teachersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));