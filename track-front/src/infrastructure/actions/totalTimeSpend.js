export function totalSpend(value) {
    let min = 0;
    let sec = 0;    
    let h = 0;
  value.map((val) => {
    const [hours, minutes, seconds] = val.time_spend.split(":");
    // totalHours = parseInt(seconds)
    h += parseInt(hours);
    min += parseInt(minutes);
        if(min >= 60){
            min = 0;
            h++;
        }
    sec += parseInt(seconds);
        if(sec >= 60){
            sec = 0;
            min++;
        }
  });
  return {
    hours: h,
    minutes: min,
    seconds: sec,
  };

}