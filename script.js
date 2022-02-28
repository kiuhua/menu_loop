$(document).ready(function ($) {
	// looping through the menu
	menuLoop();
});

function menuLoop() {
  if ($('#content').hasClass('front')) {
    // get the first item from menu list
    beginLoop = $('#content_left_menu li').first().children().attr("href");
    // get next item on list based of the current active item
    loopLink = $('#content_left_menu .active').next().children().attr("href");

    if (loopLink !== undefined) {
      window.setTimeout(function() {
        window.location.href = URL + loopLink;
      }, 25000); // 25000
    } else {
      if (beginLoop !== undefined) {
        window.setTimeout(function() {
          window.location.href = URL + beginLoop;
        }, 25000); // 25000
      }

    }
  }
}
