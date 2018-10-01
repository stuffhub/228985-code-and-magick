'use strict';

(function () {
  var onErrorDialog = function (statusText, status) {
    var errorDialog = document.createElement('div');
    errorDialog.style.width = window.constants.ErrorDialog.WIDTH;
    errorDialog.style.height = window.constants.ErrorDialog.HEIGHT;
    errorDialog.style.backgroundColor = window.constants.ErrorDialog.BACKGROUND;
    errorDialog.style.textAlign = window.constants.ErrorDialog.TEXT_ALIGN;
    errorDialog.style.paddingTop = window.constants.ErrorDialog.PADDING_TOP;
    errorDialog.style.position = window.constants.ErrorDialog.POSITION;
    errorDialog.style.top = window.constants.ErrorDialog.TOP;
    errorDialog.style.left = window.constants.ErrorDialog.LEFT;
    errorDialog.style.color = window.constants.ErrorDialog.COLOR;
    errorDialog.style.zIndex = window.constants.ErrorDialog.Z_INDEX;
    errorDialog.style.marginLeft = window.constants.ErrorDialog.MARGIN_LEFT;
    errorDialog.textContent = statusText + ' : ' + status;
    document.body.appendChild(errorDialog);
    setTimeout(function () {
      document.body.removeChild(errorDialog);
    }, 4500);
  };
  var load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Ошибка загрузки данных', xhr.status);
      }
    });
    xhr.open('GET', listCharactersUrl);
    xhr.send();
  };

  var save = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Ошибка отправки данных', xhr.status);
      }
    });
    xhr.open('POST', uploadFormUrl);
    xhr.send(data);
  };

  var listCharactersUrl = 'https://js.dump.academy/code-and-magick/data';
  var uploadFormUrl = 'https://js.dump.academy/code-and-magick';

  window.backend = {
    load: load,
    save: save,
    onErrorDialog: onErrorDialog
  };
})();
