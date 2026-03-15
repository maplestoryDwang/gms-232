var status = -1;
var selectionLog = [];

function start(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            var e = cm.getNumberFromQuestInfo(63106, "lastTime");
            if (new Date().getTime() - e < 10 * 60 * 1000) {
                cm.sendNormalTalk("我不是说过#r10#k分钟后再来吗！！你急什么急！", 5, 9400320, false, false);
                cm.dispose();
                return
            }
            cm.sendNormalTalk("给，完成了。", 5, 9400320, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("#b哇噢！", 3, 0, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("我问你……我说过要给你凿什么样的墓碑？是#b金墓碑#k，#b银墓碑#k还是#b铜墓碑#k？", 5, 9400320, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("#b(这对白似曾相识……)", 3, 0, true, true)
                    } else {
                        if (status === b++) {
                            cm.askMenu("#b(这对白似曾相识……)  \r\n\r\n#b#L0#金墓碑\r\n\r\n#b#L1#银墓碑\r\n\r\n#b#L2#铜墓碑", 16, 0)
                        } else {
                            if (status === b++) {
                                cm.updateInfoQuest(63107, "tomb=" + c);
                                cm.sendNormalTalk("#b是金墓碑。", 3, 0, false, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("没错，给你。", 5, 9400320, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk("#b(诶，这么轻易就……)", 3, 0, true, true)
                                    } else {
                                        if (status === b++) {
                                            var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                                            cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + a + "/12)");
                                            cm.forceStartQuest(63107, "");
                                            cm.forceCompleteQuest(63107);
                                            cm.gainItem(4036008, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63107.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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