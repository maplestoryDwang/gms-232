function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.addPopupSay(1540455, 1500, "哥哥, 那个反抗者中叫做韩利泰的家伙……你还记得吗?", "", 0);
    cm.addPopupSay(1540456, 1000, "哥哥……!韩利泰就在我们后面啊……", "", 0);
    cm.addPopupSay(1540455, 1000, "什么?!他拿掉小熊面具之后, 是长那个样子的?!?", "", 0);
    cm.addPopupSay(1540456, 1000, "哥哥……你说的是切奇……", "", 0);
    cm.addPopupSay(1540612, 1000, "哈啊……那家伙果然是鸡……", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/bh_1250talk.js ", 0)
        } else {
            cm.dispose()
        }
    }
};