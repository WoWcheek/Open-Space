import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";

function Map() {
    const [mapPosition, setMapPosition] = useState([50, 30]);

    const { issPosition } = useSelector((state) => state.iss);

    useEffect(() => {
        if (issPosition?.latitude ?? false) {
            setMapPosition([issPosition.latitude, issPosition.longitude]);
        }
    }, [issPosition]);

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
                />
                {issPosition?.latitude && (
                    <Marker position={mapPosition}>
                        <Popup>
                            <span>ISS current position</span>
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
}

export default Map;
