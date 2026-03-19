function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.addPopupSay(1540612, 1000, "呀!抓住它们走不行吗?", "", 0);
    cm.addPopupSay(1540451, 1000, "你不知道怎么小声说话吗?", "", 0);
    cm.addPopupSay(1540611, 1500, "你说什么啊, 现在贝尔说话声音怎么很小了. ", "", 0);
    cm.addPopupSay(1540451, 1000, "......", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/bh_2100talk.js ", 0)
        } else {
            cm.dispose()
        }
    }
};