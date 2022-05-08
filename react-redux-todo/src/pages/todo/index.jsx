import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { fetchTodos } from '../../store/todo/todo.action';

// Components
import TodoHead from '../../components/pages/Todo/TodoHead';
import TodoAddTask from '../../components/pages/Todo/TodoAddTask';
import TodoEditTask from '../../components/pages/Todo/TodoEditTask';
import TodoList from '../../components/pages/Todo/TodoList';

// Styles
import styles from './todo.module.scss';

const Todo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
        console.log('baa');
    }, [])

    return (
        <div className={styles.todo}>
            <TodoHead />
            <TodoAddTask />
            <TodoEditTask />
            <TodoList />
        </div>
    )
}

export default Todo;