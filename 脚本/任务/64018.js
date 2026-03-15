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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64018.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.Hidden_background("guide136", 0);
            cm.Hidden_background("guide137", 0);
            cm.Hidden_background("guide135", 0);
            cm.sendNormalTalk_Bottom("……女儿……我的女儿……", 37, 9400591, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("谢谢你……呜……。呜呜……", 37, 9400591, true, true)
            } else {
                if (status === a++) {
                    cm.forceForfeitQuest(64160);
                    cm.forceCompleteQuest(64018);
                    cm.removeAll(4036368);
                    cm.removeAll(4036369);
                    cm.warp(867200403, 5, true);
                    cm.npc_LeaveField("oid=2280880");
                    cm.npc_LeaveField("oid=2280880");
                    cm.npc_LeaveField("oid=2280881");
                    cm.npc_LeaveField("oid=2280881");
                    cm.npc_LeaveField("oid=2281032");
                    cm.npc_LeaveField("oid=2281032");
                    cm.npc_LeaveField("oid=2281222");
                    cm.npc_LeaveField("oid=2281222");
                    cm.dispose()
                }
            }
        }
    }
};