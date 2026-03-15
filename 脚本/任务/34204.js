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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(false, false, false);
            cm.setStandAloneMode(false);
            cm.forceStartQuest(34204, "");
            cm.forceCompleteQuest(34204);
            cm.npc_ChangeController(3003150, "oid=1", 1536, 79, 12, 1462, 1562, 5, true, false);
            cm.npc_ChangeController(3003152, "oid=2", 720, 138, 22, 701, 770, 4, true, false);
            cm.npc_ChangeController(3003157, "oid=3", 2306, -354, 45, 2289, 2356, 0, false, false);
            cm.npc_ChangeController(3003158, "oid=4", 2269, 138, 27, 2219, 2319, 1, false, false);
            cm.npc_ChangeController(9010022, "oid=8", 1841, 138, 23, 1791, 1861, 1, false, false);
            cm.npc_ChangeController(3003159, "oid=9", 1512, 79, 2, 1462, 1562, 1, false, false);
            cm.npc_ChangeController(9010109, "oid=10", 1142, 138, 25, 1092, 1192, 1, false, false);
            cm.npc_ChangeController(9010106, "oid=11", 977, 138, 22, 927, 977, 1, false, false);
            cm.sendNormalTalk_Bottom("这样的食物，绝对无法打动拥有人类味觉的#b穆托#k……", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我得竟快让#b穆托#k让路，我才能去找黑魔法师……", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("可…可我的肚子……", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我真的好饿啊，可…现在只身下半块三明治了，该怎么办呢……", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("等等，我好像闻到了美食的味道了……", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我得先找点吃的……肚子真的好饿…在跟黑魔法师战斗前，我就已经先倒下了……", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯……味道好像是从右上角散发出来的……跟着味道去找找吧……", 16, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(34205, "");
                                        cm.playerMessage(-1, "在村子里寻找香味来源");
                                        cm.playerMessage(-1, "在村子里寻找香味来源");
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
}

function end(d, c, b) {
    status++;
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