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
            cm.forceStartQuest(34218, "");
            cm.npc_LeaveField("oid=1");
            cm.npc_LeaveField("oid=1");
            cm.npc_LeaveField("oid=2");
            cm.npc_LeaveField("oid=2");
            cm.dispose();
            cm.warp(450002201, 0)
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
            cm.forceStartQuest(39365, "000");
            cm.setStandAloneMode(false);
            cm.forceStartQuest(34218, "");
            cm.forceCompleteQuest(34218);
            cm.gainItem(1712002, 1);
            cm.getTopMsgFont("和穆托对话就可以继续旅行了。", 3, 20, 20, 0);
            cm.getTopMsgFont("可以缩短之前神秘河地区的每日任务。", 3, 20, 10, 0);
            cm.dispose()
        }
    }
};