function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getMap().getNumMonsters() > 0) {
        cm.playerMessage(-1, "必须消灭掉所有怪物，继续向深处前进。");
        cm.playerMessage(5, "剩余怪物数量：" + cm.getMap().getNumMonsters() + "");
        return
    } else {
        if (cm.getQuestStatus(38021) == 1) {
            cm.forceStartQuest(38021, "clear");
            cm.playerMessage(1, "已完成任务,请休息一下吧!请等待刷新任务...留意头顶书本")
        } else {
            cm.warp(940200050, 0, false)
        }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/940200040_east00.js ", 0)
        } else {
            cm.dispose()
        }
    }
};