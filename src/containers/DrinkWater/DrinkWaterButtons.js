import { useRef, useState } from "react";
import Button from "../../components/Button/Button";

import "./styles/DrinkWater.scss";

const buttons = [
    {
        label: "Woda",
        styles: { backgroundColor: "#0097e6" },
        className: "clicked",
    },
    {
        label: "Herbata",
        styles: { backgroundColor: "#20bf6b" },
        className: "",
    },
    {
        label: "Kawa",
        styles: { backgroundColor: "#6f4e37" },
        className: "",
    },
    {
        label: "Sok",
        styles: { backgroundColor: "#fa8231" },
        className: "",
    },
];

function DrinkWaterButtons({ setFillColor }) {
    const buttonsRef = useRef({});
    const [selectedLabel, setLabel] = useState("");

    const buttonAction = (e) => {
        e.target.classList.toggle("clicked");
        selectedDrinkLabel(e.target.innerText);
    };

    const selectedDrinkLabel = (activeButtonLabel) => {
        buttons.forEach((item) => {
            if (buttonsRef.current[item.label].classList.contains("clicked")) {
                if (
                    buttonsRef.current[item.label].innerText !==
                    activeButtonLabel
                ) {
                    buttonsRef.current[item.label].classList.toggle("clicked");
                }
            }
        });
        setLabel(activeButtonLabel);
        setFillColor(activeButtonLabel);
    };

    return (
        <div className="drink-buttons-container">
            <h3 className="selected-color">Wybierz napój: {selectedLabel}</h3>
            {buttons.map((button, index) => {
                return (
                    <Button
                        ref={(el) => (buttonsRef.current[button.label] = el)}
                        key={`${index}-${button.label}`}
                        styles={button.styles}
                        label={button.label}
                        onClick={buttonAction}
                        className={button.className}
                    />
                );
            })}
        </div>
    );
}

export default DrinkWaterButtons;
