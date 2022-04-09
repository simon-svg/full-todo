// Pages
import Todo from './pages/todo';

// Styles
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;