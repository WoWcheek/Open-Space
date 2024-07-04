import { useEffect } from "react";

const INVALIDATION_INTERVAL = 5000;

export function useRefresh(setRefreshedData) {
    useEffect(() => {
        const interval = setInterval(setRefreshedData, INVALIDATION_INTERVAL);
        return () => clearInterval(interval);
    }, [setRefreshedData]);
}
