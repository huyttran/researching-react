import * as types from '../constants/index'

const initalState = '';
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SET_KEY_WORD:
            return action.keyWord;
        default: return state;
    }
}

export default reducer;