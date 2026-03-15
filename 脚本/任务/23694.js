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
            cm.sendNormalTalk("很好，现在只要打开电源，尽快读取数据……啊！", 0, 2159400, false, true)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(2159397, "oid=1263935", 300, 40, 2, 250, 350, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=1263935", "summon", 0, 0);
                cm.askYesNo("是黑色之翼的部下们！我正在连接主控制装置，没办法动！帮我击退黑色之翼的部下！", 0, 2159400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("来了！", 0, 2159400, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(23694, "");
                        cm.npc_LeaveField("oid=1263935");
                        cm.spawnMobLimit(9300650, 1, 200, 63, 100);
                        cm.spawnMobLimit(9300650, 1, 250, 46, 100);
                        cm.spawnMobLimit(9300650, 1, 300, 46, 100);
                        cm.spawnMobLimit(9300650, 1, 350, 46, 100);
                        cm.spawnMobLimit(9300650, 1, 400, 63, 100);
                        cm.playerMessage(-1, "请打倒黑色之翼的手下。");
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23694.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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