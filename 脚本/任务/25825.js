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
            cm.sendNormalTalk("#h0#，你变强了好多呢。", 0, 3000018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是吗？？嘿嘿嘿，说实话我也有这种感觉。这下子才觉得有点像正义英雄了。", 2, 3000018, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你可能不知道，随着你不断进行训练，我们的契约关系也在逐渐加深。", 0, 3000018, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("呃，这个是好事还是坏事呢。", 2, 3000018, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("怎么会是坏事？总而言之，现在得提高你我灵魂的默契。", 0, 3000018, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好难理解……什么意思啊？", 2, 3000018, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("简单来说，就是让你能更好地使用我的力量。", 0, 3000018, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哦，那是好事情呢。", 2, 3000018, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("那么赶快提高你我之间的默契吧。", 1, 3000018)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("来！集中精神！", 0, 3000018, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.changeJob(6510);
                                                    cm.forceStartQuest(25825, "");
                                                    cm.updateInfoQuest(1073, "6500=10;6510=201");
                                                    cm.forceCompleteQuest(25825);
                                                    cm.gainItem(1142496, 1);
                                                    cm.effect_PlayMusic("Voice.img/jobChanged/6510F");
                                                    cm.forceStartQuest(29993, "");
                                                    cm.forceCompleteQuest(29993);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25826.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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