$(document).ready(function () {
  
  var $head = $('head link:first');
  
  $('.font-button').on('click', function () {

    // Get and format field input
    var fontFieldInput = $('#exampleInput').val().trim();
    var splitInput = fontFieldInput.split(' ');
    
    // Capitalize first letter of each word from the input
    var capitalizedArray = [];
    for (var i = 0; i < splitInput.length; i++) {
      var capitalized = splitInput[i].substr(0, 1).toUpperCase() + splitInput[i].substr(1);
      capitalizedArray.push(capitalized);
    }

    // Form 2 different strings for 2 differnt purposes
    var fontName = capitalizedArray.join(' ');
    var linkFontName = capitalizedArray.join('+');
    var fontLinkBase = "https://fonts.googleapis.com/css?family=";
    var fontLinkUrl = fontLinkBase + linkFontName;
    
    // Inject into HTML to change font
    $head.attr('href', fontLinkUrl);
    $('.main-text').css('font-family', fontName);
  })
});