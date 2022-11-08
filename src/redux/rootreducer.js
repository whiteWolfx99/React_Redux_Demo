import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer  from "./iceCream/iceCreamReducer";
import MilkshakeReducer from "./Milkshake/MilkshakeReducer";
import UserReducer from "./user/UserReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    milkshake: MilkshakeReducer,
    user: UserReducer
})

export default rootReducer; 