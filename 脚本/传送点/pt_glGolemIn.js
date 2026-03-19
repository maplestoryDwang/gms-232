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
            cm.askMenu("#b#e<魔法泥人修炼场>#n#k\r\n你来了，勇士。\r\n我们联盟必须时刻保持#r最强战斗力#k。\r\n#L1# #b进入魔法修炼场。#k#l\r\n#L2# #b返回原先所在地点。#k#l", 4, 3003564)
        } else {
            if (status === a++) {
                if (b == 2) {
                    cm.dispose();
                    cm.warp(cm.getNumberFromQuestInfo(100313, "rMap"), 0);
                    return
                }
                cm.askYesNo("要进入#b魔法泥人修炼场#k吗？", 4, 3003564)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(10313, "point=0");
                    cm.dispose();
                    cm.openNpc("荣耀活动_魔法泥人修炼场")
                }
            }
        }
    }
};