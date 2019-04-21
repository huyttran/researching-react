import * as types from '../constants/index'

const initalState = {
    sortBy: 'name',
    sortValue: 1
};
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SET_SORT_OPTIONS:
            // TODO: This is a same. So, are there the different betweent that?
            // state = {
            //     ...state,
            //     sortBy: action.options.sortBy,
            //     sortValue: action.options.sortValue,
            // }
            // state = action.options;
            return action.options;
        default: return state;
    }
}

export default reducer;