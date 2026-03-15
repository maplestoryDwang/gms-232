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
            cm.sendNormalTalk("这里除了这个巨大的岩壁之外，好像没有其他路了。绝路啊… 我们还是先沿着岩壁上去看看吧。", 0, 3003133, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("#ho#，也是同样的想法吗？那，我们上去看看吧。", 0, 3003133)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34108, "");
                    cm.forceCompleteQuest(34108);
                    cm.dispose()
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