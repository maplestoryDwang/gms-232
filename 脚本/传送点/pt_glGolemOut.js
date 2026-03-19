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
    var a = cm.getNumberFromQuestInfo(100313, "point");
    (f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            var b = cm.getNumberFromQuestInfo(500796, "record");
            cm.setNumberForQuestInfo(500796, "record", Math.max(b, a));
            cm.askMenu("#b#e<魔法泥人修炼场>#n#k\r\n你完成修炼回来了。辛苦了。\r\n\r\n#e得分：#n#b#e" + a + "分#n#k" + (a > b ? "    #r#e（刷新纪录！）" : "") + "#n#k\r\n#b#L0# 领取奖励。#k #e（" + Math.floor(a / 10) + "个荣耀币）#n#l\r\n#L1# #b再次挑战。#k#l\r\n#L2# #b返回原先所在地点。#k#l", 4, 3003564)
        } else {
            if (status === c++) {
                if (d == 0) {
                    cm.askYesNo("你真不愧是联盟的最强战斗力。\r\n要现在领取#b#e" + Math.floor(a / 10) + "个荣耀币#n#k吗？\r\n#r#e  (※注意※#n#k #r#e每个世界一天只能获得1次#n#k奖励。)", 4, 3003564)
                } else {
                    if (d == 1) {
                        cm.setNumberForQuestInfo(100313, "point", 0);
                        cm.dispose();
                        cm.openNpc("荣耀活动_魔法泥人修炼场")
                    } else {
                        cm.dispose();
                        cm.warp(cm.getNumberFromQuestInfo(100313, "rMap"), 0)
                    }
                }
            } else {
                if (status === c++) {
                    cm.sendNormalTalk("那我现在就给你#b荣耀币#k，把你送到修炼场入口。", 4, 3003564, false, true)
                } else {
                    if (status === c++) {
                        cm.gainGloryEventPoint(a / 10);
                        cm.setNumberForQuestInfo(500796, "coinCount", Math.floor(a / 10));
                        cm.setNumberForQuestInfo(100313, "point", 0);
                        cm.playerMessage(5, "获得了" + Math.floor(a / 10) + "个荣耀币。");
                        cm.dispose();
                        cm.warp(993111301, 0, false)
                    }
                }
            }
        }
    }
};