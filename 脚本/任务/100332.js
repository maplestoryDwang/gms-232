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
            if (cm.getNumberFromQuestInfo(100332, "first") > 0) {
                cm.askYesNo("现在就立刻前往#b#e激战中的乱港#n#k吗？", 0, 3004219)
            } else {
                cm.sendNormalTalk("来了啊，#b#h0##k。", 0, 3004219, false, true)
            }
        } else {
            if (status === a++) {
                if (cm.getNumberFromQuestInfo(100332, "first") > 0) {
                    cm.updateInfoQuest(100334, "rMap=" + cm.getMapId());
                    cm.dispose();
                    cm.warp(993170000, 0, false)
                } else {
                    cm.sendNormalTalk("许久未见，能有机会如此畅谈实在是开心，不过既然我们彼此都有些忙，那我就直接挑重点说了。", 0, 3004219, true, true)
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你也知道，自从格兰蒂斯和冒险岛世界合二为一之后，世界上发生了各种各样的事情。", 0, 3004219, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这其中，尤以武陵道院#e百草堂附近海域#n之中，肆意占领相应地区的#e#r翼人军#n#k异常猖獗。", 0, 3004219, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你应该很清楚面对这种状况，能够先发制人便是#b#e荣耀特攻队#n#k的主要职责。", 0, 3004219, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那什么，解释这么多应该已经够了，那就让我们切入正题吧。", 0, 3004219, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("#b#h0##k。\r\n你愿意接受荣耀特攻队的身为#e军官#n扫荡#b#e激战中的乱港#k#n翼人军任务吗？", 0, 3004219)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(100332, "first=1");
                                        cm.updateInfoQuest(100332, "point=0;first=1");
                                        cm.updateInfoQuest(100332, "point=0;kill=0;first=1");
                                        cm.sendNormalTalk("果然我就知道你会欣然接受。", 0, 3004219, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("现在起，随时告诉我，我便送你去#b#e激战中的乱港#k#n。", 0, 3004219, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo("现在就立刻前往#b#e激战中的乱港#n#k吗？", 0, 3004219)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(100334, "rMap=" + cm.getMapId());
                                                    cm.dispose();
                                                    cm.warp(993170000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100332.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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