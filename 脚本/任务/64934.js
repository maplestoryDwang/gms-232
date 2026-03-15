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
            cm.sendNormalTalk_Bottom("被#b赛恩#k#b改造的工作人员#k好像现在还在这附近徘徊。\r\n这些家伙半死不活的，太可怜了。", 36, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("你可以把他们#b给我带过来吗？#k\r\n能修理我就尽量修理，要不做个调查也行啊。", 36, 9401072)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(64934, "");
                    cm.sendNormalTalk_Bottom("谢谢你。昨天的敌人可能会成为今天的朋友的。", 36, 9401072, 0, 0);
                    cm.gainItem(2270054, 30)
                } else {
                    if (status === a++) {
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64934.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("谢谢你。可能这些家伙也会感激你的。", 36, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(64934);
                cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                cm.sendNormalTalk_Bottom("赛恩改造了这么多工作人员……现在外面肯定还有很多。\r\n所以，#b明天#k也拜托你了。", 36, 9401072, 1, 0);
                cm.gainItem(4310284, 20);
                cm.gainItem(4036666, -30)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};