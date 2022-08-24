let messList = new Array();

let date = new Date();

let findMess = new Array();

let sendBtn = document.querySelector('.send-btn');
let textArea = document.querySelector('input.mess');
let messBox = document.querySelector('main');

if (getHistory('History') == null) {
  messList = [];
}

if (getHistory('History') != null) {
  messList = getHistory('History');
  loadMess(messList);
}

function createMessage(messText, User = 'out') {
  let mess = {
    id: '',
    user: User,
    text: messText,
    time: '',
    status: '',
  };

  textArea.value = '';
  document.querySelector('.img-send-btn').setAttribute('src', './img/mic.png');
  mess.time = date.getHours() + ':' + date.getMinutes();
  messList.push(mess);
  reloadMessBox();
  saveHistory(messList);
}

textArea.addEventListener('change', () => {
  if (textArea.value != '') {
    document
      .querySelector('.img-send-btn')
      .setAttribute('src', './img/sendBtn.png');
  }
});

sendBtn.addEventListener('click', btn => {
  if (textArea.value != '') {
    createMessage(textArea.value);
    //reloadMessBox();
    scrollBottom();
    removeHistory(messList);
    saveHistory(messList);
  }
});

//reloadMessBox();

function loadMess(arr) {
  if (arr.length != 0) {
    //messList.length == 0
    arr.forEach(mess => {
      tempMess = document.createElement('div');
      tempMess.classList.add('messege');
      tempMess.classList.add(mess.user);
      let p = document.createElement('p');
      let text = document.createElement('span');
      text.classList.add('text');
      let time = document.createElement('span');
      time.classList.add('time');
      let status = document.createElement('span');
      status.classList.add('status');

      text.innerHTML = mess.text;
      time.innerHTML = mess.time;

      p.append(text);
      p.append(time);
      p.append(status);

      tempMess.append(p);

      messBox.append(tempMess);
    });
  }
}

function reloadMessBox() {
  if (messList.length != 0) {
    tempMess = document.createElement('div');
    tempMess.classList.add('messege');
    tempMess.classList.add(messList[messList.length - 1].user);

    let p = document.createElement('p');
    let text = document.createElement('span');
    text.classList.add('text');
    let time = document.createElement('span');
    time.classList.add('time');
    let status = document.createElement('span');
    status.classList.add('status');

    text.innerHTML = messList[messList.length - 1].text;
    time.innerHTML = messList[messList.length - 1].time;
    if (messList[messList.length - 1].user == 'keyboard') {
      let buyons = text.querySelectorAll('.bot-btn-inl');
      buyons.forEach(btn => {
        btn.classList.add(text.querySelector('.bot-btn-inl').innerHTML);
      });
    }
    p.append(text);
    p.append(time);
    p.append(status);

    tempMess.append(p);

    messBox.append(tempMess);
    scrollBottom();
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, // get corectly left position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; // get corectly top position
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function scrollBottom() {
  messBox.scrollBy({
    top: 1000000,
    behavior: 'smooth',
  });
}

scrollBottom();

document.querySelector('.mess').addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    if (textArea.value != '') {
      createMessage(textArea.value);
      //reloadMessBox();
      scrollBottom();
      removeHistory(messList);
      saveHistory(messList);
    }
  }
});

textArea.addEventListener(
  'focus',
  () => {
    document
      .querySelector('.img-send-btn')
      .setAttribute('src', './img/sendBtn.png');
  },
  true,
);
textArea.addEventListener(
  'blur',
  () => {
    if (textArea.value == '') {
      document
        .querySelector('.img-send-btn')
        .setAttribute('src', './img/mic.png');
    }
  },
  true,
);

let searhTriger = document.querySelector('.search-triger');
let searhSpan = document.querySelector('.search-btn');
let searchInput = document.querySelector('.search-input');

let search = document.querySelector('.search');

searhSpan.addEventListener('click', () => {
  searhTriger.checked = !searhTriger.checked;
});

searchInput.addEventListener('input', text => {
  findMess = [];
  search.querySelector('.search-num').classList.add('active');
  let newMessList = messBox.querySelectorAll('.messege');
  newMessList.forEach(elem => {
    if (
      elem.querySelector('span.text').innerHTML.toLowerCase() ==
      text.target.value.toLowerCase()
    ) {
      findMess.push(elem);
      document.querySelector('p.num').innerHTML = findMess.length;
      findMess.forEach(elem => {
        elem.classList.add('found');
      });
    }
    if (
      elem.querySelector('span.text').innerHTML.toLowerCase() !=
      text.target.value.toLowerCase()
    ) {
      document.querySelector('p.num').innerHTML = 0;
      findMess.forEach(elem => {
        elem.classList.remove('found');
      });
    }
  });
});

function saveHistory(iteam) {
  localStorage.setItem('History', JSON.stringify(iteam));
}

function getHistory(iteam) {
  return JSON.parse(localStorage.getItem(iteam));
}

function removeHistory(iteam) {
  localStorage.removeItem(iteam);
}

function clearHistory() {
  localStorage.clear();
}

searchInput.addEventListener(
  'blur',
  () => {
    searhTriger.checked = false;
  },
  true,
);

document.querySelector('.emoj').addEventListener('click', () => {
  sendNotify('Emoji временно не доступны');
});

function sendNotify(note) {
  let notif = document.createElement('div');
  notif.classList.add('notify');
  notif.innerHTML = note;
  document.querySelector('body').append(notif);
  document.querySelector('.notify').classList.add('active');
  setTimeout(() => {
    notif.remove();
  }, 5000); //notif.remove()
}

document.querySelector('.add-file').addEventListener('click', () => {
  createContextMenu(
    document.querySelector('.add-file'),
    '<span>Фото или видио</span><span>Документ</span>',
    'display: flex; flex-direction: column; white-space: nowrap;  left: -300%; top: -200%; font-size: 14px;',
  );
});

document.querySelector('.account-information').addEventListener('click', () => {
  createContextMenu(
    document.querySelector('.account-information'),
    '<span style="font-size: 14px;">Бкз звука</span><span style="font-size: 14px;">Добавить</span><span style="font-size: 14px;">Блокировать</span><span style="font-size: 14px;">Удалить</span>',
    'display: flex; flex-direction: column; white-space: nowrap;  left: -400%; top: 100%; font-size: 14px;',
  );
});

function createModal(html) {
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = html;
  document.querySelector('body').append(modal);
}

let ContextMenuBool = false;

function createContextMenu(
  perent = document.querySelector('body'),
  html = '',
  style = '',
  cls = '',
) {
  if (!ContextMenuBool) {
    let ContextMenu = document.createElement('div');
    ContextMenu.classList.add('ContextMenu');
    ContextMenu.classList.add(cls);
    ContextMenu.innerHTML = html;
    ContextMenu.style.cssText = style;
    perent.append(ContextMenu);
    ContextMenuBool = true;
  }
}

document.addEventListener('click', elem => {
  if (
    !elem.target.classList.contains('ContextMenu') &&
    !elem.target.classList.contains('add-file') &&
    !elem.target.parentElement.classList.contains('add-file') &&
    !elem.target.parentElement.parentElement.classList.contains('add-file') &&
    !elem.target.classList.contains('account-information')
  ) {
    delContextMenu();
  }
});

function delContextMenu() {
  if (ContextMenuBool) {
    document.querySelector('.ContextMenu').remove();
    ContextMenuBool = false;
  }
}

function sendAnswer(text, type = 'in') {
  createMessage(text, type);
}

function listenMessage(text = 'none', func = () => {}) {
  if(messList.length !=0 ){
    let listener = setInterval(() => {
      
      if (
        messList[messList.length - 1].text.toLowerCase() == text.toLowerCase() &&
        messList.length != 0 &&
        messList[messList.length - 1].user != 'in'
      ) {
        func();
      }
    }, 500);
  }
}

listenMessage('привет', () => {
  sendAnswer(createKeyBoard(mainMenu).outerHTML, 'keyboard');
});

function openInfo() {
  document.querySelector('.information').classList.toggle('_active');
  document.querySelector('header').classList.toggle('_activeInfo');
  document.querySelector('main').classList.toggle('_activeInfo');
  document.querySelector('footer').classList.toggle('_activeInfo');
}

document.querySelector('header h2').addEventListener('click', openInfo);

document.addEventListener('contextmenu', function (e) {
  if (e.target.classList.contains('messege')) {
    e.preventDefault();
    createContextMenu(
      document.querySelector('body'),
      '<span style="font-size: 14px;">Ответить</span><span style="font-size: 14px;">Копировать</span><span style="font-size: 14px;">Закрепить</span><span style="font-size: 14px;">Переслать</span><span style="font-size: 14px;">Выбрать</span><span style="font-size: 14px;">Удалить</span>',
      'display: flex; flex-direction: column; white-space: nowrap;  left: ' +
        getPosition().x +
        'px; top: ' +
        getPosition().y +
        'px; font-size: 14px;',
      'freeContextMenu',
    );
  }
});

function getPosition(e) {
  var posx = 0;
  var posy = 0;

  if (!e) var e = window.event;

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy,
  };
}

function createBtn(
  btnОbj = {
    text: 'btn',
    clickBtn: '',
  },
  style = '',
) {
  let btn = document.createElement('div');
  btn.classList.add('bot-btn-inl');
  btn.innerText = btnОbj.text;
  // btn.addEventListener("click", (e)=>{
  //   //btnОbj.clickBtn();
  // });
  return btn;
}

function createKeyBoard(btn, stle = '') {
  let keyBoard = document.createElement('div');
  keyBoard.classList.add('keyBoard');
  if (typeof btn === 'object') {
    btn.forEach(elem => {
      keyBoard.append(elem);
    });
  } else {
    keyBoard.append(btn);
  }
  return keyBoard;
}

let mainMenu = [
  {
    text: 'License',
    clickBtn: () => {},
  },
  {
    text: 'Company formation',
    clickBtn: () => {
    },
  },
  {
    text: 'Bank accounts',
    clickBtn: () => {},
  },
  {
    text: 'Merchant and PSP',
    clickBtn: () => {},
  },
  {
    text: 'White label',
    clickBtn: () => {},
  },
  {
    text: 'Trading platform',
    clickBtn: () => {},
  },
  {
    text: 'CRM',
    clickBtn: () => {},
  },
  {
    text: 'Inquiry',
    clickBtn: () => {},
  },
  {
    text: 'Live chat',
    clickBtn: () => {},
  },
  {
    text: 'FAQ',
    clickBtn: () => {},
  },
  {
    text: 'Our team',
    clickBtn: () => {},
  },
  {
    text: 'Go to web',
    clickBtn: () => {},
  },
];

mainMenu.forEach((keyName, i) => {
  mainMenu[i] = createBtn(keyName);
});


// document.querySelector('.' + mainMenu[0].text).addEventListener('click', () => {
//   sendAnswer(createKeyBoard(mainMenu).outerHTML, 'keyboard');
// });
