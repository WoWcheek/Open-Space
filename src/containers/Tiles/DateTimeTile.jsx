import { useState } from "react";
import { useRefresh } from "../../hooks/refresh";
import InfoTile from "./InfoTile";
import styles from "./DateTimeTile.module.css";

const DateTimeTile = () => {
    const [now, setNow] = useState(new Date());

    const utcTimeToDisplay = now.toLocaleString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC"
    });

    const utcDateToDisplay = now.toLocaleString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
    });

    useRefresh(() => {
        setNow(new Date());
    });

    return (
        <InfoTile>
            <div className={styles.time}>
                <h2 className={styles.title}>Current UTC time:</h2>
                <h2 className={styles.title}>{utcTimeToDisplay}</h2>
            </div>
            <p className={styles.date}>{utcDateToDisplay}</p>
        </InfoTile>
    );
};

export default DateTimeTile;
