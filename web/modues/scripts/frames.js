// let patConteinerIteam = document.querySelectorAll(".patternConteiner"); //Получение всех контейниров
// let FrameResponseIteam = [];


// function addFaramsInConteiner(patConteiner){
//   FrameResponseIteam.forEach((frame)=>{
//     if(patConteiner.patConName == frame.frameName){
//       patConteiner.append(frame);
//     }
//   });
// }

// //Изменения размера Main во frame
// function resize(frame) {
//   if (frame.querySelector("main")) {
//     frame.querySelector("main").style.height = "100%";
//   }else{
//     //alert("Module: '" + frame.patConName +"' hasn't main tag"); //Уведомлени об отсуцвии main
//   }
// }

// //Добовляем называния фрейма в HTML объект контейнера
// function patConName(patConteiner){
//     let patConName ="";
//     patConteiner.classList.forEach((classN) => {
//       if (classN.includes("pat-")) {
//         patConName = classN.replace("pat-", "");
//       }
//     });
//     return patConName
// }
// // Отправка запроса на url
// function urlRequestScripts(url){ 
//   let request = new XMLHttpRequest(); //новый запрос 
//   let FrameResponse = document.createElement("div"); // Создаем HTML объект Фрейма
//   FrameResponse.classList.add("FrameResponse"); //Добовляем клас в HTML объект Фрейма
//   FrameResponse["frameName"] = url.replace("./", ""); //Добовляем называния фрейма в HTML объект Фрейма
//   request.open('GET', url); //отправка гет запроса
//   request.send(); // виполнение запроса
//   request.onload = function() { //после загрузки 
//       if (request.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//         console.log(`Ошибка ${request.status}: ${request.statusText}`); // Например, 404: Not Found
//       } else { // если всё прошло гладко, выводим результат
//         //console.log(`Готово, получили ${request.response.length} байт`); // response -- это ответ сервера
//         frameHtml = request.response.replaceAll("./", `./${url.replace("./", "")}/`);
//         FrameResponse.innerHTML =  frameHtml;;//Запись ответа в  HTML объект Фрейма
//         FrameResponse.querySelectorAll("script").forEach((script)=>{
//           script.setAttribute("src", script.src); 
//           document.querySelector(".patternConteiner").append(script);  
//         });
//         FrameResponse.querySelectorAll("style").forEach((style)=>{
//           document.querySelector(".patternConteiner").append(style);  
//         });
//       }
//     };
    
//     request.onprogress = function(event) {// прогресс функция
//       if (event.lengthComputable) {
//         //console.log(`Получено ${event.loaded} из ${event.total} байт`);
//       } else {
//         //console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//       }
//     };
    
//     request.onerror = function() {// если ошибка
//       console.log("Запрос не удался"); 
//     };
// }

// function urlRequestBody(url){ 
//   let request = new XMLHttpRequest(); //новый запрос 
//   let FrameResponse = document.createElement("div"); // Создаем HTML объект Фрейма
//   FrameResponse.classList.add("FrameResponse"); //Добовляем клас в HTML объект Фрейма
//   FrameResponse["frameName"] = url.replace("./", ""); //Добовляем называния фрейма в HTML объект Фрейма
//   request.open('GET', url); //отправка гет запроса
//   request.send(); // виполнение запроса
//   request.onload = function() { //после загрузки 
//       if (request.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//         console.log(`Ошибка ${request.status}: ${request.statusText}`); // Например, 404: Not Found
//       } else { // если всё прошло гладко, выводим результат
//         //console.log(`Готово, получили ${request.response.length} байт`); // response -- это ответ сервера
//         frameHtml = request.response.replaceAll("./", `./${url.replace("./", "")}/`);
//         FrameResponse.innerHTML =  frameHtml;;//Запись ответа в  HTML объект Фрейма
//         let patternItems = FrameResponse.querySelectorAll(".pattern");
//         patternItems.forEach((pattern)=>{
//           document.querySelector(".patternConteiner").append(pattern);
//         });
//         //FrameResponse = reBuildFrame(FrameResponse);
//       }
//     };
    
//     request.onprogress = function(event) {// прогресс функция
//       if (event.lengthComputable) {
//         //console.log(`Получено ${event.loaded} из ${event.total} байт`);
//       } else {
//         //console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//       }
//     };
    
//     request.onerror = function() {// если ошибка
//       console.log("Запрос не удался"); 
//     };
//   FrameResponseIteam.push(FrameResponse);
//   return FrameResponse;
// }

// //Перебор контейнеров
// patConteinerIteam.forEach((patConteiner)=>{
//   patConteiner["patConName"] = patConName(patConteiner);//Добовляем называния фрейма в HTML объект контейнера
//   urlRequestScripts("./" + patConteiner.patConName); //Отправука запросса с каждого контейнера
//   urlRequestBody("./" + patConteiner.patConName); //Отправука запросса с каждого контейнера

//   // resize(patConteiner);
//    //addFaramsInConteiner(patConteiner);
//   //console.log(FrameResponseIteam);
// });


// //console.log(FrameResponseIteam[0]);


// //function reBuildFrame(frame){
// //   frame.querySelectorAll("meta").forEach((ele)=>{
// //     ele.remove();
// //   });
// //   frame.querySelectorAll("title").forEach((ele)=>{
// //     ele.remove();
// //   });
// //   return frame
// // }

// function addFrameScripts(frame){
//   frame.querySelectorAll("script").forEach((script)=>{
//     script.setAttribute("src", script.src); 
//     document.querySelector("head").append(script);  
//   });
// }


// console.log("frame Work");





//////////////////////////////////////////////////////////Virtual DOM
//// console.log("main Work");
// //scroler


// //Build virtualDOM
// let vHead = document.createElement("head");


// vHead.innerHTML= document.querySelector("head").innerHTML;


// let mainStyle = document.createElement("link");
// mainStyle.setAttribute("rel", "stylesheet");
// mainStyle.setAttribute("href", "./main.css");

// vHead.append(mainStyle);

// let frameScript = document.createElement("script");
// frameScript.setAttribute("src", "./scripts/frames.js");


// let libScript = document.createElement("script");
// libScript.setAttribute("src", "./navBars/main.js");

// vHead.append(frameScript);

// vHead.append(libScript);

// let vBody = document.createElement("body");


// let vHeader = document.createElement("header");
// let vMain = document.createElement("main");
// let vFooter = document.createElement("footer");

// let patternConteiner = document.createElement("div");
// patternConteiner.classList.add("patternConteiner");
// patternConteiner.classList.add("pat-navBars");
// patternConteiner.classList.add("slider");


// vMain.append(patternConteiner);

// vBody.append(vHeader);
// vBody.append(vMain);
// vBody.append(vFooter);

// document.querySelector("head").remove();
// document.querySelector("body").remove();

// let iconScript = document.createElement("script");
// iconScript.setAttribute("scr", "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js");
// iconScript.setAttribute("type", "module");


// vBody.append(iconScript);
// document.querySelector("html").prepend(vHead);
// document.querySelector("html").append(vBody);
