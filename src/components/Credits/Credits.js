import "./styles/Credits.scss";

function Credits({ label, children }) {
    return (
        <p className="credits-content">
            {label ? label : null}
            {children ? children : null}
        </p>
    );
}

export default Credits;
