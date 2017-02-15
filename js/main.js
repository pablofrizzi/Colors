var mainColor = document.body;

var menuToggle = function() {
  $('.button').click(function() {
    $('.colorPicker').toggle();
  });
};

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
  }
];

var colorList = $('#colorList');

var colorChanger = function() {
  colorsArr.forEach(function(color){
    var element = $('<li>')
      .addClass('colorDot')
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
