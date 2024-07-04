import L from "leaflet";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import markerIcon from "../assets/images/marker.png";
import Button from "./Button";
import styles from "./Map.module.css";

const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 32],
    shadowSize: [0, 0]
});

function ChangeCenter({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
}

ChangeCenter.propTypes = {
    center: PropTypes.array
};

function Map() {
    const [markerPosition, setMarkerPosition] = useState([50, 30]);
    const [mapCenter, setMapCenter] = useState([]);

    const { issPosition } = useSelector((state) => state.iss);

    useEffect(() => {
        if (issPosition?.latitude ?? false) {
            setMarkerPosition([issPosition.latitude, issPosition.longitude]);
        }
    }, [issPosition]);

    useEffect(() => {
        if (mapCenter.length > 0) {
            setMapCenter([]);
        }
    }, [mapCenter]);

    return (
        <div className={styles.mapContainer}>
            {issPosition && (
                <MapContainer
                    center={markerPosition}
                    zoom={5}
                    scrollWheelZoom={true}
                    className={styles.map}
                >
                    {mapCenter.length > 0 && (
                        <ChangeCenter center={mapCenter} />
                    )}
                    <TileLayer
                        attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
                    />
                    {issPosition?.latitude && (
                        <Marker position={markerPosition} icon={customMarker}>
                            <Popup>
                                <span>ISS current position</span>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            )}
            <Button onClick={() => setMapCenter(markerPosition)}>
                Find ISS
            </Button>
        </div>
    );
}

export default Map;
