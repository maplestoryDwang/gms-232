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
            cm.sendNormalTalk("我听说#b#p9130090##k现在人在这里。", 2, 9130087, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("没错。这个阴险的男人似乎又在搞着什么小动作……他不会是在准备进行新的魔王降临仪式吧……", 0, 9130087, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果他真的企图再次进行魔王降临的仪式，那么不仅会对我们#b#m807000000##k联合军造成巨大的威胁，更会直接影响到冒险岛全域。", 0, 9130087, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#p9130090##k应该就在这里面。请你一定要阻止他的行径啊。", 0, 9130087, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(57480, "");
                            cm.forceCompleteQuest(57480);
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57480.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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