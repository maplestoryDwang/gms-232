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
            cm.forceStartQuest(34206, "");
            cm.npc_LeaveField("oid=1");
            cm.npc_LeaveField("oid=1");
            cm.npc_LeaveField("oid=2");
            cm.npc_LeaveField("oid=2");
            cm.npc_LeaveField("oid=3");
            cm.npc_LeaveField("oid=3");
            cm.npc_LeaveField("oid=4");
            cm.npc_LeaveField("oid=4");
            cm.npc_LeaveField("oid=5");
            cm.npc_LeaveField("oid=5");
            cm.dispose();
            cm.warp(450002205, 0)
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