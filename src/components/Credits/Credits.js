import "./styles/Credits.scss";

function Credits({ label, children }) {
    return (
        <p className="credits-content">
            {label}
            {children ? children : null}
        </p>
    );
}

export default Credits;
