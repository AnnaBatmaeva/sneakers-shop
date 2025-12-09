import { Outlet, NavLink } from "react-router-dom";
import cn from "classnames";


import styles from './header.module.scss';

const links = [
    { to: "", label: "Головна" },
    { to: "catalog", label: "Каталог" },
    { to: "sales", label: "Акції" },
    { to: "contacts", label: "Контакти" },
];

function Header() {
    return (
        <>
            <nav className={styles.navigation}>
                {links.map(link => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            cn(styles.navigation__item, { [styles.active]: isActive })
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
            <Outlet />

        </>
    )
}

export default Header
