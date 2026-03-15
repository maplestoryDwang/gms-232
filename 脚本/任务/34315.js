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
            cm.forceStartQuest(34315);
            cm.dispose()
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
            cm.npc_ChangeController(3003234, "oid=48325", 847, 78, 24, 847, 897, 0, false, false);
            cm.npc_ChangeController(3003235, "oid=48326", 1573, 78, 27, 1523, 1591, 1, false, false);
            cm.npc_ChangeController(3003236, "oid=48327", 1198, 78, 28, 1148, 1248, 1, false, false);
            cm.npc_ChangeController(3003238, "oid=48328", 961, 78, 24, 911, 1011, 1, false, false);
            cm.npc_ChangeController(3003239, "oid=48329", 1849, 78, 26, 1799, 1851, 1, false, false);
            cm.npc_ChangeController(3003240, "oid=48330", -85, 78, 14, -135, -35, 1, false, false);
            cm.npc_ChangeController(3003223, "oid=48331", 681, 78, 23, 631, 731, 0, false, false);
            cm.npc_ChangeController(3003221, "oid=48332", 1333, 78, 28, 1283, 1333, 1, false, false);
            cm.npc_ChangeController(3003203, "oid=48333", 2070, 78, 29, 2020, 2111, 1, false, false);
            cm.npc_ChangeController(3003213, "oid=48334", 1706, 78, 26, 1695, 1795, 5, true, false);
            cm.npc_ChangeController(3003261, "oid=48335", -165, 78, 14, -204, -115, 0, false, false);
            cm.sendNormalTalk("优胜者是派面具！", 4, 3003234, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在那期间食物大战已经展开了。", 4, 3003201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哇！你看到了吗？真的是吃个没完啊！", 4, 3003236, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("输了，我居然输了！我一定要做一届优胜者的！", 4, 3003238, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("虽然打碎了盘子，但就这样成了冠军？", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("甚至还不是打碎了所有的盘子。", 4, 3003201, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("终于胜利了……请看着我，仰视我。嗯，我好幸福。", 4, 3003223, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不对啊？好奇怪…………我原本就很幸福啊？哦哦！", 4, 3003223, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose();
                                            cm.warp(450003730, 0, true)
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
};