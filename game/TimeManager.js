class TimeManager {
    constructor() {
      this.totalTime = 300; // 5 minutes in seconds
      this.timeLeft = this.totalTime;
    }
  
    updateTime() {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1 / 60; 
        if (this.timeLeft < 0) {
          this.timeLeft = 0;
        }
      }
    }
  
    hasTimeRunOut() {
      return this.timeLeft <= 0;
    }
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
  