function enter() {
    if (cm.isQuestActive(39533) && cm.getNumberFromQuestInfo(39533, "pop") == 0) {
        cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face0#僻静处有点骚乱，\r\n发生什么事了？", "", 0);
        cm.updateInfoQuest(39533, "pop=1")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pcs_410000200.js ", 0)
        } else {
            cm.dispose()
        }
    }
};