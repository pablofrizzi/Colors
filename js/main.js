var colorsArr = ["#FFF", "#C56FE5", "#A9F0E2", "#F06381", "#5BA0E5", "#FFD700", "#1abc9c"];
var colorList = $('#colorList');
var colorToggle = $('.button');

function colorToggleClickEventHandler() {
  $('.colorPicker').toggle();
}

function colorListClickEventHandler(e) {
  if (e.target !== e.currentTarget) {
    document.body.style.background = e.target.style.background;
  }
  e.stopPropagation();
}

function registerEventHandlers() {
  colorToggle.on('click', colorToggleClickEventHandler);
  colorList.on('click', colorListClickEventHandler);
}

function renderMenuElements() {
  colorsArr.forEach(function(color) {
    var element = $('<li>')
      .addClass('colorDot')
      .css('background', color);

    colorList.append(element);
  });
}

function main() {
  renderMenuElements();
  registerEventHandlers();
}

$(document).ready(main);
