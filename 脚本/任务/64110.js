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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64110.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#b对，你们两位一起！", 57, 0, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#呵呵，这家伙信心倒是挺足的嘛？", 37, 9400589, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b小菜一碟！", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#喂喂，阿尔西，我们把 #h0# 给打趴下来吧！", 37, 9400589, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那么就开始了！！", 37, 9400589, true, true)
                        } else {
                            if (status === a++) {
                                cm.npc_LeaveField("oid=7533567");
                                cm.npc_LeaveField("oid=7533567");
                                cm.npc_LeaveField("oid=7533568");
                                cm.npc_LeaveField("oid=7533568");
                                cm.dispose();
                                cm.warp(867202420, 0)
                            }
                        }
                    }
                }
            }
        }
    }
};