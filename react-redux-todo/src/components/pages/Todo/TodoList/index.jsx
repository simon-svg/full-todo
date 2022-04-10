import { useSelector } from "react-redux";
import ListItem from './ListItem';

// Styles
import styles from './todoList.module.scss';

// Media
import loader from '../../../../media/loader/loader.gif';

const TodoList = () => {
    const { todoList } = useSelector((state) => state.todo);
    const loading = useSelector((state) => state.todo.isLoading.loading);

    return (
        <div className={styles.list__container}>
            <div className={styles.loader} style={{ display: loading ? 'block' : 'none' }}>
                <img className={styles.loader__gif} src={loader} alt="loading" />
            </div>
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
        </div>
    )
}

export default TodoList;