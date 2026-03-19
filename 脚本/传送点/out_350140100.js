function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }
    if (cm.getNumberFromQuestInfo(34021, "hero2") < 0) {
        cm.sendNormalTalk_Bottom("#face3#我需要选择两位一起同行的英雄。", 37, 1540805, false, true);
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            cm.sendNormalTalk_Bottom("#face3#这是弗里德托付给我们的最后一战。", 37, 1540805, false, true)
        } else {
            if (status === c++) {
                cm.sendNormalTalk_Bottom("#face3#那大家一起出发吧，向着冒险岛世界！", 37, 1540805, true, true)
            } else {
                if (status === c++) {
                    var b = cm.getNumberFromQuestInfo(34021, "hero1");
                    var a = cm.getNumberFromQuestInfo(34021, "hero2");
                    cm.updateInfoQuest(34008, "0=0;1=0;2=0;3=0;5=0");
                    cm.setNumberForQuestInfo(34008, "" + b, 1);
                    cm.setNumberForQuestInfo(34008, "" + a, 1);
                    cm.dispose();
                    cm.warp(350140150, 0, false);
                    cm.npc_LeaveField("oid=293445540");
                    cm.npc_LeaveField("oid=293445540");
                    cm.npc_LeaveField("oid=293445541");
                    cm.npc_LeaveField("oid=293445541");
                    cm.npc_LeaveField("oid=293445542");
                    cm.npc_LeaveField("oid=293445542");
                    cm.npc_LeaveField("oid=293445543");
                    cm.npc_LeaveField("oid=293445543");
                    cm.npc_LeaveField("oid=293445544");
                    cm.npc_LeaveField("oid=293445544")
                }
            }
        }
    }
};