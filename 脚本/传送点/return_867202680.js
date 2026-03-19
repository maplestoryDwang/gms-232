function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (cm.isQuestActive(64109)) {
                cm.dispose();
                cm.warp(867202620, 0)
            } else {
                if (cm.isQuestActive(64123)) {
                    cm.askMenu_Bottom("#face0#额啊啊啊啊！赶紧！快消灭掉！#b\r\n#L0#现在立刻出发吧。#l\r\n#L1#稍作整顿后再出发吧。#l", 36, 9400590)
                } else {
                    cm.dispose();
                    cm.sendOkS_Bottom("#b（现在不是乱跑的时候啊。）")
                }
            }
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(867202700, 0, false)
                }
                cm.dispose()
            }
        }
    }
};