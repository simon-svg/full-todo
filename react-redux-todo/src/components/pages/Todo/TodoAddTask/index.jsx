import { useState } from "react";
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

// Actions
import { addTodo } from '../../../../store/todo/todo.action';

// Common
import FormButton from '../../../common/buttons/FormButton';

// Styles
import styles from './addTask.module.scss';

const TodoAddTask = () => {
    const dispatch = useDispatch();
    const [inpValue, setInpValue] = useState('');

    const handleValue = (e) => {
        setInpValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!inpValue){
            return
        }
        dispatch(addTodo({
            id: nanoid(),
            completed: false,
            value: inpValue,
        }));

        setInpValue('');
    }

    return (
        <form className={styles.task__form} onSubmit={handleSubmit}>
            <input className={styles.input__add} type="text" value={inpValue} onChange={handleValue} placeholder="new task" />
            <FormButton value='add' />
        </form>
    )
}

export default TodoAddTask;