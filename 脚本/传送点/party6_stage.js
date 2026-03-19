function enter() {
    cm.openScriptNpc()
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
            switch (cm.getMapId()) {
                case 930000000:
                    cm.warp(930000100, 0);
                    break;
                case 930000100:
                    if (cm.getMap().getNumMonsters() > 0) {
                        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0)
                    } else {
                        cm.warp(930000200, 0, false)
                    }
                    break;
                case 930000200:
                    if (em.getProperty("spine_end").equals("1") && cm.haveItem(4001162, 1)) {
                        cm.warp(930000300, 0);
                        cm.removeAll(4001162)
                    } else {
                        cm.getTopMsgFont("必须[净化尖刺]并得到<稀释的毒素>才能继续前进。", 3, 20, 4, 0, 0)
                    }
                    break
            }
            cm.dispose()
        }
    }
};