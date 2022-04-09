import { useSelector } from "react-redux";
import ListItem from './ListItem';

// Styles
import styles from './todoList.module.scss';

const TodoList = () => {
    const { todoList } = useSelector((state) => state.todo);

    return (
        <ul className={styles.list}>
            {
                todoList.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            id={item.id}
                            completed={item.completed}
                            value={item.value}
                        />
                    )
                })
            }
        </ul>
    )
}

export default TodoList;