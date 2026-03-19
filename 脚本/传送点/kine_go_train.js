function enter() {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    cm.addPopupSay(a, 2000, "不想训练了，去其他地方逛逛吧。")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/kine_go_train.js ", 0)
        } else {
            cm.dispose()
        }
    }
};