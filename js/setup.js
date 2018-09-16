'use strict';

(function () {
  var AMOUNT_OF_CHARACTER = 4;
  var RANDOM_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var RANDOM_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var RANDOM_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var RANDOM_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var RANDOM_FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var userPanel = document.querySelector('.setup');

  var getRandomNumber = function (value) {
    return Math.round(Math.random() * value);
  };

  var getRandomArrayValue = function (array) {
    return array[getRandomNumber(array.length - 1)];
  };

  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var getListCharacters = function () {
    var arrayCharacters = [];
    for (var i = 0; i < AMOUNT_OF_CHARACTER; i++) {
      arrayCharacters.push({
        name:
          getRandomArrayValue(RANDOM_NAMES) +
          ' ' +
          getRandomArrayValue(RANDOM_SURNAMES),
        coatColor: getRandomArrayValue(RANDOM_COAT_COLORS),
        eyesColor: getRandomArrayValue(RANDOM_EYES_COLOR)
      });
    }
    return arrayCharacters;
  };

  var listCharacters = getListCharacters();

  var makeWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent =
      wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var listWizards = userPanel.querySelector('.setup-similar-list');
  var fragmentWizards = document.createDocumentFragment();
  for (var i = 0; i < listCharacters.length; i++) {
    fragmentWizards.appendChild(makeWizard(listCharacters[i]));
  }

  listWizards.appendChild(fragmentWizards);
  var similarCharacters = userPanel.querySelector('.setup-similar');
  similarCharacters.classList.remove('hidden');

  // module4
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var panelOpen = function () {
    userPanel.classList.remove('hidden');
    document.addEventListener('keydown', panelEscCloseHandler);
  };

  var panelClose = function () {
    userPanel.classList.add('hidden');
    document.removeEventListener('keydown', panelEscCloseHandler);
  };

  var panelSubmit = function () {
    userPanelSubmit.submit();
  };

  var panelEscCloseHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      panelClose();
    }
  };

  var colorizeWizard = function (colors, tagName, elementProperty, inputName) {
    var randomColorValue = getRandomArrayValue(colors);
    tagName.setAttribute('style', elementProperty + ':' + randomColorValue);
    wizardSetup.querySelector(
        'input[name="' + inputName + '"]'
    ).value = randomColorValue;
  };

  var userPanelOpen = document.querySelector('.setup-open-icon');
  var userPanelClose = document.querySelector('.setup-close');
  var userPanelSubmit = document.querySelector('.setup-submit');

  var wizardSetup = document.querySelector('.setup-player');
  var wizard = wizardSetup.querySelector('.setup-wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireballs = wizardSetup.querySelector('.setup-fireball-wrap');

  userPanelOpen.addEventListener('click', panelOpen);
  userPanelClose.addEventListener('click', panelClose);

  wizardCoat.addEventListener('click', function () {
    colorizeWizard(RANDOM_COAT_COLORS, wizardCoat, 'fill', 'coat-color');
  });

  wizardEyes.addEventListener('click', function () {
    colorizeWizard(RANDOM_EYES_COLOR, wizardEyes, 'fill', 'eyes-color');
  });

  fireballs.addEventListener('click', function () {
    colorizeWizard(RANDOM_FIREBALL_COLOR, fireballs, 'background', 'fireball-color');
  });

  userPanelOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      panelOpen();
    }
  });

  userPanelClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      panelClose();
    }
  });

  userPanelSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      panelSubmit();
    }
  });
})();
