var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#我的梦想就是创造让我家威廉和詹妮弗能够自由玩耍的安全的度假村~ ", 37, 1082002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#但是请看看周围！这里也是水灵！那里也是水灵！水灵、水灵！这些该死的水灵到处都是！咻~~ 抱歉我太兴奋了。", 37, 1082002, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#如果你能帮我消灭几只海边的水灵 ，那账单的事情我就当不存在。怎么样？\r\n#b(※接受时将自动移动。)", 37, 1082002)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#好的，那就马上把你送到金利奇海边吧！", 37, 1082002, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(64630, "");
                            cm.dispose();
                            cm.warp(871000030, 1)
                        }
                    }
                }
            }
        }
    }
}

function end(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    var d = cm.getInfoQuest(64630);
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            if (d == null || !d.contains("chk=1")) {
                cm.sendNormalTalk_Bottom("#face0#还没有清理完吗？没关系，继续清理吧！", 37, 1082002, false, true)
            } else {
                cm.sendNormalTalk_Bottom("#face0#很不错~ 看来暂时不用在散步的时候担心了。", 37, 1082002, false, true)
            }
        } else {
            if (status === a++) {
                if (d == null || !d.contains("chk=1")) {
                    cm.warp(871000030, 1);
                    cm.dispose()
                } else {
                    cm.sendNormalTalk_Bottom("#face0#下次请再来玩，我们随时欢迎你们到来~ ", 37, 1082002, true, true)
                }
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(64630);
                    cm.dispose()
                }
            }
        }
    }
};