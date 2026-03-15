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
            cm.sendNormalTalk_Bottom("#face0#关于缘分之翼，我有事要告诉你。", 37, 9111008, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("\r\n#L0#听取缘分之翼的有关介绍。#l\r\n#L1#我已经听说了。#l", 56, 0)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这缘分之翼是可以用樱之岛内的缘分来强化的特殊翅膀。", 37, 9111008, false, true);
                    cm.gainItem(1102887, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#只要将你拥有的缘分组合起来，就可以为它赋予特殊的力量。", 37, 9111008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你装备缘分之翼后，打开缘分线团看看吧。", 37, 9111008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#希望你能强化那股力量，并在今后的日子里继续为守护樱之岛的和平而努力。", 37, 9111008, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#如果你把缘分之翼弄丢了，就再跟我对话。", 37, 9111008, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(58821);
                                        cm.updateInfoQuest(58716, "visible=1");
                                        cm.dispose()
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58821.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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