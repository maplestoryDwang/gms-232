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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63061.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63061.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#fc0xffcc6666#你一晚上的辛苦泡汤了？现在你要怎么办？", 4, 9400205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#fc0xffcc6666#依我看，你最好等到怪物们在夜晚期间恢复后，再重新变换到白天……", 4, 9400205, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b可是我无论怎么想，都觉得他们的生活好苦逼……", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b既然白天不能休息，干脆我让夜晚持续久一点吧。", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#fc0xffcc6666#你在胡说什么？你打算不再变换到白天了吗？", 4, 9400205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b嗯，我要让他们过得悠哉些。", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(在夜间状态持续期间，我去异逝界逛一圈再回来吧，这段时间让他们好好休息休息……)", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(63061);
                                        cm.gainExp(158800);
                                        cm.updateInfoQuest(63061, "start=1;exp=1");
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
};