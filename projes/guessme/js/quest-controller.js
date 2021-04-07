'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  createQuestsTree();
}

function onStartGuessing() {
  // hide the game-start section
  $('.game-start').hide('fade');
  renderQuest();
  // show the quest section
  $('.quest').show('fade');
}

function renderQuest() {
  // select the <h2> inside quest and update
  var currQuest = getCurrQuest();
  $('.quest h2').text(currQuest.txt);
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  // If this node has no children
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      // alert('Yes, I knew it!');
      // improve UX
      $('.modal').show();
      $('.quest').hide('fade');
    } else {
      // alert('I dont know...teach me!');
      // hide and show new-quest section
      $('.quest').hide('fade');
      $('.new-quest').show('fade');
    }
  } else {
    // update the lastRes global var
    gLastRes = res;
    moveToNextQuest(gLastRes);
    renderQuest();
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  // Get the inputs' values
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();
  // Call the service addGuess
  addGuess(newQuest, newGuess, gLastRes)
  restartGame();
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  setTimeout(function(){$('.game-start').show()}, 3000);
  gLastRes = null;
}
