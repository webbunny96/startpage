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
  let createMessage = new Event('createMessage', { bubbles: true });
  messBox.dispatchEvent(createMessage);
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
        //btn.classList.add(text.querySelector('.bot-btn-inl').innerHTML);
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
  location.reload();
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
  if (messList.length != 0) {
    let listener = setInterval(() => {
      if (
        messList[messList.length - 1].text.toLowerCase() ==
          text.toLowerCase() &&
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
  },
  style = '',
) {
  let btn = document.createElement('div');
  btn.classList.add('bot-btn-inl');

  if (btnОbj.text.includes(' ')) {
    btn.classList.add(btnОbj.text.replace(/ /g, '-'));
  } else {
    btn.classList.add(btnОbj.text);
  }

  btn.innerText = btnОbj.text;
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

///-----------------------------------------------------------------------

let mainMenu = [
  {
    text: 'License',
  },
  {
    text: 'Company formation',
  },
  {
    text: 'Bank accounts',
  },
  {
    text: 'Merchant and PSP',
  },
  {
    text: 'White label',
  },
  {
    text: 'Trading platform',
  },
  {
    text: 'CRM',
  },
  {
    text: 'Inquiry',
  },
  {
    text: 'Live chat',
  },
  {
    text: 'FAQ',
  },
  {
    text: 'Our team',
  },
  {
    text: 'Go to web',
  },
];

mainMenu.forEach((keyName, i) => {
  mainMenu[i] = createBtn(keyName);
});

///-----------------------------------------------------------------------

let Level2 = [
  ///kategori
  {
    text: 'FX License',
  },
  {
    text: 'Crypto License',
  },
  {
    text: 'Banking License',
  },
  {
    text: 'PSP License',
  },
  {
    text: 'Gambling License',
  },
];

Level2.forEach((keyName, i) => {
  //kategori
  Level2[i] = createBtn(keyName); //kategori
});

let Level3 = [
  ///kategori
  {
    text: 'Fiji Forex License',
  },
  {
    text: 'Hong Kong Forex License',
  },
  {
    text: 'Saint Vincent Forex License',
  },
];

Level3.forEach((keyName, i) => {
  //kategori
  Level3[i] = createBtn(keyName); //kategori
});

let Level4 = [
  ///kategori
  {
    text: 'Taxes',
  },
  {
    text: 'Inquiry',
  },
  {
    text: 'FAQ',
  },
  {
    text: 'Live chat',
  },
];




Level4.forEach((keyName, i) => {
  //kategori
  Level4[i] = createBtn(keyName); //kategori
});

let Level5 = [
  ///kategori
  {
    text: 'Europe',
  },
  {
    text: 'North & South    America',
  },
  {
    text: 'Caribbean',
  },
  {
    text: 'Asia',
  },
  {
    text: 'Africa',
  },
  {
    text: 'Oceania & Pacific Islands',
  },
];

Level5.forEach((keyName, i) => {
  //kategori
  Level5[i] = createBtn(keyName); //kategori
});

let Level6 = [
  ///kategori
  {
    text: 'Europe',
  },
  {
    text: 'Africa',
  },
  {
    text: 'Caribbean',
  },
  {
    text: 'Asia',
  },
  {
    text: 'Oceania & Pacific Islands',
  },
];

Level6.forEach((keyName, i) => {
  //kategori
  Level6[i] = createBtn(keyName); //kategori
});

let Level7 = [
  ///kategori
  {
    text: 'Merchant',
  },
  {
    text: 'Payment gateway',
  },
];

Level7.forEach((keyName, i) => {
  //kategori
  Level7[i] = createBtn(keyName); //kategori
});


let Level8 = [
  ///kategori
  {
    text: 'FINHUB',
  },
  {
    text: 'MT4/MT5',
  },
  {
    text: 'Social trading Platform',
  },
];

Level8.forEach((keyName, i) => {
  //kategori
  Level8[i] = createBtn(keyName); //kategori
});


let Level9 = [
  ///kategori
  {
    text: 'Finhub CRM',
  },
  {
    text: 'Broctagon CRM',
  },
];

Level9.forEach((keyName, i) => {
  //kategori
  Level9[i] = createBtn(keyName); //kategori
});

let messFijiForexLicense =
  '<img src="../menuIcon/FX B2B Hub Telegram mockup - Page 1.jpeg" alt="">Fiji Forex License<br><br>As part of its regulatory responsibilities, the Reserve Bank of Fiji acts as gate-keepers for the respective sectors it supervises.<br>Interested entities who would like to pursue the undertaking of these regulated activities would need to be licensed and/or registered by the Reserve Bank. This applies to the business/activity of: banking (including credit institutions), insurance, restricted foreign exchange dealing, money changer, insurance broker, insurance agent, securities exchange, stock broker, investment advisor, capital raising, credit reporting agency, credit information provider and credit report recipient.<br>The Reserve Bank supervises the Fiji National Provident Fund and the Fiji Development Bank.  The former through the FNPF Act and the latter through the direction of the Minister of Economy under the provisions of the Banking Act.<br>Provided here are the list of licensed entities for the various industries, while a separate section provides the licensing/registration checklists for these different activities.';

sendAnswer(createKeyBoard(mainMenu).outerHTML, 'keyboard');

document.querySelector('.License').addEventListener('click', () => {
  sendAnswer(createKeyBoard(Level2).outerHTML, 'keyboard');
  document.querySelector('.FX-License').addEventListener('click', () => {
    //name btn
    sendAnswer(createKeyBoard(Level3).outerHTML, 'keyboard'); // next menu
    document
      .querySelector('.Fiji-Forex-License')
      .addEventListener('click', () => {
        //name btn
        sendAnswer(messFijiForexLicense + createKeyBoard(Level4).outerHTML); // next menu
        document.querySelector('.Taxes').addEventListener('click', () => {
          //name btn
          sendAnswer(
            'Tax for individuals <br>      Applied to individuals who respond to criteria of tax resident one of which is to be in the country at least 183 days. If an individual is domiciled in the UK, the individual has to impose taxes on worldwide income. Double taxation can be avoided if the corresponding Double Taxation Agreement between jurisdictions is concluded. <br>If an individual is a British resident and has no domicile status, the individual receives a privilege to elude paying tax on foreign income providing that the income is not brought to the UK (remittance). Non-residents pay income tax if it was received in the UK jurisdiction. <br>Income tax<br>Imposed upon salaries, bonuses, pensions, and savings accounts interest. The standard Personal Allowance is £12,570, which is the amount of income you do not have to pay tax on. Your Personal Allowance may be bigger if you claim Marriage '
          ); // next menu
        });
        document.querySelector('.Inquiry').addEventListener('click', () => {
          sendAnswer(
            'Leave your email / ohone and our manager will contact you asap'
          ); // next menu
          console.log('work');
        });
        document.querySelector('.FAQ').addEventListener('click', () => {
          //name btn
          // sendAnswer(
          //   "1. What do you need to obtain a Forex Broker License?<br>Here's a small list for getting a Forex license in any jurisdiction:<br>corporate document regulation;<br>registration of the company;<br>required AML/KYC procedures;<br>state fees;<br>opened corporate bank account;<br>opened merchant account.<br>The docs requirements vary depending on the jurisdiction.<br>2.How much does an FX license cost?<br>Price of the license depends on jurisdiction and market, it starts from $ 5 000.00 up to $ 300 000.00.<br>3. How long does it take to get an FX license?<br>Depends on license from 3 business days to 12 months, depends on jurisdiction and market.<br>4.What is the minimum capital to establish FX brokerage?<br>Here are the main expenses which may be required at the beginning: license application fee, deposit, monthly operational fees, company registration, trading platform, liquidity.<br><br><br>5. How much does a company must freeze for the licence?<br><br>Some licenses, for example  FCA UK requires GBP 730 000 deposit, some offshore licenses does not require any deposit."
          // ); // next menu
        });
        document.querySelector('.Live-chat').addEventListener('click', () => {
          //name btn
          sendAnswer('Direct message to the admin'); // next menu
        });
      });
  });
});


document.querySelector('.Company-formation').addEventListener('click', () => {
  sendAnswer(createKeyBoard(Level5).outerHTML, 'keyboard');
});

document.querySelector('.Bank-accounts').addEventListener('click', () => {
  sendAnswer(createKeyBoard(Level6).outerHTML, 'keyboard');
});

document.querySelector('.Merchant-and-PSP').addEventListener('click', () => {
  sendAnswer(createKeyBoard(Level7).outerHTML, 'keyboard');
});

document.querySelector('.Trading-platform').addEventListener('click', () => {
  sendAnswer(createKeyBoard(Level8).outerHTML, 'keyboard');
});

document.querySelector('.CRM').addEventListener('click', () => {
  sendAnswer(createKeyBoard(Level9).outerHTML, 'keyboard');
});

document.querySelector('.Go-to-web').addEventListener('click', () => {
  window.open('https://www.fxb2bhub.com', '_blank');
});