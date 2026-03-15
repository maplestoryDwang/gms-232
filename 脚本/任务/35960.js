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
            cm.sendNormalTalk("现在你使用#i2630359#海螺试试吧。", 4, 1013401, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好像听到了小孩的脚步声。方向是……右边！", 2, 1013404, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("恭喜你找到了线索。我现在要回村里去了。因为今天的勇气已经全部用光了。", 4, 1013401, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0");
                        cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h1");
                        cm.OnStartNavigation(100051027, 0, "east00", 35960);
                        cm.forceStartQuest(35960, "");
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("嗯……在哪儿呢……应该就在这附近啊……。", 4, 1013442, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("（你在找什么呢？）", 2, 1013405, true, true)
            } else {
                if (status === b++) {
                    var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
                    cm.sendNormalTalk("哇！！原，原来是刚才那个力气大得可怕的" + a + "！", 4, 1013442, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("……。", 2, 1013405, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("小孩，你的哥哥们呢？", 2, 1013405, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("哼，你以为我会告诉你吗！！……", 4, 1013442, true, true)
                            } else {
                                if (status === b++) {
                                    cm.forceCompleteQuest(35960);
                                    cm.gainExp(713849);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};