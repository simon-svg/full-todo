import { useDispatch } from "react-redux";

// Actions
import { fetchDone, fetchDeleteTodo, editTodoValue } from '../../../../../store/todo/todo.action';

// Commons
import IconButton from "../../../../common/buttons/IconButton";

// Styles
import styles from './todoItem.module.scss';

const ListItem = ({ id, done, value }) => {
    const dispatch = useDispatch();

    const handleDone = () => {
        dispatch(fetchDone(id))
    }

    const handleDelete = () => {
        dispatch(fetchDeleteTodo(id))
    }

    const handleEditValue = () => {
        dispatch(editTodoValue({ id, value }));
    }

    return (
        <li className={styles.item}>
            <span className={styles.task__name} onClick={handleDone} style={{ textDecoration: done ? 'line-through' : 'none' }} >
                {value}
            </span>

            <div className={styles.icons__group}>
                <IconButton onClick={handleDelete}>
                    <i className="fas fa-times"></i>
                </IconButton>
                <IconButton onClick={handleEditValue}>
                    <i className="fas fa-pen"></i>
                </IconButton>
            </div>
        </li>
    )
}

export default ListItem;