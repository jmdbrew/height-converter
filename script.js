const CENTIMETRES_PER_INCH = 2.54;
const imperialLabel = document.querySelector(".imperial");
const metricLabel = document.querySelector(".metric");
let inputHeightInCentimetres = "";

document.addEventListener("keydown", updateHeight);

function updateHeight(e) {
    if (e.code === "Backspace") {
        inputHeightInCentimetres = inputHeightInCentimetres.slice(0, -1);
        updateLabels();
    }
    else if ((e.keyCode >= 48 && e.keyCode <= 57) && (inputHeightInCentimetres.length < 3)) {
        inputHeightInCentimetres += e.key;
        updateLabels();
    }
}

function updateLabels() {
    let inches = inputHeightInCentimetres / CENTIMETRES_PER_INCH;
    imperialLabel.textContent = Math.floor(inches / 12) + "′";
    imperialLabel.textContent += Math.round(inches % 12) + "″";
    metricLabel.textContent = inputHeightInCentimetres;
}