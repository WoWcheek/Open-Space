import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRefresh } from "../../hooks/refresh";
import { setInfo } from "../../redux/app/issSlice";
import {
    invalidateTags,
    useGetIssPositionQuery
} from "../../redux/api/apiSlice";
import InfoTile from "./InfoTile";
import Loader from "../../components/Loader";
import styles from "./PositionTile.module.css";

const PositionTile = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isFetching, isError } = useGetIssPositionQuery();
    const { issPosition } = useSelector(state => state.iss);

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

    useRefresh(() => {
        dispatch(invalidateTags(["Position"]));
    });

    const showLoader = isFetching || isLoading || isError;

    return (
        <InfoTile>
            <h2 className={styles.title}>ISS is now located at:</h2>
            <div className={styles.details}>
                <p>longitude: {issPosition?.longitude}</p>
                <p>latitude: {issPosition?.latitude}</p>
            </div>
            {showLoader && (
                <div className={styles.loadContainer}>
                    <Loader />
                </div>
            )}
        </InfoTile>
    );
};

export default PositionTile;
