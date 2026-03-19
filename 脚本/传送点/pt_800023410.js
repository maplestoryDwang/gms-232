function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(-1, "还有怪物没有消灭干净。");
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face1#各位，这边走！", 37, 9111007, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(58758);
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                cm.dispose();
                cm.warp(800023006, 0, false)
            }
        }
    }
};