import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
    return (
        <button className={styles.Button} onClick={props.onChange}>
            {props.children}
        </button>
    );
};

export default Button;
