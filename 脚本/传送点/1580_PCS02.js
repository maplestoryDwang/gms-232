function enter() {
    if (cm.isQuestFinished(64079) && cm.getNumberFromQuestInfo(64080, "chk2") == 0) {
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
            cm.updateInfoQuest(64080, "chk1=0;chk2=1");
            cm.addPopupSay(9400580, 2000, "#face0#夕阳把一切都染成了粉红色呢。", "", 0);
            cm.addPopupSay(9400580, 2000, "#face3#如果是平常肯定会很美……但现在我只能想到“恶心的粉红触手”了！", "", 0);
            cm.dispose()
        }
    }
};