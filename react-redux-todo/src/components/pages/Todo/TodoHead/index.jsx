// Styles
import styles from './todoHead.module.scss'

const TodoHead = () => {
    return (
        <div className={styles.app__title}>
            <h1 className={styles.title}>TODOLIST</h1>
        </div>
    )
}

export default TodoHead;