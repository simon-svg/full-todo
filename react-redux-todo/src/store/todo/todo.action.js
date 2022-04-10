import axiosAPI from '../../utils/request';
import { ADD_TODO, DONE_TODO, DELETE_TODO, EDIT_TODO_VALUE, CHANGE_TODO_VALUE, IS_LOADING, GET_TODO } from './todo.actionTypes';

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
export const getTodos = (todos) => {
    return {
        type: GET_TODO,
        payload: todos,
    }
}
export const fetchTodos = () => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        const response = await axiosAPI.get('todos');
        dispatch(getTodos(response.data));
        dispatch(isLoading(false));
    } catch (e) {
        console.log(e);
    }
}