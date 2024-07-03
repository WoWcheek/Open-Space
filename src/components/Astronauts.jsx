import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../redux/app/issSlice";
import { invalidateTags, useGetAstronautsQuery } from "../redux/api/apiSlice";
import styles from "./Astronauts.module.css";

function Astronauts() {
    const dispatch = useDispatch();
    const { data } = useGetAstronautsQuery();
    const { issAstronauts } = useSelector((state) => state.iss);

    useEffect(() => {
        if (data) {
            const astronautsFromIss = data.people
                .filter((p) => p?.craft === "ISS")
                .map((p) => p?.name);

            dispatch(setInfo({ issAstronauts: astronautsFromIss }));
        }
    }, [data, dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(invalidateTags(["Astronauts"]));
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {issAstronauts.map((astr) => (
                    <p key={astr}>{astr}</p>
                ))}
            </div>
            <p className={styles.count}>
                Total amount: {issAstronauts.length} people on ISS
            </p>
        </div>
    );
}

export default Astronauts;
