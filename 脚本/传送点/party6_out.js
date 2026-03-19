function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(-1, "该菜单是至尊版专享。");
        return
    }
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
            if (!cm.isLeader()) {
                cm.getTopMsgFont("还是叫队长过来吧。", 3, 20, 4, 0, 0);
                cm.dispose();
                return
            }
            if (em.getProperty("BOSS_end").equals("1") && cm.haveItem(4001164, 1)) {
                cm.warpParty(930000800, 0)
            } else {
                cm.getTopMsgFont("必须[击杀BOSS]并得到<石头人的毒珠>才能继续前进。", 3, 20, 4, 0, 0)
            }
            cm.dispose()
        }
    }
};