import { BUY_MILKSHAKE } from "./MilkshakeType";

const initialState = {
    numOfMilkshakes: 50
}

const MilkshakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_MILKSHAKE: return {
            ...state,
            numOfMilkshakes: state.numOfMilkshakes - 1
        }
        default: return state
    }
}

export default MilkshakeReducer