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
            cm.sendNormalTalk_Bottom("#face0#现在马、马上就到了。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face0#我们到地、地面列车3去吧。", 36, 3004651, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(37616, "");
                    cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h0;16=h0;17=h0;09=h0");
                    cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h0;16=h0;17=h0;18=h1;09=h0");
                    cm.OnStartNavigation(450014190, 0, "", 37616);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37616.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#几分钟后我们将会到、到达M塔站。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("M塔？", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那是位于城市中央的最、最高的大厦。", 36, 3004651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#T-boy和重力装置应、应该都在那里", 36, 3004651, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(37616);
                            cm.gainExp(8782820);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};