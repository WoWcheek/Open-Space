import L from "leaflet";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIcon from "../assets/images/marker.png";
import styles from "./Map.module.css";

const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 32],
    shadowSize: [0, 0]
});

function Map() {
    const [mapPosition, setMapPosition] = useState([50, 30]);

    const { issPosition } = useSelector((state) => state.iss);

    useEffect(() => {
        if (issPosition?.latitude ?? false) {
            setMapPosition([issPosition.latitude, issPosition.longitude]);
        }
    }, [issPosition]);

    return (
        <div>
            <div className={styles.mapContainer}>
                {issPosition && (
                    <MapContainer
                        center={mapPosition}
                        zoom={5}
                        scrollWheelZoom={true}
                        className={styles.map}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
                        />
                        {issPosition?.latitude && (
                            <Marker position={mapPosition} icon={customMarker}>
                                <Popup>
                                    <span>ISS current position</span>
                                </Popup>
                            </Marker>
                        )}
                    </MapContainer>
                )}
            </div>
        </div>
    );
}

export default Map;
