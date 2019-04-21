import * as types from '../constants/index'

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}
export const createTask = (task) => {
    return {
        type: types.CREATE_TASK,
        task
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
}

export const onDeleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const onUpdateTask = (task) => {
    return {
        type: types.UPDATE_TASK,
        task
    }
}

export const onSaveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
}

// ================================================ //
export const onToggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const onCloseForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const onOpenForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

// ================================================ //
export const onSetKeyWord = (keyWord) => {
    return {
        type: types.SET_KEY_WORD,
        keyWord
    }
}

// ================================================ //
export const onSetSortOptions = (options) => {
    return {
        type: types.SET_SORT_OPTIONS,
        options
    }
}

// ================================================ //
export const onSetTaskEditingData = (task) => {
    return {
        type: types.SET_TASK_EDITING_DATA,
        task
    }
}
export const onClearTaskEditingData = () => {
    return {
        type: types.CLEAR_TASK_EDITING_DATA
    }
}
