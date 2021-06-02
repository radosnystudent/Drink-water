import React from "react";
import SmallCup from "../../components/SmallCup/SmallCup";
import "./styles/Cups.scss";

function Cups({ updateCup }, ref) {
    const allCups = [];

    for (let i = 0; i < 8; i++) {
        allCups.push(
            <SmallCup
                ref={ref}
                updateCup={updateCup}
                key={`cup-${i}`}
                index={i}
            />
        );
    }

    return <div className="cups">{allCups}</div>;
}

export default React.forwardRef(Cups);
