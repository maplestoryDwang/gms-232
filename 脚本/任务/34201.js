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
            cm.updateInfoQuest(26535, "effect=1");
            cm.updateInfoQuest(18771, "rank=303");
            cm.npc_ChangeController(3003150, "oid=1", 1536, 79, 12, 1462, 1562, 5, true, false);
            cm.npc_ChangeController(3003152, "oid=2", 720, 138, 22, 701, 770, 4, true, false);
            cm.npc_ChangeController(3003157, "oid=3", 2306, -354, 45, 2289, 2356, 0, false, false);
            cm.npc_ChangeController(3003158, "oid=4", 2269, 138, 27, 2219, 2319, 1, false, false);
            cm.npc_ChangeController(9010022, "oid=8", 1841, 138, 23, 1791, 1861, 1, false, false);
            cm.npc_ChangeController(3003159, "oid=9", 1512, 79, 2, 1462, 1562, 1, false, false);
            cm.npc_ChangeController(9010109, "oid=10", 1142, 138, 25, 1092, 1192, 1, false, false);
            cm.npc_ChangeController(9010106, "oid=11", 977, 138, 22, 927, 977, 1, false, false);
            cm.forceStartQuest(34201, "");
            cm.npc_LeaveField("oid=1");
            cm.npc_LeaveField("oid=1");
            cm.npc_LeaveField("oid=2");
            cm.npc_LeaveField("oid=2");
            cm.npc_LeaveField("oid=3");
            cm.npc_LeaveField("oid=3");
            cm.npc_LeaveField("oid=4");
            cm.npc_LeaveField("oid=4");
            cm.npc_LeaveField("oid=8");
            cm.npc_LeaveField("oid=8");
            cm.npc_LeaveField("oid=9");
            cm.npc_LeaveField("oid=9");
            cm.npc_LeaveField("oid=10");
            cm.npc_LeaveField("oid=10");
            cm.npc_LeaveField("oid=11");
            cm.npc_LeaveField("oid=11");
            cm.dispose();
            cm.warp(450002202, 0)
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