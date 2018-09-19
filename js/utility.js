'use strict';

(function () {

  window.util = {
    getRandomNumber: function (value) {
      return Math.round(Math.random() * value);
    },
    getRandomArrayValue: function (array) {
      return array[this.getRandomNumber(array.length - 1)];
    }
  };

})();
