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

  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var listCharacters = [];

  for (var i = 0; i < AMOUNT_OF_CHARACTER; i++) {
    listCharacters.push({
      name:
        RANDOM_NAMES[getRandomNumber(0, RANDOM_NAMES.length - 1)] +
        RANDOM_SURNAMES[getRandomNumber(0, RANDOM_SURNAMES.length - 1)],
      coatColor:
        RANDOM_COAT_COLORS[getRandomNumber(0, RANDOM_COAT_COLORS.length - 1)],
      eyesColor:
        RANDOM_EYES_COLOR[getRandomNumber(0, RANDOM_EYES_COLOR.length - 1)]
    });
  }

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
  for (var j = 0; j < listCharacters.length; j++) {
    fragmentWizards.appendChild(makeWizard(listCharacters[j]));
  }

  listWizards.appendChild(fragmentWizards);
  var similarCharacters = userPanel.querySelector('.setup-similar');
  similarCharacters.classList.remove('hidden');
})();
