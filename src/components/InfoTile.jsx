import PropTypes from "prop-types";
import styles from "./InfoTile.module.css";

function InfoTile({ children }) {
    return <div className={styles.infoTile}>{children}</div>;
}

InfoTile.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default InfoTile;
