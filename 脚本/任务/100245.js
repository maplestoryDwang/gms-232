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
            cm.sendNormalTalk("#e#b#h0##k#n！你好！\r\n我是#b#e<新复古王国>#k#n的#e骑士甘迪#nYO！", 0, 9062182, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我奉#e伯爵斯坦#n之命前来，他让我一定要把这封信交到#e#b#h0##k#n你手上！", 0, 9062182, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("（某位似曾相识的骑士给了我一封似乎带有魔力的#e信#n。）", 2, 9062182, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("（我小心地打开信封，信纸上浮现出某个熟悉的老爷爷的面孔）", 2, 9062182, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#e#b#h0##k#n！\r\n看来你收到我的信了。", 4, 9062172, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你好，我是#b#e<新复古王国>#k#n的#e伯爵斯坦#n。", 4, 9062172, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("虽然有很多话想跟你说，但情况紧急，我们就直入正题吧。", 4, 9062172, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我们#b#e<新复古王国>#k#n正面临#e存亡绝续的危机#n。", 4, 9062172, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我四处寻访#e可以拯救王国的英雄#n，直到找到了你。", 4, 9062172, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo("详细情况可以等见面再说……\r\n怎么样，愿意接受我们#e#b<新复古王国>#k#n的邀请吗？\r\n\r\n#r（接受时，将前往新复古王国。）#k", 4, 9062172)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(100245);
                                                    cm.updateInfoQuest(500728, "first=1");
                                                    cm.updateInfoQuest(16192, "Score=0;do=1");
                                                    cm.updateInfoQuest(500728, "lv=1;first=1");
                                                    cm.updateInfoQuest(100246, "lv=1");
                                                    cm.updateInfoQuest(100245, "rMap=100000000");
                                                    cm.gainItem(2630505, 1);
                                                    cm.dispose();
                                                    cm.setNumberForQuestCustomData(100247, cm.getMapId());
                                                    cm.warp(993110300, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100245.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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