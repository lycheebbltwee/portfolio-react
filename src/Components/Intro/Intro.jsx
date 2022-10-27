import React from "react";
import drawing from "./../../Assets/images/Self_Portrait.png";
import styles from "./Intro.module.scss";

const Intro = () => {
    return (
        <section className={styles.Intro}>
            <div className={styles.Intro__text}>
                <h1>Anh Thuy Nguyen</h1>
                <p className={styles.Intro__jobTitle}>
                    Graphic Designer, Full Stack Software Developer
                </p>
            </div>
            <div className={styles.Intro__pic}>
                <img src={drawing} alt="self-portrait" />
            </div>
        </section>
    );
};

export default Intro;
