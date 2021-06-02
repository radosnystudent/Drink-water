import Navlink from "../../components/NavLink/NavLink";
import "./styles/Navbar.scss";

const pages = [
    { title: "Homepage", url: "/" },
    { title: "Drinkwater", url: "/drinkwater" },
];

function Navbar() {
    return (
        <nav className="navbar-container">
            <ul>
                {pages.map((page, index) => {
                    return (
                        <Navlink key={`${index}-${page.title}`} page={page} />
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
