'use strict';

(function () {
  var panelMouseDownHandler = function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var panelMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      window.renderWizard.userPanel.style.top = (window.renderWizard.userPanel.offsetTop - shift.y) + 'px';
      window.renderWizard.userPanel.style.left = (window.renderWizard.userPanel.offsetLeft - shift.x) + 'px';
    };
    var panelMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', panelMouseMoveHandler);
      document.removeEventListener('mouseup', panelMouseUpHandler);
      if (dragged) {
        var clickPreventDefaultHandler = function (evt) {
          evt.preventDefault();
          buttonDraggablePanel.removeEventListener('click', clickPreventDefaultHandler);
        };
        buttonDraggablePanel.addEventListener('click', clickPreventDefaultHandler);
      }
    };
    document.addEventListener('mousemove', panelMouseMoveHandler);
    document.addEventListener('mouseup', panelMouseUpHandler);
  };

  var buttonDraggablePanel = window.renderWizard.userPanel.querySelector('.setup-user-pic').nextElementSibling;
  buttonDraggablePanel.addEventListener('mousedown', panelMouseDownHandler);
})();
