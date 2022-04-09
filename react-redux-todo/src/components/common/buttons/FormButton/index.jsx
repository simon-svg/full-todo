// Styles
import styles from './formButton.module.scss';


const FormButton = ({ value }) => {
    return (
        <button className={styles.btn__add}>{value}</button>
    )
}

export default FormButton;