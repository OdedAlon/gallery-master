'use strict';
const KEY = 'questsTree';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    var questsTree = loadFromStorage(KEY)
    if (!questsTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    } else gQuestsTree = questsTree;
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;

}

function createQuest(txt, yes = null, no = null) {
    return {
        txt,
        yes,
        no,
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest;
    gCurrQuest = gPrevQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // Create and Connect the 2 Quests to the quetsions tree
    console.log(gCurrQuest)
    gPrevQuest[lastRes] = createQuest(newQuestTxt, createQuest(newGuessTxt), gCurrQuest);
    // if (lastRes.yes.txt === gCurrQuest.txt) {
    //     lastRes.yes = createQuest(newQuestTxt, createQuest(newGuessTxt), gCurrQuest);
    // } else lastRes.no = createQuest(newQuestTxt, createQuest(newGuessTxt), gCurrQuest);
    saveToStorage(KEY, gQuestsTree);
}

function getCurrQuest() {
    return gCurrQuest
}

function restartGame() {
    gQuestsTree = loadFromStorage(KEY);
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}


