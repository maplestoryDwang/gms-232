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
            cm.sendNormalTalk("?!", 1, 1520052, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("怎，怎么办？#h0#……我感觉到了异常的气息。村庄那边，出现了非常邪恶的东西。", 1, 1520052, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("我一个人去太勉强了……#h0#，你和我一起去吧！", 0, 1520052)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("从彩虹村通往明珠港的路口附近感觉到了异常气息。往明珠港方向去看看吧！", 1, 1520052, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32354, "");
                            cm.npc_LeaveField("oid=32");
                            cm.npc_LeaveField("oid=33");
                            cm.npc_LeaveField("oid=34");
                            cm.npc_LeaveField("oid=35");
                            cm.npc_LeaveField("oid=36");
                            cm.npc_LeaveField("oid=37");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32354.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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