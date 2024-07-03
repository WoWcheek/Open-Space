import PositionTile from "./PositionTile";
import DateTimeTile from "./DateTimeTile";
import styles from "./App.module.css";

function App() {
    return (
        <main className={styles.app}>
            <PositionTile />
            <DateTimeTile />
            <div>Map</div>
            <div>People</div>
        </main>
    );
}

export default App;
