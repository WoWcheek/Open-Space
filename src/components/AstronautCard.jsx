import PropTypes from "prop-types";
import defaultAvatar from "../assets/images/default-avatar.png";
import styles from "./AstronautCard.module.css";

function AstronautCard({ name, avatar = defaultAvatar }) {
    return (
        <div className={styles.astronautCard}>
            <img className={styles.avatar} src={avatar} />
            <p className={styles.name}>{name}</p>
        </div>
    );
}

AstronautCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string
};

export default AstronautCard;
