var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("超能力者，你要做的事情就是阻止次元的崩塌。\r\n希望你能去调查#b水下世界#k中所存在的#b崩塌的次元碎片#k。", 36, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("是置之不理，次元的崩塌只会是时间问题。\r\n若是你能去调查并确认好位置，束缚魔法师#b内罗#k会将空间束缚起来的。", 36, 1531004, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("在水下世界四周，找找建筑物碎片是吧？", 36, a, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("没错，这里能够感知到的气息……总共有3个。", 36, 1531004, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("知道了，交给我吧，大叔。\r\n#b(在水下世界寻找3个崩塌的次元碎片。)#k", 36, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.forceStartQuest(22841, "");
                                cm.forceStartQuest(22842, "");
                                cm.forceStartQuest(22843, "");
                                cm.forceStartQuest(22844, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22841.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("你做得很好，总算是缓解了燃眉之急。", 36, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("多亏于此，我也算是找回了一点冷静。\r\n看来这并不是气愤就能解决的事情。", 36, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("你是块上好的材料，就像是那种未经打磨的原石一般。", 36, 1531004, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("世界被合并之时，最先获得超能力的是你这件事，\r\n绝非偶然，这表明你是有这个资格的。", 36, 1531004, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("你还是先继续壮大力量，我会再联系你的。\r\n#b(强大到85级之后，再等待亚乌的联络。)#k", 36, 1531004, true, true)
                        } else {
                            if (status === b++) {
                                cm.forceCompleteQuest(22841);
                                cm.gainExp(163530);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};