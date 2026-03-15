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
            cm.sendNormalTalk_Bottom("#face0#希纳斯女皇陛下听说你的事迹后，就一直想邀你来此做客。", 36, 3003651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你就是那位高等翼人出身的骑士吧。\r\n听说你为我们冒险岛世界提供了很大帮助……", 36, 3003651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#狼牙说你不像是达尔莫尔的部下，\r\n听他的描述，你是个有故事的人。", 36, 3003651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我们联盟中也有翼人出身的成员。\r\n因此我们决定暂且抱着信任的态度，与你合作。", 36, 3003651, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#等你做好谒见准备，我就带你去见女皇陛下。\r\n你要去见女皇陛下吗？", 36, 3003651, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#女皇陛下就在我右边。\r\n你去和她谈谈吧。", 36, 3003651, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(39682, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39682.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你好，阿黛尔。\r\n我是圣地女皇希纳斯。\r\n我一直很想亲自见见你。", 36, 3003655, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(39682);
                cm.dispose()
            }
        }
    }
};