var status = -1;

function start() {
    action(1, 0, 0)
}

function start(e, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("我听说你要到下游去。如果我们成功解放这梦之城市，你也能达成你的目的。", 4, 3003201, false, true)
        } else {
            if (status === b++) {
                cm.askAcceptDecline("怎么样，你愿意助我们一臂之力吗？", 0, 3003201)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("谢谢你。详细的情况老大爷会告诉你的。", 4, 3003201, false, true)
                } else {
                    if (status === b++) {
                        var a = cm.getQuestRecord(34305);
                        a.setStatus(1);
                        cm.getPlayer().updateQuest(a, true);
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