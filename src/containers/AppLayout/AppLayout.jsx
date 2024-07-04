import Map from "../Map/Map";
import PositionTile from "../Tiles/PositionTile";
import DateTimeTile from "../Tiles/DateTimeTile";
import Astronauts from "../Astronauts/Astronauts";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
    return (
        <main className={styles.app}>
            <PositionTile />
            <DateTimeTile />
            <Map />
            <Astronauts />
        </main>
    );
};

export default AppLayout;
