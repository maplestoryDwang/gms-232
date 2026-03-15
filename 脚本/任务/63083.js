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
            cm.sendNormalTalk("…………", 4, 9400224, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(这熟悉的场景……#p9400224#似乎又难过了。快下雨了吧……)", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b#p9400224#，又出什么事了？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我也想要兔子玩偶……", 4, 9400224, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b兔子玩偶？我不是刚刚才给你买了新小熊玩偶。你很喜欢的~！", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不，现在我想要兔子玩偶……我喜欢兔子玩偶。", 4, 9400224, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(看样子不管我给#p9400224#找来什么，她都很快就会厌倦……可我也不能无止境地满足她啊……)", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(有没有什么方法能让孩子们一直幸福下去呢？永恒的幸福，绝对的幸福是不存在的吗……)", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……兔子玩偶……", 4, 9400224, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(63083);
                                                cm.gainExp(158800);
                                                cm.updateInfoQuest(63083, "exp=1");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63083.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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