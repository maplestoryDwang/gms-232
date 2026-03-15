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
            cm.sendNormalTalk("周围好像太安静了……是有人打算袭击我吗？哎呀……竟然想偷袭我这个老头。黑色之翼的那些人还真是卑鄙……不过你是谁？我不会被这种事情吓到的！", 0, 2159201, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(#p2152010#的胆子好像很大，看上去好像一点都不害怕。)#k", 2, 2159201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("因为有你在，看来他们是不会轻易露面的了。他们好像对你很戒备……真是的……看来我们得设个局，让他们现身才行。你说呢？", 0, 2159201, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b我没关系，不过你呢？他们的目标可是你啊。#k", 2, 2159201, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("哼，我老人家会被那些东西吓到吗？别担心。反正有你保护我，我干嘛害怕？你好像是反抗者中间很有潜力的人。好了，我往更僻静的地方走一点，让黑色之翼出来。", 0, 2159201)
                        } else {
                            if (status === a++) {
                                cm.playerMessage(5, "保护苏阿尔不受冲过来的黑色之翼的伤害。在规定时间内不能让苏阿尔倒下！");
                                cm.playerMessage(-1, "击退黑色之翼，保护苏阿尔！");
                                cm.forceStartQuest(23127, "");
                                cm.warp(931000441, 0, false);
                                cm.getPlayer().scheduleWarpTask(1 * 1 * 6, cm.getMap(931000440));
                                cm.killAllMob();
                                cm.spawnMobLimit(9300421, 1, -2083, -14, 100);
                                cm.spawnMobLimit(9300415, 1, -2436, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1869, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1259, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -978, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1577, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -2083, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1869, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1577, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -978, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1259, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1869, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -2083, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -978, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1577, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1259, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -2083, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1259, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1869, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -1577, -14, 100);
                                cm.spawnMobLimit(9300421, 1, -978, -14, 100);
                                cm.updateInfoQuest(23127, "kept=1");
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23127.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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