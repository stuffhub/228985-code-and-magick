'use strict';

(function () {
  var colorizeWizard = function (colors, tagName, elementProperty, inputName) {
    var randomColorValue = window.util.getRandomArrayValue(colors);
    tagName.setAttribute('style', elementProperty + ':' + randomColorValue);
    wizardSetup.querySelector(
        'input[name="' + inputName + '"]'
    ).value = randomColorValue;
  };

  var wizardSetup = document.querySelector('.setup-player');
  var wizard = wizardSetup.querySelector('.setup-wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireballs = wizardSetup.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    colorizeWizard(
        window.constants.RANDOM_COAT_COLORS,
        wizardCoat,
        'fill',
        'coat-color'
    );
  });

  wizardEyes.addEventListener('click', function () {
    colorizeWizard(
        window.constants.RANDOM_EYES_COLOR,
        wizardEyes,
        'fill',
        'eyes-color'
    );
  });

  fireballs.addEventListener('click', function () {
    colorizeWizard(
        window.constants.RANDOM_FIREBALL_COLOR,
        fireballs,
        'background',
        'fireball-color'
    );
  });
})();
