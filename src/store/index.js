import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {cardsReducer} from "./reducers/cardsReducer";
import {objectsReducer} from "./reducers/objectsReducer";
import {areasReducer} from "./reducers/areasReducer";
import {teachersReducer} from "./reducers/teachersReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    cards: cardsReducer,
    customers: objectsReducer,
    areas: areasReducer,
    teachers: teachersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));