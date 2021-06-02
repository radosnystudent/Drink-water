import { NavLink } from "react-router-dom";

import "./styles/Navlink.scss";

function Navlink({ page }) {
    return (
        <li className="navlink">
            <NavLink
                className="navbar-link"
                activeClassName="active-page"
                to={page.url}
            >
                {page.title}
            </NavLink>
        </li>
    );
}

export default Navlink;
