import party from "party-js";

const updateBigCup = (smallCupsRef, bigCupRef) => {
    let fullCups = 0;
    const totalCups = smallCupsRef["current"].length;

    smallCupsRef["current"].forEach((cup) => {
        if (cup.classList.contains("full")) {
            fullCups++;
        }
    });

    if (fullCups === 0) {
        bigCupRef.current["percentage"].style.height = "0px";
        bigCupRef.current["percentage"].style.visibility = "hidden";
    } else {
        bigCupRef.current["percentage"].style.visibility = "visible";
        bigCupRef.current["percentage"].style.color = "#fff";
        bigCupRef.current["percentage"].style.height = `${
            (fullCups / totalCups) * 330
        }px`;
        bigCupRef.current["percentage"].innerText = `${
            (fullCups / totalCups) * 100
        }%`;
    }

    if (fullCups === totalCups) {
        bigCupRef.current["remainded"].style.visibility = "hidden";
        bigCupRef.current["remainded"].style.height = "0px";
        party.confetti(bigCupRef.current["percentage"], {
            count: party.variation.range(500, 700),
        });
        bigCupRef.current["title"].innerText = `Cel osiągnięty! Gratulacje!`;
    } else {
        bigCupRef.current["remainded"].style.visibility = "visible";
        bigCupRef.current["liters"].innerText = `${
            2 - (250 * fullCups) / 1000
        }L`;
        bigCupRef.current["title"].innerText = `Cel: ${
            (fullCups * 250) / 1000
        }/2L`;
    }
};

export default updateBigCup;
