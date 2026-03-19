function enter() {
    switch (cm.getMapId()) {
        case 993162400:
            cm.onActionBarResult(6, 47);
            cm.warp(993162027, 0, false);
            break;
        case 993162500:
        case 993162600:
        case 993162900:
        case 993163000:
            if (cm.getMap().getNumMonsters() > 0) {
                cm.getTopMsgFont("你必须消灭区域内的所有怪物,才能进入下一个关卡。", 3, 20, 20, 0, 0);
                cm.playerMessage(5, "请先消灭区域里的所有怪物。")
            } else {
                cm.warp(cm.getMapId() + 100, 1, false)
            }
            break;
        case 993162700:
            if (cm.getMap().getNumMonsters() > 0) {
                cm.getTopMsgFont("你必须消灭区域内的所有怪物,才能进入下一个关卡。", 3, 20, 20, 0, 0);
                cm.playerMessage(5, "请先消灭区域里的所有怪物。")
            } else {
                cm.warp(993162029, 0, false)
            }
            break;
        case 993162800:
            cm.onActionBarResult(6, 47);
            cm.warp(993162038, 0, false);
            break;
        case 993163100:
            if (cm.getMap().getNumMonsters() > 0) {
                cm.getTopMsgFont("你必须消灭区域内的所有怪物,才能进入下一个关卡。", 3, 20, 20, 0, 0);
                cm.playerMessage(5, "请先消灭区域里的所有怪物。")
            } else {
                cm.warp(993162043, 0, false)
            }
            break
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/adele_next.js ", 0)
        } else {
            cm.dispose()
        }
    }
};