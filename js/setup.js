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

  var userPanel = document.querySelector('.setup');
  userPanel.classList.remove('hidden');

  var getRandomNumber = function (value) {
    return Math.round(Math.random() * value);
  };

  var getRandomValue = function (array) {
    var arrayLength = array.length - 1;
    return array[getRandomNumber(arrayLength)];
  };

  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var getListCharacters = function () {
    var arrayCharacters = [];
    for (var i = 0; i < AMOUNT_OF_CHARACTER; i++) {
      arrayCharacters.push({
        name: getRandomValue(RANDOM_NAMES) + ' ' + getRandomValue(RANDOM_SURNAMES),
        coatColor: getRandomValue(RANDOM_COAT_COLORS),
        eyesColor: getRandomValue(RANDOM_EYES_COLOR)
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
})();
