var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face0#这次是去捕猎#b风独眼兽#k！！！", 36, 1531003, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("也是要收集#b风独眼兽#k的尾巴吗？", 36, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#不，风独眼兽的味道有点苦涩，我不需要，你直接捕猎就好。", 36, 1531003, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#……标准难道是你的口味吗……？", 36, a, true, true)
                    } else {
                        if (status === b++) {
                            cm.askYesNo_Bottom("#face1#喵呜！总之你去捕猎#b50只#k左右的#b风独眼兽#k就可以了。", 36, 1531003)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face0#风独眼兽在#b土眠之地#k。", 36, 1531003, false, true)
                            } else {
                                if (status === b++) {
                                    cm.npc_LeaveField("oid=1234");
                                    cm.dispose();
                                    cm.forceStartQuest(22747, "")
                                }
                            }
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22747.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face1#辛苦了，你好像越来越快了。", 37, 1531003, false, true)
        } else {
            if (status === b++) {
                cm.forceCompleteQuest(22747);
                cm.gainExp(11500);
                cm.dispose()
            }
        }
    }
};