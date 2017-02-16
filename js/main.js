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
      .css('background', color.color);

    colorList.append(element);
  });
}

function main() {
  menuToggle();
  appendColor();
  colorChanger();
}

$(document).ready(main);

var colorsArr = [
  {
    color: "white"
  },
  {
    color: "#C56FE5"
  },
  {
    color: "#A9F0E2"
  },
  {
    color: "#F06381"
  },
  {
    color: "#5BA0E5"
  },
  {
    color: "gold"
  },
  {
    color: "#1abc9c"
  },
  {
    color: ""
  }
];
