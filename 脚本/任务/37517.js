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
            cm.sendNormalTalk_Bottom("#face1#这就是燃烧近天峰的使徒之力……", 36, 3004433, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#整座城都雷鸣滚滚，怎么会这样呢，太不可思议了……", 36, 3004433, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#王子殿下！乌云马上就要笼罩这里了！！", 36, 3004437, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#有闪电劈向王宫了！", 36, 3004437, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#咳……总之#h0#，我们会守住这里。", 36, 3004433, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("#face1#现在请到图书馆去吧。我很担心伊黛娜大人。", 36, 3004433)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(37517, "");
                                    cm.OnStartNavigation(993150100, 0, "north00", 37517);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37517.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#对抗者大人？", 36, 3004437, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不好了！", 36, 3004437, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(37517);
                    cm.dispose()
                }
            }
        }
    }
};