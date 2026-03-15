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
            cm.sendNormalTalk_Bottom("#face0##b#ho##k，\r\n从现在开始，联盟要修补损坏的地方，治疗受伤的士兵。", 36, 3003651, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#但是要想对付那个巨大的怪物……\r\n目前兵力非常缺乏。所以……", 36, 3003651, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#（拜托我到附近去寻找坠落的失事船只，\r\n救出尽可能多的勇士。）", 36, 3003651, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那就拜托了。\r\n啊，诺巴阵营的伊黛娜会跟你一起去救助失事船只。", 36, 3003651, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#她应该在调查关于锁链的残骸……\r\n现在差不多应该结束了，请你去那里看看吧。", 36, 3003651)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(35623, "");
                                cm.OnStartNavigation(450009300, 1, "3003646", 0);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35623.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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