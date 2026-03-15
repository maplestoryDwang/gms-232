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
            cm.askAcceptDecline("#b#p3001005##k刚消失，发报机又响了。像是#b#p3001004##k，怎么办？", 16, 0)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("喂，外族人，我是#b#p3001004##k。我马上就到#b#m401020300##k去。", 4, 3001004, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b你说来就来，太突然了吧。#k", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈哈哈，船到桥头自然直！总之咱们联系地点见！", 4, 3001004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("得在#b#m401020300##k和#b#p3001004##k见面。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31826, "");
                                cm.forceCompleteQuest(31826);
                                cm.forceStartQuest(31575, "");
                                cm.gainExp(50000);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31826.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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