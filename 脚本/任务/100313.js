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
            if (cm.getNumberFromQuestInfo(100313, "start") == 1) {
                cm.askYesNo("要去#b魔法泥人修炼场#k开展修炼吗？", 4, 3003564)
            } else {
                cm.sendNormalTalk("你来了，勇士。\r\n我接到了#b汉斯#k发来的紧急联络。", 4, 3003564, false, true)
            }
        } else {
            if (status === a++) {
                if (cm.getNumberFromQuestInfo(100313, "start") == 1) {
                    cm.updateInfoQuest(100313, "rMap=" + cm.getMapId() + ";point=0;start=1");
                    cm.dispose();
                    cm.warp(993111301, 0, false)
                } else {
                    cm.sendNormalTalk("虽然黑魔法师消失了，如今却又出现了另一股威胁这个世界的#r新力量#k……", 4, 3003564, true, true)
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("汉斯特别强调过，联盟的#b荣耀特攻队队员#k千万不能放松修炼。", 4, 3003564, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("于是，为了帮助我们荣耀特攻队队员修炼，特地打造了#b魔法泥人修炼场#k。", 4, 3003564, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你身为#b荣耀特攻队的一员#k，自然也可以使用修炼场。\r\n只要你好好保持实力，我就给你联盟准备的#b荣耀币#k。", 4, 3003564, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("要去#b魔法泥人修炼场#k开展修炼吗？", 4, 3003564)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(100313, "start=1");
                                    cm.updateInfoQuest(100313, "point=0;start=1");
                                    cm.updateInfoQuest(500796, "record=0");
                                    cm.updateInfoQuest(500796, "coinCount=0;record=0");
                                    cm.sendNormalTalk("那我这就送你去修炼场。\r\n希望你认真修炼，尽快提高实力。", 4, 3003564, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(100313, "rMap=" + cm.getMapId() + ";point=0;start=1");
                                        cm.dispose();
                                        cm.warp(993111301, 0, false)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100313.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};