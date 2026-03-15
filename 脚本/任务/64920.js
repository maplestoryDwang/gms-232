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
            cm.sendNormalTalk_Bottom("快来，辛苦了。", 36, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b斯卡伊#k是……？", 56, 9401072, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("在说谁呢？", 36, 9401072, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("赛恩制造出来的拟真机器人。\r\n#b名叫斯卡伊#k，赛恩好像正努力地尝试进到他身体里面。", 56, 9401072, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("貌似是想使用克拉尼亚曾经失败的#b共同客体#k系统。", 36, 9401084, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("哼，那个好像很不稳定。连人工智能都没能完成那个功能。", 36, 9401072, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("对了，我们打探出克拉尼亚的下落了！\r\n这儿有写，如果以后逃跑的话，要往哪里逃。", 36, 9401071, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo_Bottom("那我们就马上动身吧！", 36, 9401071)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("那快出发吧。", 36, 9401071, 0, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(64920, "");
                                                cm.dispose();
                                                cm.warp(867142006, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64920.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.dispose()
        }
    }
};