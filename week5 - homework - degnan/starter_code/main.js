// Sidebar 

function sideLearnMore() {
  $('.learnmore').hide();
  $('#learnmoretext').slideDown();
}

// Read More! 

function readMore() {
  $('.readmore').hide();
  $('#show-this-on-click').slideDown();
  $('.readless').show();
}

// Read Less! 

function readLess() {
  $('.readless').hide();
  $('#show-this-on-click').slideUp();
  $('.readmore').show();
}

// Make it Happen 

function makeItHappen() {
  $('a').click(function(event){
    event.preventDefault();
  });

  $('.learnmore').click(sideLearnMore);
  $('.readmore').click(readMore);
  $('.readless').click(readLess);
}

$(document).ready(makeItHappen);