import React from "react";
import "./styles/BigCup.scss";

const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const BigCup = React.forwardRef((props, ref) => {
    return (
        <div className="cup">
            <div
                ref={(el) => (ref.current["remainded"] = el)}
                className="remainded"
            >
                <small>Pozostało:</small>
                <span ref={(el) => (ref.current["liters"] = el)}>2L</span>
            </div>
            <div
                className="percentage"
                ref={(el) => (ref.current["percentage"] = el)}
                style={style}
            >
                0%
            </div>
        </div>
    );
});

export default BigCup;
