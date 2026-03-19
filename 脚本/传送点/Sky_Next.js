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
                cm.getTopMsgFont("叫队长过来。", 3, 20, 4, 0, 0)
            } else {
                if (cm.getPlayer().getParty() != null && cm.getMap().getNumMonsters() == 0) {
                    if (cm.getMapId() == 240080100) {
                        cm.warpParty(240080200, 1)
                    } else {
                        if (cm.getMapId() == 240080200) {
                            cm.warpParty(240080300, 2)
                        } else {
                            if (cm.getMapId() == 240080300) {
                                cm.warpParty(240080400, 2)
                            } else {
                                if (cm.getMapId() == 240080400) {
                                    cm.warpParty(240080500, 1)
                                }
                            }
                        }
                    }
                } else {
                    cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0)
                }
            }
            cm.dispose()
        }
    }
};