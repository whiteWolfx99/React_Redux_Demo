import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer  from "./iceCream/iceCreamReducer";
import MilkshakeReducer from "./Milkshake/MilkshakeReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    milkshake: MilkshakeReducer
})

export default rootReducer; 