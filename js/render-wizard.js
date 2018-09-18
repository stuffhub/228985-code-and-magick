'use strict';

(function () {
  var getListCharacters = function () {
    var arrayCharacters = [];
    for (var i = 0; i < window.util.AMOUNT_OF_CHARACTER; i++) {
      arrayCharacters.push({
        name:
          window.util.getRandomArrayValue(window.util.RANDOM_NAMES) +
          ' ' +
          window.util.getRandomArrayValue(window.util.RANDOM_SURNAMES),
        coatColor: window.util.getRandomArrayValue(
            window.util.RANDOM_COAT_COLORS
        ),
        eyesColor: window.util.getRandomArrayValue(
            window.util.RANDOM_EYES_COLOR
        )
      });
    }
    return arrayCharacters;
  };

  var makeWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent =
      wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var userPanel = document.querySelector('.setup');

  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var listCharacters = getListCharacters();

  var listWizards = userPanel.querySelector('.setup-similar-list');
  var fragmentWizards = document.createDocumentFragment();

  for (var i = 0; i < listCharacters.length; i++) {
    fragmentWizards.appendChild(makeWizard(listCharacters[i]));
  }

  listWizards.appendChild(fragmentWizards);
  var similarCharacters = userPanel.querySelector('.setup-similar');
  similarCharacters.classList.remove('hidden');

  window.renderWizard = {
    userPanel: userPanel
  };
})();
