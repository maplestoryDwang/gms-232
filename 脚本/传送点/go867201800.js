function enter() {
    if (cm.isQuestFinished(64084)) {
        cm.openNpc(0, "副本_莫奈德_Act2_探索森林五")
    } else {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action55(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#b(艾丽卡还在下面，我不能离远了。) ", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};