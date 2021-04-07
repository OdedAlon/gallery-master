'use strict';

var gQuests;
var gCurrQuestIdx = 0;

function initGame() {
    gQuests = createQuests();
    renderQuest();
}

function createQuests() {
    var quests = [
        {id: 1, opts:['הרב עובדיה יוסף', 'הרב יצחק ניסים', 'הרב מרדכי אליהו'], correctOptIndex:0 },
        {id: 2, opts:['הרב אברהם אלקנה שפירא', 'הרב יוסף שלום אלישיב', 'הרב משה פיינשטיין'], correctOptIndex:1 }
        ];
        return quests; 
}

function renderQuest() {
    var strHtml = '';
    strHtml = `<img style="width:500px" src="imj/${gCurrQuestIdx}.jpg"></img>
    <br><br><br><br>`;
    
    var currQuest = gQuests[gCurrQuestIdx];
    for (var i = 0; i < currQuest.opts.length; i++) {
        strHtml += renderBtn(i);
    }


    var elBox = document.querySelector('.box');
    elBox.innerHTML = strHtml;
}

function renderBtn(btnIdx) {
    var btnAns = gQuests[gCurrQuestIdx].opts[btnIdx];
    var btnHtml = `<button data-btnIdx="${btnIdx}" onclick="btnClick(${btnIdx})">${btnAns}</button>`;
    return btnHtml;
}

function btnClick(btnIdx) {
   if (checkAnswer(btnIdx)) {
       gCurrQuestIdx++;
       if (gCurrQuestIdx < gQuests.length) renderQuest();
       else {
        var elModal = document.querySelector('.modal');
        elModal.style.display = "block";
       }
   }
}

function checkAnswer(optIdx) {
    return (optIdx === gQuests[gCurrQuestIdx].correctOptIndex);
}

function restartGame() {
    gCurrQuestIdx = 0;
    renderQuest();
    var elModal = document.querySelector('.modal');
    elModal.style.display = "none";
}