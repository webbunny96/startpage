id = 0;
function countId(){
  return id++;  
}

function dayWeek(){
  let dayWeek = [];
    
  $('input:checkbox:checked').each(function() {
    dayWeek.push($(this).val());
  });
  return dayWeek;
}

class alarm{

  constructor(){
   this.idAlarm = countId();
    
    this.nameAlarm = $('.nameAlarm').val();

    this.timeAlarmOn = $('.timeAlarm').val();
    //this.stopAlarm = stopAlarm;
    //this.runAlarm = runAlarm;
    //this.timeToSleep = timeToSleep;
      
    this.dayWeek = dayWeek(); 
        
    this.songAlarmAdress = $('.songAlarmAdress').val();
    //this.volumeAlarm = volumeAlarm;
    //this.smoothVolAlarm = smoothVolAlarm;
    
    this.targetAlarm = $('.targetAlarm').prop("checked");    
  
  }

  calculationAlarm(){
    this.time[hours, minutes] = this.timeAlarmOn.split(':')
  }
  
  runAlarm(){

  }

  stopAlarm(){

  }

  smoothVolAlarm(){

  }

  timeToSleep(){

  }

}

function clock(){
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes()  : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}

setInterval(clock, 1000);
clock();

num = 0;
  

$('.send').click(function() {
  
  let alarms =[];

  alarms = new alarm();
  let alarm1 = new alarm();
  alarm1.calculationAlarm();

  console.log(alarm1);
  
  num++;
 
  //set();
  //sendFunc('writeData');
  //$('iframe').attr("src", "alarms-tiles.php");
});

$('.clear').click(function(){
  sendFunc('delData');
  $('iframe').attr("src", "alarms-tiles.php");

});


/* function dayWeek() {
  let dayWeek = [];
    
  $('input:checkbox:checked').each(function() {
    dayWeek.push($(this).val());
  });
  return dayWeek;
}


function sendDate(nameAlarm, timeAlarm, dayWeek, songAlarmAdress, targetAlarm){
  $.ajax({
      type: 'GET',
      url: 'alarm.php?action=sample2',
      data:'&nameAlarm=' + nameAlarm + '&timeAlarm='+ timeAlarm + '&dayWeek=' + encodeURI(dayWeek) + 
      '&songAlarmAdress=' + encodeURI(songAlarmAdress) + '&targetAlarm=' + targetAlarm,
      success: function(data){
        console.log(data);
      }
    });
  };

  function set() {
  sendDate(nameAlarm, timeAlarm, dayWeek, songAlarmAdress, targetAlarm);
}

function sendFunc(funcName=''){
  $.ajax({
    type: 'GET',
    url: 'alarm.php?action=sample2',
    data:'&funcName=' + funcName,
    success: function(data){
      console.log(data)
    }
  });
}
 */
