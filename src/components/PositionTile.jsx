import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../redux/app/issSlice";
import { useGetIssPositionQuery, invalidateTags } from "../redux/api/apiSlice";
import InfoTile from "./InfoTile";
import styles from "./PositionTile.module.css";

function PositionTile() {
    const dispatch = useDispatch();
    const { data } = useGetIssPositionQuery();
    const { issPosition } = useSelector((state) => state.iss);

    useEffect(() => {
        if (!data) {
            return;
        }

        dispatch(
            setInfo({
                issPosition: data.iss_position
            })
        );
    }, [data, dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(invalidateTags(["Position"]));
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <InfoTile>
            <h2 className={styles.title}>ISS is now located at:</h2>
            <div className={styles.details}>
                <p>longitude: {issPosition?.longitude}</p>
                <p>latitude: {issPosition?.latitude}</p>
            </div>
        </InfoTile>
    );
}

export default PositionTile;
