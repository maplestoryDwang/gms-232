var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("“清醒者”是谁？", 4, 3003201, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("你说什么？\r\n#b\r\n#L0#美女面具#l\r\n#L1#绅士猫面具#l\r\n#L2#虾虾面具#l", 4, 3003201)
            } else {
                if (status == a++) {
                    if (b == 0) {
                        cm.sendNormalTalk("嗯，肯定是你看错了。", 4, 3003201, false, false);
                        cm.dispose()
                    } else {
                        if (b == 1) {
                            cm.sendNormalTalk("嗯，肯定是你看错了。", 4, 3003201, false, false);
                            cm.dispose()
                        } else {
                            if (b == 2) {
                                cm.sendNormalTalk("原来如此。请和虾虾面具对话。试着说服他吧。", 4, 3003201, false, true)
                            }
                        }
                    }
                } else {
                    if (status == a++) {
                        cm.forceStartQuest(34308, "");
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
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