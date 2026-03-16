var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.playerMessage(5, "这个地图进入触发事件的脚本尚未修复。脚本位于： 脚本/地图/首位进入地图/Fenter_867136520.js");
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};