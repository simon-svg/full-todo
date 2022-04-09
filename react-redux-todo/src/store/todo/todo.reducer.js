import { ADD_TODO, DONE_TODO, DELETE_TODO, EDIT_TODO_VALUE, CHANGE_TODO_VALUE, GET_TODOS } from "./todo.actionTypes";

const initialState = {
    todoList: [],
    editInp: {
        id: 0,
        value: '',
    }
}


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [action.payload, ...state.todoList]
            }
        case DONE_TODO:
            const newTodoList = state.todoList.map((todoItem) => {
                return {
                    ...todoItem,
                    completed: todoItem.id === action.payload ? !todoItem.completed : todoItem.completed
                };
            });
            return {
                ...state,
                todoList: newTodoList,
            };
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== action.payload)
            }
        case EDIT_TODO_VALUE:
            return {
                ...state,
                editInp: {id: action.payload.id, value: action.payload.value}
            }
        case CHANGE_TODO_VALUE:
            return {
                ...state,
                todoList: state.todoList.map((item) => item.id == action.payload.id ? state.editInp : item),
                editInp: { id: 0, value: '' },          
              };
        // case GET_TODOS:
        //       return {
        //           ...state,
        //           todoList: [...action.payload.todoList, ...state.todoList]
        //       };
        default:
            return state
    }
}

export default todoReducer;