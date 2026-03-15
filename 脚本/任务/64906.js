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
            cm.sendNormalTalk_Bottom("#face0##h0#，准备好了吗？\r\n虽然距离不是很远，但因为装饰品有点重，所以搬运过去，可能要花费些时间。", 37, 9400924, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#中途可能会有怪物出现。虽然不是什么危险的怪物，但如果装饰品碎掉的话，就大事不妙了。", 37, 9400924, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face1#麻烦你帮我保护推车，直到平安抵达目的地。准备好了就出发吧。", 37, 9400924)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64906, "");
                        cm.npc_LeaveField("oid=2597154");
                        cm.npc_LeaveField("oid=2597154");
                        cm.npc_LeaveField("oid=2597155");
                        cm.npc_LeaveField("oid=2597155");
                        cm.dispose();
                        cm.warp(871000070, 0, false)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64906.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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