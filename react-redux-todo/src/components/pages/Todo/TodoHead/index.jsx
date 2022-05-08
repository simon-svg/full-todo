// Commons
import IconButton from '../../../common/buttons/IconButton';

// Styles
import styles from './todoHead.module.scss'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchTodos, fetchDeletedTodos} from "../../../../store/todo/todo.action";

const TodoHead = () => {
    const dispatch = useDispatch();

    const handleDeletedTodos = () => {
        dispatch(fetchDeletedTodos());
    }
    const handleTodos = () => {
        dispatch(fetchTodos());
    }

    return (
        <>
            <div className={styles.app__title}>
                <h1 className={styles.title}>TODOLIST</h1>
                <div className={styles.todo__btns}>
                    <div className={styles.app_todo}>
                        <IconButton onClick={handleTodos}>
                            <i className="fas fa-clipboard-list"></i>
                        </IconButton>
                    </div>
                    <div className={styles.app_trash}>
                        <IconButton onClick={handleDeletedTodos}>
                            <i className="fas fa-trash"></i>
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoHead;