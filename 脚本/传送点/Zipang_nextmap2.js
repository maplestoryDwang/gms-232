function enter() {
    if (cm.getMapId() == 800021010) {
        if (cm.getNumberFromQuestCustomData(58818) == 3) {
            cm.forceCompleteQuest(62072);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
            cm.warp(800021103, 0, false)
        } else {
            cm.playerMessage(-1, "未能完成佛像修复工作。");
            cm.playerMessage(5, "未能完成佛像修复工作。")
        }
    } else {
        cm.playerMessage(-1, "还有怪物没有消灭干净.");
        cm.playerMessage(5, "还有怪物没有消灭干净.")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/Zipang_nextmap2.js ", 0)
        } else {
            cm.dispose()
        }
    }
};