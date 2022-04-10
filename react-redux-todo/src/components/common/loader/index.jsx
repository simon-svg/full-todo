// Styles
import styles from './loader.module.scss';

// Media
import loader from '../../../media/loader/loader.gif';

const Loader = ({ loading }) => {
    return (
        <div className={styles.loader} style={{ display: loading ? 'block' : 'none' }}>
            <img className={styles.loader__gif} src={loader} alt="loading" />
        </div>
    )
}

export default Loader;