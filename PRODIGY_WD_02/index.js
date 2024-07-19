class Timer {
    constructor(display, laps) {
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.timer = null;
        this.display = display;
        this.laps = laps;
    }

    start() {
        if (!this.timer) {
            this.timer = setInterval(() => this.run(), 10);
        }
    }

    run() {
        this.display.innerHTML = this.getTimer();
        this.milliseconds++;
        if (this.milliseconds === 100) {
            this.milliseconds = 0;
            this.seconds++;
        }
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours === 13) {
            this.hours = 1;
        }
    }

    getTimer() {
        return (this.hours < 10 ? "0" + this.hours : this.hours) + " : " +
               (this.minutes < 10 ? "0" + this.minutes : this.minutes) + " : " +
               (this.seconds < 10 ? "0" + this.seconds : this.seconds) + " : " +
               (this.milliseconds < 10 ? "0" + this.milliseconds : this.milliseconds);
    }

    pause() {
        this.stopTimer();
    }

    stopTimer() {
        clearInterval(this.timer);
        this.timer = null;
    }

    reset() {
        this.stopTimer();
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.display.innerHTML = this.getTimer();
    }

    restart() {
        if (this.timer) {
            this.reset();
            this.start();
        }
    }

    lap() {
        if (this.timer) {
            const li = document.createElement("li");
            li.innerHTML = this.getTimer();
            this.laps.appendChild(li);
        }
    }

    resetLaps() {
        this.laps.innerHTML = "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector(".time-display");
    const laps = document.querySelector(".laps");
    const timer = new Timer(display, laps);

    document.getElementById('startTimer').addEventListener('click', () => timer.start());
    document.getElementById('pauseTimer').addEventListener('click', () => timer.pause());
    document.getElementById('resetTime').addEventListener('click', () => timer.reset());
    document.getElementById('restartTimer').addEventListener('click', () => timer.restart());
    document.getElementById('lap').addEventListener('click', () => timer.lap());
    document.getElementById('resetLap').addEventListener('click', () => timer.resetLaps());
});
