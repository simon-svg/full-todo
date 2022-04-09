import { ADD_TODO, DONE_TODO, DELETE_TODO, EDIT_TODO_VALUE, CHANGE_TODO_VALUE } from './todo.actionTypes';

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

// export const fetchTodos = () => async (dispatch) => {
//     try {
//     } catch (e) {
//         console.log(e);
//     }
// }