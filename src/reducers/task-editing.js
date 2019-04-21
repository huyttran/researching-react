import * as types from '../constants/index'

const initalState = null;
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SET_TASK_EDITING_DATA:
            state = action.task;
            return { ...state };
        case types.CLEAR_TASK_EDITING_DATA:
            return null;
        default: return state;
    }
}

export default reducer;