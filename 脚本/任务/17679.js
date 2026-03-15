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
            cm.sendNormalTalk_Bottom("现在我就让你们这些家伙的海盗行为到达截止日期。", 56, 9390246, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？见过这么脑袋不灵光的朋友吗。看来你还不太明白你现在的处境啊。", 32, 9390246, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("才不呢，我可是非常清楚呢。我要抓的家伙们全部聚集在这里，反而是我们要说声谢谢呢。", 56, 9390246, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哼，真是个趾高气昂的家伙。我就等着看你能装得意装到什么时候。", 32, 9390246, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("(话是那么说，可是该怎么办呢。现在就立马攻击吗？", 56, 9390246)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(17679, "");
                                cm.spawnMobLimit(9390817, 1, 517, 66, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390816, 1, 388, 72, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
                                cm.spawnMobLimit(9390815, 1, 230, 150, 100);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17679.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};