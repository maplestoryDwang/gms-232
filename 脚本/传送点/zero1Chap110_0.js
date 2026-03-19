function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askText("#b(说出咒语才会开的神秘之门，咒语是什么呢？)", "", 2420041, 0, 1000)
        } else {
            if (status === a++) {
                cm.dispose();
                var d = cm.getText();
                if (d.equals("芝麻开门")) {
                    cm.playerMessage(5, "说出了暗号，被一股神秘的力量带进了洞内。");
                    cm.warp(322090120, 1, false)
                } else {
                    cm.sendOk("#b(毫无反应。看来咒语不对。)", 2420041)
                }
            }
        }
    }
};