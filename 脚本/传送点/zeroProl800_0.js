function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(40003)) {
        cm.warp(321000900, 0, false)
    } else {
        cm.playerMessage(5, "走到外边无法查看卷轴，别人进来之前还是先查看一下卷轴的内容。");
        cm.playerMessage(-1, "走到外边无法查看卷轴，别人进来之前还是先查看一下卷轴的内容。")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/zeroProl800_0.js ", 0)
        } else {
            cm.dispose()
        }
    }
};