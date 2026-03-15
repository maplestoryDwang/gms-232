var status = -1;
var selectionLog = [];

function start(g, c, b) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }(g == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    var d = cm.getNumberFromQuestInfo(18838, "stage");
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu("在#b<操作之神>#k中展现你的#e#b韧性#k#n吧！\r\n\r\n在<操作之神>中#b通关20关以上#k，可以获得#b#t2630132:##k！\r\n\r\n#e[通关关数]#n\r\n#b#e" + d + "#n / 20关#k\r\n\r\n#e[通关20关以上奖励]#n\r\n#b#i2630132:# #t2630132:##k\r\n\r\n#b#L0# 查看通关记录详情#k#l", 9062148)
        } else {
            if (status === a++) {
                var f = "#e[通关记录]#n\r\n\r\n通关：" + d + "关";
                var e = cm.getInfoQuest(500651);
                if (d < 20) {
                    f += "#r（未达成）#k\r\n"
                } else {
                    if (e == null || e.indexOf("clear=1") < 0) {
                        cm.gainItem(2630132, 1);
                        f += "#g（已达成）#k\r\n";
                        f += "\r\n恭喜你通过了#b操作之神20关#k！这是你的奖励！";
                        f += "\r\n#i2630132:# #t2630132:#";
                        cm.updateInfoQuest(500651, "clear=1");
                        cm.gainItem(2630132, 1);
                        cm.forceStartQuest();
                        cm.forceCompleteQuest()
                    } else {
                        f += "#b（已领取）#k\r\n";
                        f += "\r\n你已经领取过奖励了哦。"
                    }
                }
                cm.sendOk(f, 9062148)
            } else {
                if (status == a++) {
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};