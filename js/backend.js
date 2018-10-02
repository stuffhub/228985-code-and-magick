'use strict';

(function () {
  var createXhr = function (errorMessage, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError(errorMessage, xhr.status);
      }
    });
    return xhr;
  };

  var onErrorDialog = function (statusText, status) {
    var errorDialog = document.createElement('div');
    errorDialog.classList.add('error-dialog');
    errorDialog.textContent = statusText + ' : ' + status;
    document.body.appendChild(errorDialog);
    setTimeout(function () {
      document.body.removeChild(errorDialog);
    }, 4500);
  };

  var load = function (onSuccess, onError) {
    var xhr = createXhr('Ошибка загрузки данных', onSuccess, onError);
    xhr.open('GET', listCharactersUrl);
    xhr.send();
  };

  var save = function (data, onSuccess, onError) {
    var xhr = createXhr('Ошибка отправки данных', onSuccess, onError);
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
