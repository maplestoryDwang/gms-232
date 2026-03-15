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
            if (cm.getPlayer().isGM()) {
                var e = cm.getQuest();
                cm.askYesNo("空任务位于： #b 脚本/任务/34615.js#k\r\n\r\n那么现在，你要立刻开始这个任务吗？")
            } else {
                cm.forceStartQuest();
                cm.forceCompleteQuest();
                cm.dispose()
            }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("嘤，你是从影子商团过来，收取还款的吗？嘤，嘤嘤，好奇怪嘤……影子商团的人刚刚走了呀……", 4, 3001218, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("昂，我做了这么久的生意，还没遇到过这种事呢……啊，是我误会了吗？嗯，总之肯恩是个可靠的人，我就相信你吧。给，拿着吧。", 4, 3001218, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(34615, "NpcSpeech=30012181");
                    cm.OnStartNavigation(402000100, 1, "3001219", 34615);
                    cm.dispose()
                }
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk("哦吼，是影子商团的小鬼啊。你是来收取还款的吗？给，拿着吧。以后也要拜托你了。", 4, 3001219, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("对了，听说最近有人冒充商团到处收款呢。虽然只是传闻，不过……还是请你告诉肯恩一声吧。", 4, 3001219, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(34615, "NpcSpeech=30012181/30012192");
                    cm.OnStartNavigation(402000000, 1, "3001212", 34615);
                    cm.dispose()
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk("吭，吭吭……什么，还款？还还还、还款？不行，我现在没钱给你，你快走吧，吭吭……", 4, 3001212, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(一个开当铺的，竟然一分钱都没有，这可能吗？不能就这样回去，至少要拿到点什么……)#k", 2, 3001212, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(34615, "NpcSpeech=30012181/30012192/30012123");
                    cm.forceCompleteQuest(34615);
                    cm.dispose()
                }
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