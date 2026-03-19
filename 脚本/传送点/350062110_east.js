function enter() {
    var a = cm.getMap().getNumMonsters();
    var b = parseInt(cm.getMapId());
    if (a <= 0) {
        if (b == 350062150) {
            cm.updateInfoQuest(33267, "save=3;dir=1");
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
            cm.forceCompleteQuest(33279);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
            cm.getPlayer().scheduleWarpTask(3, b + 20, 0, false)
        } else {
            cm.warp(b + 20, 2, false)
        }
    } else {
        cm.getTopMsgFont("还有敌人没有消灭. ", 3, 20, 20, 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/350062110_east.js ", 0)
        } else {
            cm.dispose()
        }
    }
};