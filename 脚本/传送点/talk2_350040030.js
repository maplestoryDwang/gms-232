function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.addPopupSay(1540503, 1000, "嗯嗯……你们有没有闻到什么味道?", "", 0);
    cm.addPopupSay(1540504, 1000, "我什么都没有闻到啊, 哥哥. ", "", 0);
    cm.addPopupSay(1540503, 1000, "不, 明明就有味道. 犯人肯定是古皮哥哥. ", "", 0);
    cm.addPopupSay(1540502, 1000, "……不是我. ", "", 0);
    cm.addPopupSay(1540503, 1000, "没关系的, 哥哥. 这是非常正常的事情. 你只要把它当做是屁股在呼吸就行了!", "", 0);
    cm.addPopupSay(1540504, 1000, "……哥哥们又开始了. ", "", 0);
    cm.spawnMobLimit(8240056, 1, -41, -2252, 10);
    cm.spawnMobLimit(8240056, 1, 94, -2252, 10)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/talk2_350040030.js ", 0)
        } else {
            cm.dispose()
        }
    }
};