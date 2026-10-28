const moisture = 29;

function setPump(isOn) {
    document.getElementById("pumpStatus").textContent =
        isOn ? "ON (Demo)" : "OFF";
}

const threshold = document.getElementById("threshold");

function updateThreshold() {
    const value = Number(threshold.value);

    document.getElementById("thresholdValue").textContent =
        value + "%";

    document.getElementById("recommendation").textContent =
        moisture < value
            ? "Watering is recommended (sample data)."
            : "Watering is not recommended by this threshold rule.";
}

threshold.addEventListener("input", updateThreshold);
updateThreshold();