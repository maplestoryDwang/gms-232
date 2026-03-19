function enter() {
    cm.addPopupSay(2155121, 2000, "#face2#去见某个人…难道不是吗? 我为什么要来这里? 呃…", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_310070484_3.js ", 0)
        } else {
            cm.dispose()
        }
    }
};