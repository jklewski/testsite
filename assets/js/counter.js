function startCountdown(targetDate) {
    let countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        let now = new Date().getTime();
        let targetTime = new Date(targetDate).getTime();
        let timeLeft = targetTime - now;

        if (timeLeft > 0) {
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.textContent = "Time's up!";
        }
    }

    updateCountdown();
}

// Set countdown to New Year's Eve (change the date as needed)
startCountdown("June 1, 2025 09:00:00");