var mainColor = document.body,
    colorOne = document.getElementById(colorOne),
    colorTwo = document.getElementById(colorTwo),
    colorThree = document.getElementById(colorThree),
    colorFour = document.getElementById(colorFour);



var menuToggle = function() {
  $('.button').click(function() {
    $('.colorPicker').toggle();
  });
};

var colorChanger = function() {
  $('#colorZero').click(function() {
    mainColor.style.background = "white";
  });
  $('#colorOne').click(function() {
    mainColor.style.background = "#C56FE5";
  });
  $('#colorTwo').click(function() {
    mainColor.style.background = "#A9F0E2";
  });
  $('#colorThree').click(function() {
    mainColor.style.background = "#F06381";
  });
  $('#colorFour').click(function() {
    mainColor.style.background = "#5BA0E5";
  });
}

function main() {
  menuToggle();
  colorChanger();
}

$(document).ready(main);
