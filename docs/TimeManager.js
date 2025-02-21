// Starts counting down when the game starts (i.e when player hits the start button)
// 5 minutes to complete the game
// Speed up 2x when all ingredients are collected
// Resets when game resets

class TimeManager {
    constructor() {
        this.initialTime = 300; // 5 minutes in seconds
        this.countdown = this.initialTime;
        this.speedMultiplier = 1;
        this.timerSpedUp = false;
    }

    // decrease the timer - countdown
    updateTime() {
        if (this.countdown > 0) {
            this.countdown -= this.speedMultiplier; // Decrease timer
        }
    }

    // when all ingredients are collected timer will speed up by 2x
    // CureManager will monitor cure collection and call speedUpTimer() when all ingredients are collected
    speedUpTimer() {
        if (!this.timerSpedUp) {
            console.log("All ingredients collected! Timer speeds up by 2×.");
            this.speedMultiplier = 2;
            this.timerSpedUp = true;
        }
    }

    // checks if time has ran out, it will return true causing game over
    hasTimeRunOut() {
        return this.countdown <= 0;
    }

    // timer reset to 5 mins when game resets
    resetTime() {
        this.countdown = this.initialTime; // Reset to 5 minutes
        this.speedMultiplier = 1;
        this.timerSpedUp = false;
    }

    // Converts time into MM:SS format - implement this on UIManager so that time will be displayed
    getFormattedTime() {
        let minutes = Math.floor(this.countdown / 60);
        let seconds = Math.ceil(this.countdown % 60);
        if (seconds === 60) { // Edge case where it rounds up
            minutes += 1;
            seconds = 0;
        }
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
}