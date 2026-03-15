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
            cm.sendNormalTalk_Bottom("#face0#其他队员好像发现了光线枪的位置。", 36, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#大家都聚在一起了啊。", 36, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face5#……", 36, 2052027, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#最终……还是不需要我这样的人啊。", 36, 2052027, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#很快就能准备好传送了，别担心，阿琳。", 36, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4##fc0xFFAAAAAA#(等回去了……就会被替换掉吧……)", 36, 2052027, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("#face0#将#b黑色遥控飞机#k清理掉，去收集#b无线电干扰装置#k吧。\r\n有10个应该就可以了。", 36, 2052006)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(3493, "");
                                        cm.sendNormalTalk_Bottom("#face0#若是仔细研究那个装置，应该能找到可以将电波消除掉的方法的。", 37, 2052006, false, false)
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
            cm.gainExp(11004938);
            cm.forceCompleteQuest(3493);
            cm.sendNormalTalk_Bottom("#face0#辛苦了，嗯！还是有效果的，已经捕捉到其他队员的信号了。", 36, 2052006, false, false);
            cm.gainItem(4036071, -10)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(221030801, 0)
            }
        }
    }
};