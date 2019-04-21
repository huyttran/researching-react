import * as types from '../constants/index'

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const isTasksAvaliable = localStorage && localStorage.getItem('tasks');
const initalState = isTasksAvaliable ? JSON.parse(localStorage.getItem('tasks')) : []

const reducer = (state = initalState, action) => {
    let index = null;
    let newTask = null;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            if (action.task.id) {
                index = findIndex(state, action.task.id);
                state[index] = action.task;
            } else {
                newTask = {
                    id: generateID(),
                    name: action.task.name,
                    status: action.task.status
                };
                state.push(newTask);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.CREATE_TASK:
            newTask = {
                id: generateID(),
                name: action.task.name,
                status: action.task.status
            };
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_TASK:
            index = findIndex(state, action.task.id);
            state[index] = action.task;
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            index = findIndex(state, action.id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.DELETE_TASK:
            const taskIndex = findIndex(state, action.id);
            if (taskIndex !== -1) {
                state.splice(taskIndex, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];

        default: return state
    }
}

const findIndex = (tasks, id) => {
    let result = - 1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}


export default reducer;

