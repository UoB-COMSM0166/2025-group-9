class TimeManager {
    constructor() {
      this.totalTime = 300; // 5 minutes
      this.timeLeft = this.totalTime;
    }
  
    // updates the countdown
    updateTime() {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1 / 60; 
        if (this.timeLeft < 0) {
          this.timeLeft = 0;
        }
      }
    }
  
    // checks if time has ran out
    hasTimeRunOut() {
      return this.timeLeft <= 0;
    }

    // resets time - used when game resets
    resetTime() {
      this.timeLeft = this.totalTime;
    }
  
    // Format time as MM:SS
    getFormattedTime() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = Math.floor(this.timeLeft % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
  }
  