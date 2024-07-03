import Astronauts from "./Astronauts";
import PositionTile from "./PositionTile";
import DateTimeTile from "./DateTimeTile";
import styles from "./AppLayout.module.css";

function AppLayout() {
    return (
        <main className={styles.app}>
            <PositionTile />
            <DateTimeTile />
            <div>Map</div>
            <Astronauts />
        </main>
    );
}

export default AppLayout;
