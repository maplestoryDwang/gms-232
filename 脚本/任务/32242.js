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
            cm.askMenu("那个，我叫#b修嘉#k。你不记得我了？\r\n#b#L0# 我记起来了。#l\r\n#b#L1# 我记不得了。#l", 0, 1520000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊，真的吗？你记得我？真是太好了。我也记得#h #你呢！", 0, 1520000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("其实，我正要去魔法密林参加转职考试……。不过，下面有那些虫子在，我没法过去。由于我非常非常怕虫子，所以已经手足无措在这里待了3个多小时了……。", 0, 1520000, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("#h #，你能不能帮帮我呢？要是能帮我赶走下面那些虫子就好了。", 0, 1520000)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32242, "");
                            cm.killAllMob();
                            cm.spawnMobLimit(9300801, 1, 280, -205, 100);
                            cm.onTeleport(1, cm.getPlayer().getId(), 94, -205);
                            cm.sendNormalTalk("真的吗？你要帮我赶走虫子？谢谢你！\r\n虫子在通往魔法密林的路口边。", 0, 1520000, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("对了，给你，这个是我一直带着的东西，希望能帮到你……", 0, 1520000, true, false)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1322005, 1);
                                    cm.npc_LeaveField("oid=217501");
                                    cm.dispose()
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32242.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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