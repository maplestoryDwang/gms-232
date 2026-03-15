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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我相信你已经从#p9073005#那里得知了一定的信息。这次在新的#p9073008#出现的状况下，你迅速完成了任务，#h0#我将送你一份小礼物作为回报。", 0, 9073011, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你已经通过UI获得A级猎人的称号了吧？如果还没收到，结束与我的对话后，打开十字猎人的UI，就能接受奖励了。另外，虽然非常微薄，作为我对你完成任务的鼓励吧。", 0, 9073011, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(1663);
                    cm.finishAchievement(1185);
                    cm.gainExp(594164);
                    cm.sendNormalTalk("下一次任务也期待你的表现。希望你好好努力。", 1, 9073011, true, true);
                    cm.gainItem(4310029, 50)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ScreenMsg("crossHunter/chapter/end3");
                        cm.dispose()
                    }
                }
            }
        }
    }
};