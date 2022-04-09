let gTable = document.querySelector("#teblePrice"); //блок уда вставить на странице

function gParse(){
    let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQF6zQEIWRt3i1ag2pRkDi_naV4tGvTgM5WnLIxjiDCnUnnfHluw3nFZIsKkkbr6HW_QWRr5Ply2BtX/pub?gid=0&single=true&output=csv"; // ссылка на таблицу
    
    let request = new XMLHttpRequest(); //новый запрос 
    request.open('GET', url); //отправка гет запроса
    request.send(); // виполнение запроса
    request.onload = function() { //после загрузки 
        if (request.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
          console.log(`Ошибка ${request.status}: ${request.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
          console.log(`Готово, получили ${request.response.length} байт`); // response -- это ответ сервера
            gTable.innerHTML = request.response; // запись запроса на строницу в блок
        }
      };
      
      request.onprogress = function(event) {// прогресс функция
        if (event.lengthComputable) {
          console.log(`Получено ${event.loaded} из ${event.total} байт`);
        } else {
          console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
        }
      
      };
      
      request.onerror = function() {// если ошибка
        console.log("Запрос не удался"); 
      };
}

// если нужен фрейм заменить в настройках  таблици на веб страницу и убрать все лишнее

gParse();    
