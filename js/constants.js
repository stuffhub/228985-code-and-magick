'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;
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

  window.constants = {
    AMOUNT_OF_CHARACTER: AMOUNT_OF_CHARACTER,
    RANDOM_NAMES: RANDOM_NAMES,
    RANDOM_SURNAMES: RANDOM_SURNAMES,
    RANDOM_COAT_COLORS: RANDOM_COAT_COLORS,
    RANDOM_EYES_COLOR: RANDOM_EYES_COLOR,
    RANDOM_FIREBALL_COLOR: RANDOM_FIREBALL_COLOR,
    ENTER_KEYCODE: ENTER_KEYCODE,
    ESC_KEYCODE: ESC_KEYCODE
  };
})();
