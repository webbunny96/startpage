<?php
	// подключаем скрипт
require_once 'connection.php';
//require_once 'alarms-tiles.php';
	//запись
if($id == '') $id = date(dmY);
$nameAlarm = urldecode($_GET['nameAlarm']);
$timeAlarm = urldecode($_GET['timeAlarm']);
$dayWeek = urldecode($_GET['dayWeek']);
$songAlarmAdress = urldecode($_GET['songAlarmAdress']);
$targetAlarm = urldecode($_GET['targetAlarm']);

$funcName = $_GET['funcName'];

	// подключаемся к серверу
$conn = mysqli_connect($host, $user, $password, $database);

// выполняем операции с базой данных
if (!$conn) {
	die("\nОшибка подключения кбазе данных: " . mysqli_connect_error());
}
function writeData($conn, $nameAlarm, $timeAlarm, $dayWeek, $songAlarmAdress, $targetAlar){
		// Запись данных в базу данных
	$sql = "INSERT INTO alarms (name, time, dayWeek, songAdress, target) VALUES
 	('$nameAlarm', '$timeAlarm', '$dayWeek', '$songAlarmAdress', '$targetAlarm')";

	if (mysqli_multi_query($conn, $sql)) {
	} else {
		echo "\nОшибка: " . $sql . "\n" . mysqli_error($conn);
	}
}

if($funcName == 'writeData'){
	writeData($conn, $nameAlarm, $timeAlarm, $dayWeek, $songAlarmAdress, $targetAlar);
 
}

 function readData($conn){
 	$receivedData = "";// обьявляем строку данных
 	$recData = array(); //обьявляем масив данных

	 $sqlRead = 'SELECT * FROM alarms'; // Выбока данных из базы

	//Чтение данных с базы данных
	
	$result = mysqli_query($conn, $sqlRead);// Запрос данных

	$rows = mysqli_fetch_all($result, MYSQLI_ASSOC); // Запрос данных


	foreach ($rows as $row) {
		$receivedData = ($row['id']."/:/".$row['name']."/:/".$row['time']."/:/".$row['dayWeek']."/:/".$row['songAdress']."/:/".$row['target']); //строка данных
		array_push($recData, $receivedData); // масив из строк данных
	}
	return $recData;
}

$recData = readData($conn);

$dataSize = count($recData);

function delData($conn){
	mysqli_query($conn, "TRUNCATE alarms");
}
if($funcName == 'delData'){
delData($conn);
}
// 25/:/ Name1/:/12:02/:/thu,on/:/C:fakepathastrades29-setup-demo.exe/:/true   ----Строка данных

// закрываем подключение
mysqli_close($conn);

?>