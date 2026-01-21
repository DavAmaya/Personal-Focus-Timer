import TimeFormatter from "./timeFormatter.js";

export default class Timer {
    constructor(duration){
        this.duration = duration;
    }

    //simple countdown timer that take duration in seconds and has start and stop functionality

    _countdown(){
        const time = new TimeFormatter(this.duration);
        if(this.duration == 0){
            clearInterval(this._interval);
            time.printTime();
            return;
        }

        time.printTime();

        this.duration--;
    }

    start(){
       this._interval = setInterval(() => this._countdown(), 1000);
    }

    stop(){
        clearInterval(this._interval);
    }

}


const time = new Timer(5);

time.start();