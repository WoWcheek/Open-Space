import InfoTile from "./InfoTile";
import styles from "./PositionTile.module.css";

function PositionTile() {
    return (
        <InfoTile>
            <h2 className={styles.title}>ISS is now located at:</h2>
            <div className={styles.details}>
                <p>longtitude:</p>
                <p>latitude:</p>
            </div>
        </InfoTile>
    );
}

export default PositionTile;
