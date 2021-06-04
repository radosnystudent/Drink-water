import Credits from "../../components/Credits/Credits";
import "./styles/Footer.scss";

const iconCredits = {
    label: "Webpage icon by: ",
};

function Footer() {
    return (
        <footer className="Footer">
            <Credits label={"Webapge made by Jeremiasz Pauszek, 2021"} />
            <Credits label={iconCredits.label}>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://iconpacks.net/?utm_source=link-attribution&utm_content=1562"
                >
                    Iconpacks
                </a>
            </Credits>
        </footer>
    );
}

export default Footer;
