import { isLoading } from "./todo.action";
import { ADD_TODO, DONE_TODO, DELETE_TODO, EDIT_TODO_VALUE, CHANGE_TODO_VALUE, IS_LOADING, GET_TODO, GET_DELETED_TODO } from "./todo.actionTypes";

const initialState = {
    todoList: [],
    editInp: {
        id: 0,
        value: '',
    },
    isLoading: {
        loading: false,
    },
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
                    done: todoItem.id === action.payload ? !todoItem.done : todoItem.done
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
                editInp: { id: action.payload.id, value: action.payload.value }
            }
        case CHANGE_TODO_VALUE:
            return {
                ...state,
                todoList: state.todoList.map((item) => item.id == action.payload.id ? state.editInp : item),
                editInp: { id: 0, value: '' },
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: { ...isLoading,  loading: action.payload}
            }
        case GET_TODO:
            return {
                ...state,
                todoList: [...action.payload]
            };
        case GET_DELETED_TODO:
            return {
                ...state,
                todoList: [...action.payload]
            }
        default:
            return state
    }
}

export default todoReducer;