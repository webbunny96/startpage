function getWeekDay(date) {
       let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
     
       return days[date.getDay()];
}

function clock() {
  let date = new Date(),
    year = date.getFullYear() < 10 ? "0" + date.getFullYear() : date.getFullYear();
  month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
       let dayWeek =getWeekDay(date);
  (hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()),
    (minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()),
    (seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
  document.querySelector("#clock").innerHTML = hours + ":" + minutes;
  document.querySelector("#date").innerHTML = day + "." + month + "." + year + "  " + dayWeek;
  console.log(day, month, year, dayWeek);
}
setInterval(clock, 1000);
clock();
