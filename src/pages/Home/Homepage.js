import Paragraph from "../../components/Paragraph/Paragraph";
import "./styles/Homepage.scss";

function Homepage() {
    return (
        <div className="homepage-container">
            <h1 className="page-title">Pij wodę!</h1>
            <div className="homepage-space"></div>
            <div className="homepage-paragraph">
                <Paragraph
                    text={
                        "Prosta strona napisana w React.js aby umożliwić łatwe śledzenie ilości wypitych płynów w ciągu dnia."
                    }
                />
            </div>
        </div>
    );
}

export default Homepage;
