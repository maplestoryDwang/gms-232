function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (cm.getNumberFromQuestCustomData(31544) > 0) {
        action4(c, b, a)
    } else {
        if (cm.getNumberFromQuestCustomData(31569) > 0) {
            action3(c, b, a)
        } else {
            if (cm.isQuestActive(31510) && cm.haveItem(4033385)) {
                action2(c, b, a)
            } else {
                action1(c, b, a)
            }
        }
    }
}

function action1(d, c, b) {
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
            cm.sendNormalTalk("用力推了推门，一动不动。门上散发出强烈的化学药品气味。", 16, 3001027, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("最好去报告一下实验室门无法打开的情况。", 16, 3001027, true, true)
            } else {
                if (status === a++) {
                    if (cm.isQuestFinished(31506) && cm.getQuestStatus(31507) == 0) {
                        cm.forceStartQuest(31568, "1");
                        cm.sendNormalTalk("回赫里希安找伊黛娜吧。", 16, 3001027, true, true)
                    }
                    cm.dispose()
                }
            }
        }
    }
}

function action2(d, c, b) {
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
            cm.sendNormalTalk("这里是特雷格罗的房间入口。这试剂怎么看也很值得怀疑，但还是相信#b伊黛娜#k和#b托内罗#k一次吧。", 16, 3001027, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("把#i4033385##b#t4033385##k泼到门上吧？", 16, 3001027)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("噢噢……哇……咕噜咕噜沸腾了？呃……好臭……", 16, 3001027, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("门上发出嘎吱嘎吱的声音。能成功吗？", 16, 3001027, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("试着动了动门，好像能打开！", 16, 3001027, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31569, "1");
                                cm.gainItem(4033385, -1);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function action3(d, c, b) {
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
            cm.sendNormalTalk("已经使用试剂打开了门。快把这消息告诉#b伊黛娜#k吧。", 16, 3001027, false, false);
            cm.dispose()
        }
    }
}

function action4(d, c, b) {
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
            cm.askMenu("这里是特雷格罗的实验室。你要入场吗？#b\r\n#b#L0#入场。#l\r\n#L1#不入场。#l", 0, 3001027)
        } else {
            if (status === a++) {
                cm.dispose();
                if (b == 0) {
                    cm.openNpc("暴君城堡_特雷格罗的实验室")
                }
            }
        }
    }
};