function enter() {
    if (cm.isQuestFinished(64079) && cm.getNumberFromQuestInfo(64080, "chk3") == 0) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(64080, "chk1=0;chk2=1;chk3=1");
            cm.addPopupSay(9400580, 2000, "#face0#到那上面去看看吧？", "", 0);
            cm.addPopupSay(9400580, 2000, "#face0#幸好不用睡在冰面上了。", "", 0);
            cm.dispose()
        }
    }
};