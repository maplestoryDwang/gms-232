function enter() {
    if (cm.getNumberFromQuestInfo(64088, "coll1") < 1) {
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
            cm.sendNormalTalk_Bottom("#b做得好！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b跟我来！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.playerMessage(-1, "跟着怪物军团移动到树上吧。");
                    cm.updateInfoQuest(64088, "coll1=1");
                    cm.dispose()
                }
            }
        }
    }
};