var colorsArr = ["#FFF", "#C56FE5", "#A9F0E2", "#F06381", "#5BA0E5", "#FFD700", "#1abc9c"];

var menuToggle = function() {
  $('.button').click(function() {
    $('.colorPicker').toggle();
  });
};

var colorList = $('#colorList');

var DOMEvents = function(e) {
  if (e.target !== e.currentTarget) {
    document.body.style.background = e.target.style.background;
  }
  e.stopPropagation();
}

var colorChanger = function() {
  colorList.on('click', DOMEvents)
}

var appendColor = function() {
  colorsArr.forEach(function(color){
    var element = $('<li>')
      .addClass('colorDot')
      .css('background', color);

    colorList.append(element);
  });
}

function main() {
  menuToggle();
  appendColor();
  colorChanger();
}

$(document).ready(main);
