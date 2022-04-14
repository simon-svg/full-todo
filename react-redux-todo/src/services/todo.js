import request from '../utils/request';

const todo = {
    createTodo(data) {
        return request('POST', 'todos', data);
    },
    getTodos() {
        return request('GET', 'todos');
    },
    deleteTodo(id) {
        return request('DELETE', `todos/${id}`);
    },
    doneTodo(id) {
        return request('PUT', `todos/${id}`);
    },
    editTodo(data){
        return request('PUT', `todos/${data.id}`, data);
    }
}

export default todo;