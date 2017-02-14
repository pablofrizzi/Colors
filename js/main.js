var mainColor = document.body;

var menuToggle = function() {
  $('.button').click(function() {
    $('.colorPicker').toggle();
  });
};

var colorsArr = [
  {
    id: "colorZero",
    color: "white"
  },
  {
    id: "colorOne",
    color: "#C56FE5"
  },
  {
    id: "colorTwo",
    color: "#A9F0E2"
  },
  {
    id: "colorThree",
    color: "#F06381"
  },
  {
    id: "colorFour",
    color: "#5BA0E5"
  },
  {
    id: "colorFive",
    color: "gold"
  }
];

var colorList = $('#colorList');

var colorChanger = function() {
  colorsArr.forEach(function(color){
    var element = $('<li>')
      .addClass('colorDot')
      .attr('id', color.id)
      .css('background', color.color)
      .click(function(){
        mainColor.style.background = color.color;
      });

    colorList.append(element);
  });
}

function main() {
  menuToggle();
  colorChanger();
}

$(document).ready(main);
