'use strict';

(function () {
  var panelOpen = function () {
    window.renderWizard.userPanel.classList.remove('hidden');
    document.addEventListener('keydown', panelEscCloseHandler);
  };

  var panelClose = function () {
    window.renderWizard.userPanel.classList.add('hidden');
    document.removeEventListener('keydown', panelEscCloseHandler);
  };

  var panelSubmit = function () {
    userPanelForm.submit();
  };

  var panelEscCloseHandler = function (evt) {
    if (evt.keyCode === window.constants.ESC_KEYCODE) {
      panelClose();
    }
  };

  var userPanelOpen = document.querySelector('.setup-open-icon');
  var userPanelClose = document.querySelector('.setup-close');
  var userPanelSubmit = document.querySelector('.setup-submit');
  var userPanelForm = document.querySelector('.setup-wizard-form');

  userPanelOpen.addEventListener('click', panelOpen);
  userPanelClose.addEventListener('click', panelClose);

  userPanelOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      panelOpen();
    }
  });

  userPanelClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      panelClose();
    }
  });

  userPanelSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      panelSubmit();
    }
  });
})();
