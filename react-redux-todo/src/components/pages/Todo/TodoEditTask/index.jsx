import { useDispatch, useSelector } from 'react-redux';

// Actions
import { editTodoValue, changeTodoValue } from '../../../../store/todo/todo.action';

// Common
import FormButton from '../../../common/buttons/FormButton';

// Styles
import styles from './todoEditTask.module.scss';


const TodoEditTask = () => {
    const dispatch = useDispatch();
    const editedValue = useSelector((state) => state.todo.editInp)

    const handleInpChange = (e) => {
        dispatch(editTodoValue({...editedValue, value: e.target.value}))
    }

    const hundleEditSubmit = (e) => {
        e.preventDefault();

        dispatch(changeTodoValue(editedValue))
    }

    return (
        <form className={styles.task__form} onSubmit={hundleEditSubmit}>
            <input className={styles.input__add} value={editedValue.value} onChange={handleInpChange} type="text" placeholder='edit task' />
            <FormButton value="edit" />
        </form>
    )
}

export default TodoEditTask;