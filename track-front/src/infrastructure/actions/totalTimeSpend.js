export function totalSpend(value) {
  let min = 0;
  let sec = 0;
  let h = 0;

  if (Array.isArray(value) && value.length !== 0) {
    value.map((val) => {
      const [hours, minutes, seconds] = val.time_spend.split(":");
      h += parseInt(hours);
      min += parseInt(minutes);
      if (min >= 60) {
        min = 0;
        h++;
      }
      sec += parseInt(seconds);
      if (sec >= 60) {
        sec = 0;
        min++;
      }
    });
  }
  return {
    hours: h,
    minutes: min,
    seconds: sec,
  };
}

export function converDurationToNumber(time) {
  const [hours, minutes, seconds] = time.split(":");
  const totalMilliseconds = (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) * 1000;  // convertir en millisecondes
  return totalMilliseconds;
}

export function sumTimeSpendToTimeEnd(time_end, time_spend) {
  const date = time_end.slice(0,10);
  const sliceTimeEnd =time_end.slice(10).split(":");
  const [hours, minutes, seconds] = sliceTimeEnd;
  const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  // time_spend
  const sliceTimeSpend = time_spend.split(":");
  const [hoursSpent, minutesSpent, secondsSpent] = sliceTimeSpend;
  const totalSecondsSpent = parseInt(hoursSpent) * 3600 + parseInt(minutesSpent) * 60 + parseInt(secondsSpent);

  const newTimePassed = totalSeconds + totalSecondsSpent;
  
  const hoursResult = Math.floor(newTimePassed / 3600);
  const minutesResult = Math.floor((newTimePassed % 3600) / 60);
  const secondsResult = newTimePassed % 60;

  return  `${date} ${hoursResult}:${minutesResult}:${secondsResult}`
}


console.log(totalSpend([
  {id: 117, user_id: 23, time_start: '2023-06-29T13:16:45.000Z', time_end: '2023-06-29T13:16:48.000Z', time_spend: '00:00:03'},
  {id: 119, user_id: 23, time_start: '2023-07-03T18:45:03.000Z', time_end: '2023-07-03T18:45:08.000Z', time_spend: '00:00:05'},
  {id: 120, user_id: 23, time_start: '2023-07-03T19:00:27.000Z', time_end: '2023-07-03T19:00:33.000Z', time_spend: '00:10:06'}
  ]))