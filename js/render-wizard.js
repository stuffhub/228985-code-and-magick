'use strict';

(function () {

  var makeWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent =
      wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var userPanel = document.querySelector('.setup');
  var fragmentWizards = document.createDocumentFragment();
  var listWizards = userPanel.querySelector('.setup-similar-list');

  var dataSuccessHandler = function (wizards) {
    for (var i = 0; i < window.constants.AMOUNT_OF_CHARACTER; i++) {
      fragmentWizards.appendChild(makeWizard(wizards[i]));
    }
    listWizards.appendChild(fragmentWizards);
  };

  window.backend.load(dataSuccessHandler, window.backend.onErrorDialog);

  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var similarCharacters = userPanel.querySelector('.setup-similar');
  similarCharacters.classList.remove('hidden');

  window.renderWizard = {
    userPanel: userPanel
  };
})();
