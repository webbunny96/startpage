<?php
require_once 'alarm.php';

$index = 0;

//Содание блока
function CreatBlock($index, $nameAlarmData, $timeAlarmData, $dayWeekData, $songAlarmAdressData, $targetAlarmData){    
    $alarmNum = $index + 1;
    if($targetAlarm == true) $targetAlarm = 'checked';
    if($targetAlarm == false) $targetAlarm = '';

    $block = '
    <div class="alarm %alarmNum%">
        <div><h4>Alarm %alarmNum%</h4> <input type="checkbox" class="targetAlarm" %targetAlarm%></div> 
        <div>
            <h3 class="time">%timeAlarm%</h3>
            <p class="weekDay">%dayWeek%</p>
            <p class="name">%nameAlarm%</p>
        </div>
    </div>';
    
    $block = str_replace("%alarmNum%", $index, $block);
    $block = str_replace("%nameAlarm%", $nameAlarmData, $block);
    $block = str_replace("%timeAlarm%", $timeAlarmData, $block);
    $block = str_replace("%dayWeek%", $dayWeekData, $block);
    $block = str_replace("%songAlarmAdress%", $songAlarmAdressData, $block);
    $block = str_replace("%targetAlarm%", $targetAlarmData, $block);
    
    return($block);
};
?>

<html>
<head>
<link href="../css/tiles.css" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
    <style>
        body{
            flex-direction: column;
        }
    </style>
<?php
//Переложить в цикл 
while($index != $dataSize){    
    list($idData, $nameAlarmData, $timeAlarmData, $dayWeekData, $songAlarmAdressData, $targetAlarmData) = explode("/:/", $recData[$index]);// разбивка строки на переменные
    $index = $index + 1; 
    echo CreatBlock($index, $nameAlarmData, $timeAlarmData, $dayWeekData, $songAlarmAdressData, $targetAlarmData);
};

?>

    
</body>
</html>