import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AstronautCard from "./AstronautCard";
import { setInfo } from "../redux/app/issSlice";
import { invalidateTags, useGetAstronautsQuery } from "../redux/api/apiSlice";
import styles from "./Astronauts.module.css";
import Loader from "./Loader";

function Astronauts() {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetAstronautsQuery();
    const { issAstronauts } = useSelector((state) => state.iss);

    useEffect(() => {
        if (!data) {
            return;
        }

        const astronautsFromIss = data.people
            .filter((p) => p.craft === "ISS")
            .map((p) => {
                return {
                    name: p.name,
                    avatar: p.avatar
                };
            });

        dispatch(setInfo({ issAstronauts: astronautsFromIss }));
    }, [data, dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(invalidateTags(["Astronauts"]));
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);

    const showLoader = isLoading || isError;

    return (
        <div className={styles.container}>
            {showLoader ? (
                <div className={styles.loadContainer}>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className={styles.list}>
                        {issAstronauts.map((astr) => (
                            <AstronautCard
                                key={astr.name}
                                name={astr.name}
                                avatar={astr?.avatar}
                            />
                        ))}
                    </div>
                    <p className={styles.count}>
                        Total amount: {issAstronauts.length} people on ISS
                    </p>
                </>
            )}
        </div>
    );
}

export default Astronauts;
