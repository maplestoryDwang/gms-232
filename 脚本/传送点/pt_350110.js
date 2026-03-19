function start() {
    var a = cm.getMap().getNumMonsters();
    var b = parseInt(cm.getMapId());
    if (b == 350110150) {
        if (a <= 0) {
            cm.getTopMsgFont("先查看下企鹅的情况. ", 3, 20, 20, 0)
        } else {
            cm.getTopMsgFont("还有敌人没有消灭. ", 3, 20, 20, 0)
        }
    } else {
        if (a <= 0) {
            cm.warp(b + 50, 0, false)
        } else {
            cm.getTopMsgFont("还有敌人没有消灭. ", 3, 20, 20, 0)
        }
    }
};