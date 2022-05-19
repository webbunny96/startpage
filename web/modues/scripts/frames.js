
let slider = document.querySelectorAll(".slider");

function addFrame(url){
    let frameName = url.replaceAll("index","").replaceAll(".","").replaceAll("/","").replaceAll("html","");
    let sliderNavbars = document.querySelector(".slider." + frameName);
    
    function urlParse(url){ 
        let request = new XMLHttpRequest(); //новый запрос 
        request.open('GET', url); //отправка гет запроса
        request.send(); // виполнение запроса
        request.onload = function() { //после загрузки 
            if (request.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
              console.log(`Ошибка ${request.status}: ${request.statusText}`); // Например, 404: Not Found
            } else { // если всё прошло гладко, выводим результат
              //console.log(`Готово, получили ${request.response.length} байт`); // response -- это ответ сервера
              getBodyResponse(request.response);
            }
          };
          
          request.onprogress = function(event) {// прогресс функция
            if (event.lengthComputable) {
              //console.log(`Получено ${event.loaded} из ${event.total} байт`);
            } else {
              //console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
            }
          };
          
          request.onerror = function() {// если ошибка
            console.log("Запрос не удался"); 
          };
    }
  
    function getBodyResponse(response){
      let frame = document.createElement("div")
      frame.classList.add("frame");
      frame.innerHTML = response.replaceAll("./", "./" + frameName + "/");
      resize(frame);
      frame["nameFrame"] = frameName;
      //slider.append(frame);
      appendFrame(frame);
    }
  
    function resize(frame) {
      if (frame.querySelector("main")) {
        frame.querySelector("main").style.height = "100%";
      }else{
        alert("Module: '" + frameName +"' hasn't main tag");
      }
    }
    urlParse(url);
  }
  
  let modulesIteam = document.querySelectorAll(".module");
  
  function parsClassList(elem) {
    elem.classList.forEach(cls => {
      if (cls.includes("mdl-")) {
        let className = cls.replace("mdl-", "");
        if (className.includes("navBars") || className.includes("animations") ) { //debug
          addFrame("./" + className + "/index.html");
        } 
      }
    });
  }
  
  console.log(slider);

  function appendFrame(elem){
    
    slider.forEach(element => {
      if (elem.nameFrame == frameName) {
        element.append(elem);
      }
    });
  }

  modulesIteam.forEach(elem => {
      parsClassList(elem);
  });
  