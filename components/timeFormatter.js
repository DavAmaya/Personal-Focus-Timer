export default class TimeFormatter {
    constructor(duration){
        this.duration = duration
    }

    //converts the duration(in seconds) to mintues and seconds to display to user

    _convertMin(){
        this.min = Math.floor(this.duration / 60).toString();
    }

    _convertSec(){
        this.sec = (this.duration % 60).toString();

    }

    printTime(){
        this._convertMin();
        this._convertSec();

        console.log(this.min.padStart(2, "0") + ":" + this.sec.padStart(2, "0") )
        return this.min.padStart(2, "0") + ":" + this.sec.padStart(2, "0") 
    }
}