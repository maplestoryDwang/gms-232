function enter() {
    cm.addPopupSay(1540805, 1500, "对#face3#驯龙大师来说，冰山压根不算什么！呼哧呼哧！", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/col02_350110700.js ", 0)
        } else {
            cm.dispose()
        }
    }
};