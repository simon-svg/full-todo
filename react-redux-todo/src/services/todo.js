import request from '../utils/request';

const todo = {
    createTodo(data) {
        return request('POST', 'todos', data);
    },
    getTodos() {
        return request('GET', 'todos');
    },
    deleteTodos(id) {
        return request('DELETE', `todos/${id}`);
    }
}

export default todo;