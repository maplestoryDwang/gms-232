var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getQuestStatus(39209) > 0) {
        start2(c, b, a)
    } else {
        start1(c, b, a)
    }
}

function start1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#g(有个像机器人腿的东西从地面冒了出来)", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#fs22#呜！#fs16#呜呜呜。", 37, 2155101, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("拿出来看看吧。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.npc_LeaveField("oid=1274337");
                        cm.npc_LeaveField("oid=1274337");
                        cm.dispose();
                        cm.warp(310070800, 0, false)
                    }
                }
            }
        }
    }
}

function start2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#fs22#呜！#fs16#呜呜呜。", 37, 2155101, false, true)
        } else {
            if (status === a++) {
                cm.npc_LeaveField("oid=42524479");
                cm.npc_LeaveField("oid=42524479");
                cm.dispose();
                cm.warp(310070156, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39299.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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