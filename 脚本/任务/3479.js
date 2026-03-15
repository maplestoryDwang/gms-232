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
            cm.sendNormalTalk_Bottom("#face0#博士，博士，连上了。", 36, 2052007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊！测试话筒！听得到吗，队员们！", 36, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在渗透入UFO之前，我们需要检查一下#b缩小的冒险岛金刚#k的性能。\r\n另外#b阿琳#k也要借此机会，再熟练一下操作。", 36, 2052006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#是！博士！", 36, 2052004, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("#face0#正好现在有敌人，就去消灭#b200个#k#b外星章鱼枪#k吧。", 36, 2052006)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(3479, "");
                                cm.sendNormalTalk_Bottom("#face0##fs25#突击~！！#b冒险岛金刚！！！#k", 36, 2052006, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#咳咳，咳咳！！！", 36, 2052006, true, false)
                                } else {
                                    if (status === a++) {
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
            cm.sendNormalTalk_Bottom("#face0#好吧，虽然因为变小了，输出也减少了一些，不过除此之外看起来并无其他问题。", 36, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#继续进行作战计划，波特君，那就麻烦了。", 36, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(3479);
                    cm.gainExp(11004938);
                    cm.dispose()
                }
            }
        }
    }
};