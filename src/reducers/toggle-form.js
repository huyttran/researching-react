import * as types from '../constants/index'

const initalState = false;
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default: return state;
    }
}

export default reducer;