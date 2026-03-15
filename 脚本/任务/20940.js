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
            cm.askAcceptDecline("#e某个身份不明的人#n让我给你传话。我只说一次，请仔细听好。准备好了吗？一定要好好记住。", 0, 2152005)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("从村子左边的出口出去，可以看到一个公园。请用#e#b埃德尔斯坦公园1的公用电话#k#n拨打#e#r5-8-3-1-1-2-9-7#k#n。我不会再说第二遍。你可以在纸上写下来。\r\n#b（好难记！中间有两个1，最后一位号码是……嗯……是7吗？）", 1, 2152005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("以上就是我要交代的全部事情……嗯？刚才我说什么了？天气真不错。", 1, 2152005, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(20940, "");
                        cm.playerMessage(5, "必须用埃德尔斯坦公园1的公用电话拨打5-8-3-1-1-2-9-7。");
                        cm.npc_LeaveField("oid=23543");
                        cm.npc_LeaveField("oid=23544");
                        cm.npc_LeaveField("oid=23548");
                        cm.npc_LeaveField("oid=23553");
                        cm.npc_LeaveField("oid=23560");
                        cm.npc_LeaveField("oid=23569");
                        cm.npc_LeaveField("oid=23580");
                        cm.npc_LeaveField("oid=23587");
                        cm.npc_LeaveField("oid=23590");
                        cm.npc_LeaveField("oid=23591");
                        cm.npc_LeaveField("oid=23594");
                        cm.npc_LeaveField("oid=23595");
                        cm.npc_LeaveField("oid=23597");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20940.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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