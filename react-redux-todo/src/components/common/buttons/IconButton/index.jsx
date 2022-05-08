// Styles
import styles from './iconButton.module.scss';

const IconButton = ({children, onClick}) => {
    return (
        <button className={styles.icon__cont} onClick={onClick}>
            {children}
        </button>
    )
}

export default IconButton;