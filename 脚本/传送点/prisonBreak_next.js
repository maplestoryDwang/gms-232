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
            switch (cm.getMapId()) {
                case 921160100:
                    cm.warp(921160200, 4, false);
                    break;
                case 921160200:
                    if (cm.getMap().getNumMonsters() > 0) {
                        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0)
                    } else {
                        cm.warp(921160300, 6, false)
                    }
                    break;
                case 921160350:
                    cm.warp(921160400, 3, false);
                    break;
                case 921160400:
                    if (cm.getMap().getNumMonsters() > 0) {
                        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0)
                    } else {
                        cm.warp(921160500, 4, false)
                    }
                    break;
                case 921160500:
                    cm.warp(921160600, 3, false);
                    break;
                case 921160600:
                    cm.getTopMsgFont("和冒险家对话。", 3, 20, 4, 0, 0);
                    break
            }
            cm.dispose()
        }
    }
};