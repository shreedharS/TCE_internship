function calculateVolume() {
    const radius = parseFloat(document.getElementById("radius").value);
    const result = document.getElementById("result");

    if (!isNaN(radius)) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        result.textContent = `Volume of the sphere is ${volume.toFixed(2)} cubic units.`;
    } else {
        result.textContent = "Please enter a valid number for the radius.";
    }
}

document.getElementById("calculateButton").addEventListener("click", calculateVolume);