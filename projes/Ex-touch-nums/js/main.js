'use strict';

var gNums = [];
var gBoardLength = 4;
var gCurrNumIdx = 0;
var gInterval;
var gTime;

function initGame() {
    var nums = [];
    nums = createNums();
    renderBoard(nums);
}

function chooseLevel(level) {
    resetStopper();
    timer.innerText = 'Time : 0.000';
    gBoardLength = level;
    initGame();
}

function resetNum() {
    gNums = [];
    for (var i = 1; i <= gBoardLength ** 2; i++) {
        gNums.push(i);
    }
}

function createNums() {
    resetNum();
    var nums = [];
    for (var i = 0; i < gBoardLength ** 2; i++) {
        nums.push(drawNum());
    }
    return nums;
}

function renderBoard(nums) {
    var currCell = -1;
    var strHtml = `<table border="1" cellpadding="${180/gBoardLength}"><tbody>`;
    for (var i = 0; i < gBoardLength; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < gBoardLength; j++) {
            currCell++
            strHtml += `<td data-idx="${nums[currCell]}" class="emptycell" onclick="checkCell(this)">${nums[currCell]}</td>`;
        }
        strHtml += '</tr>';
    }
    strHtml += '</tbody></table>';
    var elBox = document.querySelector('.box');
    elBox.innerHTML = strHtml;
    gCurrNumIdx = 1;
}

function checkCell(elBtn) {
    var elCell = +elBtn.getAttribute(`data-idx`);
    if (elCell !== gCurrNumIdx) return;
    if (elCell === 1) playStopper();
    elBtn.classList.remove('emptycell');
    elBtn.classList.add('fullcell');
    if (gCurrNumIdx === gBoardLength ** 2) victory();
    else gCurrNumIdx++;  
}

function victory() {
    console.log('Victory!');
    resetStopper();
}

function drawNum() {
    var idx = getRandomInt(0, gNums.length);
    var num = gNums[idx];
    gNums.splice(idx, 1);
    return num;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function playStopper() {
    gTime = new Date();
    gInterval = setInterval(getTime, 50);
}

function getTime() {
    var now = new Date();
    var millisec = now - gTime;
    var printTime;
    if (millisec < 1000) printTime = '0.' + millisec;
    else printTime = (millisec/1000);
    timer.innerText = `Time : ${printTime}`;    
}

function resetStopper() {
    clearInterval(gInterval);
}