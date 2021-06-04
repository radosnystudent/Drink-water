import { forwardRef } from "react";
import BigCup from "../../components/BigCup/BigCup";
import Cups from "../../containers/Cups/Cups";
import Paragraph from "../../components/Paragraph/Paragraph";

import "./styles/DrinkWater.scss";

function DrinkWaterContainer({ highlightCup }, ref) {
    const { smallCupsRef, bigCupRef } = ref;

    return (
        <div className="drink-container">
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

export default forwardRef(DrinkWaterContainer);
