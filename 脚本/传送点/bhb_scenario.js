function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (cm.getNumberFromQuestInfo(33293, "count") > 0) {
        action2(c, b, a)
    } else {
        action1(c, b, a)
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
            cm.askYesNo_Bottom("前方好像有强烈的气息。进去看看吧？\r\n#b（如果点击“是”，即可进入核心。）#k", 56, 0)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(33293, "count=1;difficulty=0");
                cm.dispose();
                cm.openNpc("黑色天堂_Act6_斯乌")
            }
        }
    }
}

function action2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("调整这里的电线排布应该就可以弱化斯乌了。\r\n#b(击败未弱化的斯乌可以获得如下奖励。)\r\n#v2434783:# #t2434783##k", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("要试试看吗？\r\n#b(点击‘是’即可弱化斯乌。)#k", 56, 0)
            } else {
                if (status === a++) {
                    if (d == 0) {
                        cm.dispose();
                        cm.addNumberForQuestInfo(33293, "count", 1);
                        cm.setNumberForQuestInfo(33293, "difficulty", 0);
                        cm.openNpc("黑色天堂_Act6_斯乌")
                    } else {
                        cm.askYesNo_Bottom("确定要弱化斯乌吗？\r\n#b（如果选择“是”，即可弱化斯乌。）#k", 56, 0)
                    }
                } else {
                    if (status === a++) {
                        if (d == 0) {
                            cm.dispose();
                            cm.addNumberForQuestInfo(33293, "count", 1);
                            cm.setNumberForQuestInfo(33293, "difficulty", 0);
                            cm.openNpc("黑色天堂_Act6_斯乌")
                        } else {
                            cm.askYesNo_Bottom("真的真的要弱化斯乌吗？\r\n#b（如果选择“是”，即可弱化斯乌。）#k", 56, 0)
                        }
                    } else {
                        if (status === a++) {
                            if (d == 0) {
                                cm.dispose();
                                cm.addNumberForQuestInfo(33293, "count", 1);
                                cm.setNumberForQuestInfo(33293, "difficulty", 0);
                                cm.openNpc("黑色天堂_Act6_斯乌")
                            } else {
                                cm.sendNormalTalk_Bottom("很好，先弱化斯乌吧。", 57, 0, false, true)
                            }
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("（稍后）\r\n……现在进去看看吧。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.addNumberForQuestInfo(33293, "count", 1);
                                    cm.setNumberForQuestInfo(33293, "difficulty", 1);
                                    cm.dispose();
                                    cm.openNpc("黑色天堂_Act6_弱化斯乌")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};