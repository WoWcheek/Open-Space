import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className={styles.btn}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
