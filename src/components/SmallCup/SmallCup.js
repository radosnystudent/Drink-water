import React from "react";
import "./styles/SmallCup.scss";

function SmallCup({ updateCup, index }, ref) {
    const clickHandler = () => {
        updateCup(index);
    };

    return (
        <div
            ref={(el) => (ref.current[index] = el)}
            onClick={clickHandler}
            className="cup-small"
        >
            250ml
        </div>
    );
}

export default React.forwardRef(SmallCup);
