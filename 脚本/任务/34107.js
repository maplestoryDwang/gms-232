var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest(34107, "");
            cm.forceCompleteQuest(34107);
            cm.askYesNo_Bottom("…我正好要去死亡火焰地带…… 如果你也要去的话，我可以载你一程……\r\n\r\n#b（接受时坐船，移动到忘却之湖）", 0, 3003123)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("…那么，出发…", 0, 3003123, false, true);
                cm.npc_LeaveField("oid=1");
                cm.npc_LeaveField("oid=1");
                cm.npc_LeaveField("oid=2");
                cm.npc_LeaveField("oid=2");
                cm.dispose();
                cm.warp(450001007, 1)
            }
        }
    }
}

function end(d, c, b) {
    status++;
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