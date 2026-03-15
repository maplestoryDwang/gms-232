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
            cm.sendNormalTalk_Bottom("#face0#才消灭500只怪物就想我做你同伴，没门儿！去消灭999只等级范围怪物吧！", 37, 9111009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……要消灭999只也太过分了。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#万事屋，别闹了。", 37, 9111008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#啊……天狗……我……可是他……", 37, 9111009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我没关系的。所以，你也别整他了。", 37, 9111008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#…。", 37, 9111009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58809, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58809.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("现在你肯做我同伴了吧？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……既然天狗都说没关系了，我就答应你吧。", 37, 9111009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("终于成功了！", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#以后就拜托你多多关照咯。", 37, 9111009, true, true)
                    } else {
                        if (status === a++) {
                            cm.setNumberForQuestInfo(58711, "9", 3);
                            cm.forceCompleteQuest(58809);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};