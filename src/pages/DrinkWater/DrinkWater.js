import React, { useRef, useState } from "react";

import updateBigCup from "../../actions/AppActions";

import "./styles/DrinkWater.scss";
import DrinkWaterButtons from "../../containers/DrinkWater/DrinkWaterButtons";
import DrinkWaterContainer from "../../containers/DrinkWater/DrinkWaterContainer";

const fillColors = {
    Woda: "#0097e6",
    Herbata: "#20bf6b",
    Kawa: "#6f4e37",
    Sok: "#fa8231",
};

function DrinkWater() {
    const smallCupsRef = useRef([]);
    const bigCupRef = useRef({});
    const [actualFillColor, setFillColor] = useState("Water");

    const highlightCup = (idx) => {
        if (
            smallCupsRef["current"].length > 0 &&
            Object.keys(bigCupRef["current"]).length > 0
        ) {
            smallCupsRef.current[idx].classList.toggle("full");
            if (smallCupsRef.current[idx].classList.contains("full")) {
                smallCupsRef.current[
                    idx
                ].style = `background-color: ${fillColors[actualFillColor]}`;
            } else {
                smallCupsRef.current[idx].style = `background-color: #fff`;
            }
            updateBigCup(smallCupsRef, bigCupRef);
        }
    };

    return (
        <div className="app-container">
            <DrinkWaterContainer
                highlightCup={highlightCup}
                ref={{
                    smallCupsRef: smallCupsRef,
                    bigCupRef: bigCupRef,
                }}
            />
            <DrinkWaterButtons setFillColor={setFillColor} />
        </div>
    );
}

export default DrinkWater;
