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
            cm.sendNormalTalk_Bottom("#face0#好了，现在开始捕鼠吧。", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("明明是艾尔达……样子却像老鼠。", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#据说原来不是那个样子。\r\n好像是与栖息在铁路上的地沟鼠接触之后，外表变得相像了。", 36, 3004652, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("（变得相像？嗯……\r\n难道这里的居民们也变得跟好友世界的人相像了吗……？）", 56, 0, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#其实仔细看还挺可爱的……不过现在成了我们的点心。", 36, 3004652, true, true, 1);
                            cm.spawnMobLimit(8641051, 1, 1203, -431, 100)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("#face0#你能去帮我收集20个#b蓝色鼠肉#k吗？", 36, 3004652, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(37604, "");
                                    cm.gainExp(108156);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37604.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你可……真厉害。", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#难怪T-boy叫你勇士！", 36, 3004652, true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(37604);
                    cm.gainExp(17565641);
                    cm.gainItem(4036631, -20);
                    cm.dispose()
                }
            }
        }
    }
};