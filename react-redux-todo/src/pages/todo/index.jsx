import React from 'react';

// Components
import TodoHead from '../../components/pages/Todo/TodoHead';
import TodoAddTask from '../../components/pages/Todo/TodoAddTask';
import TodoEditTask from '../../components/pages/Todo/TodoEditTask';
import TodoList from '../../components/pages/Todo/TodoList';

// Styles
import styles from './todo.module.scss';

const Todo = () => {
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