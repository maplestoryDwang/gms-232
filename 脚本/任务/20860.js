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
            cm.sendNormalTalk("你已经达到了10级，说明你很努力。很好。你现在已经超出了初心者的境界，我认可你有正式成为修炼骑士的资格。但在这之前，我想先问你一个问题。你想选择哪条骑士之路呢？", 0, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("骑士之路不止一条。在前面等待着你的，一共有五条路……选择哪条路是你的自由。但至少不要让自己后悔。", 0, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("看来你已经很清楚自己该走哪条路了。那很好。现在就看你自己的选择了。", 0, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("骑士团长们正在左边等你。先去听听他们的话，然后选择自己想要的路。因为一切都是为了你自己……", 0, 1101002)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(20860, "");
                            cm.forceCompleteQuest(20860);
                            cm.npc_LeaveField("oid=5778");
                            cm.npc_LeaveField("oid=5785");
                            cm.npc_LeaveField("oid=5787");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20860.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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