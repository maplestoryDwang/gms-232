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
            cm.sendNormalTalk("#b这东西是？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("看起来很像钥匙……继续把树砸开看看。", 2, 0)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(63053, "");
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63053.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("#b是钥匙！", 3, 0, false, true);
            cm.gainItem(4036001, 1)
        } else {
            if (status === b++) {
                var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + a + "/12)");
                cm.sendNormalTalk("#b刚才明明没看见……是闪电把树劈开了，才露出来的吗？", 3, 0, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("#b居然在这种地方找到钥匙。该说是运气好吗？钥匙不一定会在哪里出现，我不能大意。", 3, 0, true, true)
                } else {
                    if (status === b++) {
                        cm.forceCompleteQuest(63053);
                        cm.gainExp(158800);
                        cm.updateInfoQuest(63053, "exp=1");
                        cm.dispose()
                    }
                }
            }
        }
    }
};