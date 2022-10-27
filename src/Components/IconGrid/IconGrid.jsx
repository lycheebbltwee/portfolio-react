import React from "react";
import { iconData } from "./../../Services/codingIcons.js";
import Icon from "../Icon";
import styles from "./IconGrid.module.scss";

const IconGrid = () => {
    return (
        <div className={styles.IconGrid}>
            <p>I have skills in these:</p>
            <div className={styles.IconGrid__grid}>
                {iconData.map((icon, index) => {
                    return (
                        <Icon
                            imgLink={icon.imgSrc}
                            altText={icon.alt}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default IconGrid;
