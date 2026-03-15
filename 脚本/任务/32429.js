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
            cm.updateInfoQuest(32429, "order=obgqBicuECvGteMIkaFnHpfwjKhxmLlJsDdr");
            cm.updateInfoQuest(32429, "order2=acdgbjihfe;order=obgqBicuECvGteMIkaFnHpfwjKhxmLlJsDdr");
            cm.askYesNo("喂，#h0#。本周克里蒂亚斯需要你帮忙的事情有这些。\r\n\r\n#b#e#y32444##k#n\r\n#b#e#y32431##k#n\r\n#b#e#y32436##k#n\r\n#b#e#y32446##k#n\r\n#b#e#y32470##k#n\r\n\r\n#e你想现在马上执行任务吗？#n\r\n（如果不满意，可以点击更换按钮，更换成其他任务。）", 0, 2230000)
        } else {
            if (status === a++) {
                cm.askMenu("那就选择自己喜欢的任务吧。如果不满意，我可以为你找找看是否有别的任务。\r\n\r\n#b#e#L0# #y32444##l#k#n\r\n#b#e#L1# #y32431##l#k#n\r\n#b#e#L2# #y32436##l#k#n\r\n#b#e#L3# #y32446##l#k#n\r\n#b#e#L4# #y32470##l#k#n\r\n#L5# #r#e没有想要更换的任务了。#k#n#l", 0, 2230000)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(32444, "start=1");
                    cm.updateInfoQuest(32431, "start=1");
                    cm.updateInfoQuest(32436, "start=1");
                    cm.updateInfoQuest(32446, "start=1");
                    cm.updateInfoQuest(32470, "start=1");
                    cm.forceStartQuest(32444, "");
                    cm.forceStartQuest(32431, "");
                    cm.forceStartQuest(32436, "");
                    cm.forceStartQuest(32446, "");
                    cm.forceStartQuest(32470, "");
                    cm.forceStartQuest(32429, "");
                    cm.forceCompleteQuest(32429);
                    cm.updateInfoQuest(32486, "startDate=20/01/23");
                    cm.updateInfoQuest(32486, "dow=4;startDate=20/01/23");
                    cm.sendNormalTalk("好的，找到新任务了。怎么样？你能行吗？\r\n\r\n#b#e#y32444##k#n\r\n#b#e#y32431##k#n\r\n#b#e#y32436##k#n\r\n#b#e#y32446##k#n\r\n#b#e#y32470##k#n\r\n", 0, 2230000, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("任务全部完成之后，请回到我这里来。\r\n所有任务在#e#r周日午夜#k#n之前有效。如果想从我这里领取奖励，最好在这之前回来找我。", 0, 2230000, true, false);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32429.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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