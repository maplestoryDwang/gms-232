var status = -1;
var selectionLog = [];

function start(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    var e = "";
    var d = 0;
    if (cm.getNowTimeString(3).equals(cm.getStringFromQuestInfo(500957, "lastDate"))) {
        d++;
        e += "\r\n\r\n- 海岸峭壁之战 #b（完成）#k"
    } else {
        e += "\r\n\r\n- 海岸峭壁之战 #r（未完成）#k"
    }
    if (cm.getNowTimeString(3).equals(cm.getStringFromQuestInfo(500958, "lastDate"))) {
        d++;
        e += "\r\n\r\n- 塞尔提乌城墙 #b（完成）#k"
    } else {
        e += "\r\n\r\n- 塞尔提乌城墙 #r（未完成）#k"
    }
    if (cm.getNowTimeString(3).equals(cm.getStringFromQuestInfo(500959, "lastDate"))) {
        d++;
        e += "\r\n\r\n- 支援塞尔提乌 #b（完成）#k"
    } else {
        e += "\r\n\r\n- 支援塞尔提乌 #r（未完成）#k"
    }
    if (cm.getNowTimeString(3).equals(cm.getStringFromQuestInfo(500960, "lastDate"))) {
        d++;
        e += "\r\n\r\n- 扫荡黑太阳士兵 #b（完成）#k"
    } else {
        e += "\r\n\r\n- 扫荡黑太阳士兵 #r（未完成）#k"
    }
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            if (cm.getNowTimeString(3).equals(cm.getStringFromQuestInfo(500956, "lastDate"))) {
                cm.sendNormalTalk("今天已经领取过精锐奖励了。明天再来吧。", 4, 3004216, false, true);
                cm.dispose()
            } else {
                cm.sendNormalTalk("现在你可以领取\r\n#b#e#i2631662:# #t2631662:# " + d + "个#k#n礼物。" + e, 4, 3004216, false, true)
            }
        } else {
            if (status === a++) {
                if (d == 0) {
                    cm.sendNormalTalk("至少要完成#b#e一个精锐任务#k#n才能领取奖励。", 4, 3004216, false, true);
                    cm.dispose()
                } else {
                    cm.sendNormalTalk("你确定已经完成#b#e所有可执行精锐任务#k#n了吗？\r\n一旦领取，即便你之后再完成精锐任务，#r今天也无法领取奖励了。#k", 4, 3004216, true, true)
                }
            } else {
                if (status == a++) {
                    cm.forceCompleteQuest(500958);
                    cm.forceCompleteQuest(500956);
                    cm.setStringForQuestInfo(500956, "lastDate", cm.getNowTimeString(3));
                    cm.sendNormalTalk("#b#e#i2631662:# #t2631662:# " + d + "个#k#n已发放。感谢你今天在执行精锐任务上付出的努力。", 4, 3004216, false, false);
                    cm.gainItem(2631662, d);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500958.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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