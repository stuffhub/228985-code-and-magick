'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_GAP = GAP * 2;
var TITLE_Y = CLOUD_Y + TITLE_GAP;
var GRAPH_HEIGHT = 150;
var GRAPH_WIDTH = 40;
var GRAPH_GAP = 50;
var OWN_GRAPH_COLOR = 'rgba(255, 0, 0, 1)';

var drawTable = function (context, x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxValue = function (timesArray) {
  var maxValue = 0;
  for (var i = 0; i < timesArray.length; i++) {
    if (timesArray[i] > maxValue) {
      maxValue = timesArray[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, players, times) {
  drawTable(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  drawTable(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GRAPH_GAP, TITLE_Y);
  ctx.fillText('Список результатов:', CLOUD_X + GRAPH_GAP, TITLE_Y + TITLE_GAP);

  var maxTime = getMaxValue(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
        players[i],
        CLOUD_X + GRAPH_GAP + (GRAPH_WIDTH + GRAPH_GAP) * i,
        CLOUD_HEIGHT - GAP
    );
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GRAPH_GAP + (GRAPH_WIDTH + GRAPH_GAP) * i,
        CLOUD_HEIGHT - TITLE_Y - GAP - (GRAPH_HEIGHT * times[i]) / maxTime
    );
  }
  for (var j = 0; j < players.length; j++) {
    if (players[j] === 'Вы') {
      ctx.fillStyle = OWN_GRAPH_COLOR;
    } else if (times[j] === maxTime) {
      ctx.fillStyle = 'rgba(0, 0, 204, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 204, 0.' + Math.round(times[j] / 100) + ')';
    }
    ctx.fillRect(
        CLOUD_X + GRAPH_GAP + (GRAPH_WIDTH + GRAPH_GAP) * j,
        CLOUD_HEIGHT - TITLE_Y - (GRAPH_HEIGHT * times[j]) / maxTime,
        GRAPH_WIDTH,
        (GRAPH_HEIGHT * times[j]) / maxTime
    );
  }
};
