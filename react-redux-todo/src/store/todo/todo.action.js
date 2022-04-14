import todo from '../../services/todo';
import { ADD_TODO, DONE_TODO, DELETE_TODO, EDIT_TODO_VALUE, CHANGE_TODO_VALUE, IS_LOADING, GET_TODO } from './todo.actionTypes';

export const getTodos = (todos) => {
    return {
        type: GET_TODO,
        payload: todos,
    }
}
export const addTodo = (todoItem) => {
    return {
        type: ADD_TODO,
        payload: todoItem,
    }
}
export const doneTodo = (id) => {
    return {
        type: DONE_TODO,
        payload: id,
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}
export const editTodoValue = (todoItem) => {
    return {
        type: EDIT_TODO_VALUE,
        payload: todoItem,
    }
}
export const changeTodoValue = (todoItem) => {
    return {
        type: CHANGE_TODO_VALUE,
        payload: todoItem
    }
}
export const isLoading = (loading) => {
    return {
        type: IS_LOADING,
        payload: loading,
    }
}






// Thunk
export const fetchTodos = () => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        const response = await todo.getTodos();
        dispatch(getTodos(response.data));
        dispatch(isLoading(false));
    } catch (e) {
        console.log(e);
    }
}
export const fetchAddTodos = (data) => async (dispatch) => {
    try {
        const response = await todo.createTodo(data);
        dispatch(addTodo(response.data));
    } catch (e) {
        console.log(e);
    }
}
export const fetchDeleteTodo = (id) => async (dispatch) => {
    try {
        const response = await todo.deleteTodo(id);
        if (response.data.message === 'success') {
            dispatch(deleteTodo(id));
        } else {
            return false;
        }
    }
    catch (e) {
        console.log(e);
    }
}
export const fetchDone = (id) => async (dispatch) => {
    try {
        const response = await todo.doneTodo(id);
        dispatch(doneTodo(response.data.id));
    }
    catch (e) {
        console.log(e);
    }
}
export const fetchEdit = (data) => async (dispatch) => {
    try {
        const response = await todo.editTodo(data);
    }
    catch (e) {
        console.log(e);
    }
}