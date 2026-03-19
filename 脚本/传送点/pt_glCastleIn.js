function enter() {
    cm.openScriptNpc()
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
            cm.askMenu("#b#e<攻城战车歼灭战>#n#k\r\n\r\n那帮翼人军准备了非常厉害的#r攻城战车#k。\r\n只要摧毁他们的#r攻城战车#k，就可以扭转战况！\r\n\r\n#L1# #b进入攻城战车歼灭战。#k#l\r\n#L2# #b返回原先所在地点。#k#l", 4, 3004204)
        } else {
            if (status === a++) {
                cm.askYesNo("去让他们尝尝我们联盟的厉害吧？", 4, 3004204)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.openNpc("荣耀活动_攻城战车歼灭战")
                }
            }
        }
    }
};