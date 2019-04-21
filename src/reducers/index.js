import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './toggle-form';
import taskEditing from './task-editing';
import keyWord from './search';
import sortOptions from './sort';
const myReducers = combineReducers({
    tasks,
    isDisplayForm,
    taskEditing,
    keyWord,
    sortOptions
});

export default myReducers;