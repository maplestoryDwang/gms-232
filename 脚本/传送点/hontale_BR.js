function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0);
        cm.dispose();
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
                case 240060002:
                    cm.warp(240060102, 1, false);
                    cm.dispose();
                    break;
                case 240060102:
                    cm.warp(240060300, 0, false);
                    cm.dispose();
                    break;
                case 240060000:
                    cm.warp(240060100, 1, false);
                    cm.dispose();
                    break;
                case 240060100:
                    cm.warp(240060200, 0, false);
                    cm.dispose();
                    break;
                case 240060001:
                    cm.warp(240060101, 1, false);
                    cm.dispose();
                    break;
                case 240060101:
                    cm.warp(240060201, 0, false);
                    cm.dispose();
                    break
            }
            cm.dispose()
        }
    }
};