import React, { useRef } from "react";
import BigCup from "../../components/BigCup/BigCup";
import Cups from "../../containers/Cups/Cups";
import Paragraph from "../../components/Paragraph/Paragraph";
import updateBigCup from "../../actions/AppActions";

import "./styles/DrinkWater.scss";

function DrinkWater() {
    const smallCupsRef = useRef([]);
    const bigCupRef = useRef({});

    const highlightCup = (idx) => {
        if (
            smallCupsRef["current"].length > 0 &&
            Object.keys(bigCupRef["current"]).length > 0
        ) {
            smallCupsRef.current[idx].classList.toggle("full");
            updateBigCup(smallCupsRef, bigCupRef);
        }
    };

    return (
        <div className="app-container">
            <h1
                ref={(el) => (bigCupRef.current["title"] = el)}
                className="page-title"
            >
                Cel: 0/2L
            </h1>
            <BigCup ref={bigCupRef} />
            <Paragraph text={"Zaznacz ile szklanek już masz wypitych."} />
            <Cups ref={smallCupsRef} updateCup={highlightCup} />
        </div>
    );
}

export default DrinkWater;
