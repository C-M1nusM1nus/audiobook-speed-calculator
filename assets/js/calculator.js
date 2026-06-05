function calculateTime() {

    const hours =
        parseFloat(document.getElementById("hours").value);

    const speed =
        parseFloat(document.getElementById("speed").value);

    if (isNaN(hours) || hours <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid audiobook length.";
        return;
    }

    const adjustedHours = hours / speed;

    const wholeHours = Math.floor(adjustedHours);

    const minutes =
        Math.round((adjustedHours - wholeHours) * 60);

    document.getElementById("result").innerHTML =
        `
        <h3>Result</h3>
        <p>
        Listening at <strong>${speed}x</strong>
        will take approximately
        <strong>${wholeHours}h ${minutes}m</strong>.
        </p>
        `;
}
