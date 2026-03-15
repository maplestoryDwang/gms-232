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
            cm.sendNormalTalk("对不起，绝不能妨碍大师的研究。\r\n如果现在打扰他的话，我们所付出的努力，可能都会化为乌有。你为什么一定要马上见他呢？", 5, 2510010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……！！你说什么？刚才说什么？", 5, 2510010, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(302090406, 0)
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