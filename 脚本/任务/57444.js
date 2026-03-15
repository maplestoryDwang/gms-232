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
            cm.sendNormalTalk_Bottom("#face0#你或许已经知道了，武陵是冒险岛中灵气最强的地方。可以说，这个世界的所有灵气都聚集于此。而且自古至今，一直有心怀鬼胎的人想要得到这里的灵气。", 37, 2091001, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#之所以你所寻找的这些人会来到武陵，应该也是为了这个目的吧。这次的问题似乎出现在蟠桃果林。如果我没有猜错，他们应该是想要进入果林深处的森林，因为那里是武陵中灵气最为鼎盛的地区。你要不要进去调查看看？", 37, 2091001)
            } else {
                if (status === a++) {
                    cm.OnStartNavigation(250010502, 0, "", 0);
                    cm.sendNormalTalk_Bottom("#face0#果林深处有着一座森林。受到武陵的灵气影响，那里已经成为了妖怪们的魔窟。前往仙人森林击败那些妙仙，应该就能让你找到自己想要的线索。", 37, 2091001, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(57444, "");
                        cm.npc_LeaveField("oid=16510");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57444.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#如何呢，你找到线索了吗？", 37, 2091001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#果然不出所料。他们打算利用武陵的灵气去使唤这些妖怪……但我怎么也想象不出，他们这么做究竟是何目的。", 37, 2091001, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4033276, -20);
                    cm.forceCompleteQuest(57444);
                    cm.gainExp(622420);
                    cm.dispose()
                }
            }
        }
    }
};