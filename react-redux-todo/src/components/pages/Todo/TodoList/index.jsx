import { useSelector } from "react-redux";
import ListItem from './ListItem';

// Components
import Loader from '../../../common/loader';

// Styles
import styles from './todoList.module.scss';

const TodoList = () => {
    const { todoList } = useSelector((state) => state.todo);
    const loading = useSelector((state) => state.todo.isLoading.loading);

    return (
        <div className={styles.list__container}>
            <Loader loading={loading} />
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