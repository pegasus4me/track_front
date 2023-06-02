import moment from 'moment-timezone'
export function setDate(timezone) {

    
    const date = new Date();
    // appel lib moment pour formatage date
    const momentDate = moment(date).tz(timezone)
    const hours = momentDate.format("HH")
    const minutes = momentDate.format("mm")
    const seconds = momentDate.format("ss")

    return {
        hours,
        minutes,
        seconds
    }

}    

export function getTimeDifference(startTime, endTime){
    const format = "HH:mm:ss";
    
    const start = moment(startTime, format);
    const end = moment(endTime, format);
    
    const durationInSeconds = end.diff(start, "seconds");
    ;
    /*
    gere le cas ou end ou start est plus grand que l'autre sur
    */
    
    // get timeDifference
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;
    return {
        hours,
        minutes,
        seconds
    }
}

console.log(getTimeDifference("20:06:02", "20:20:26"))