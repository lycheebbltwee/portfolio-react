import { navData } from "./navData";
import { Link } from "react-router-dom";
import lycheeIcon from "./../../Assets/images/logo_colour.svg";
import styles from "./Nav.module.scss";
import { useState } from "react";
import Button from "../Button";
import * as HiIcons from "react-icons/hi";

const Nav = () => {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav);
    };

    return (
        <header>
            <div className={styles.Nav}>
                <img src={lycheeIcon} alt="lychee icon" />
                <Button onChange={handleShowNav}>
                    <HiIcons.HiMenu />
                </Button>
            </div>
            <nav className={showNav ? styles.Nav__visible : styles.Nav__hidden}>
                <Button onChange={handleShowNav}>
                    <HiIcons.HiX />
                </Button>
                <ul className={styles.Nav__list} onClick={handleShowNav}>
                    {navData.map((item, index) => {
                        return (
                            <li className={item.cName} key={index}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
