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
            cm.askYesNo("你好……我好像是头一次见到你……你是谁？\r\n嗯？南哈特让你到圣地来帮我执行任务？太好了！请帮帮我！！！", 0, 1102200)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，这个……由于有很多新加入的骑士团员……我正想把新的搜索证送过去……但是却弄丢了。必须赶紧找到才行。不然的话，南哈特大人一定会骂我的……", 0, 1102200, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好像是掉在了来的路上。我是从哪条路过来的呢……啊！是提姆所在的地方。一定是#b提姆之林#k！请你先去帮我找找看。我随后就去。", 0, 1102200, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(20846, "");
                        cm.OnStartNavigation(130010110, 0, "", 20846);
                        cm.effect_OnUserEff("UI/tutorial.img/cygnus/1");
                        cm.npc_LeaveField("oid=5869");
                        cm.npc_LeaveField("oid=5865");
                        cm.npc_LeaveField("oid=5866");
                        cm.npc_LeaveField("oid=5870");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20846.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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