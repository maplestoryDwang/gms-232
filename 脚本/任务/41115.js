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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.updateInfoQuest(41115, "NpcSpeech=24300081");
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
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
            cm.updateInfoQuest(41115, "NpcSpeech=24300081/24300072");
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk("桉需要玩伴？好吧，那我就来当桉的朋友吧。我们玩什么呢？对了，先去抓个青蛙和蚯蚓，放在桉的头上。", 0, 2430013, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……！！不，不。仔细一想，还是桉自己玩更好。", 2, 2430013, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(41115, "NpcSpeech=24300081/24300072/24300133");
                    cm.dispose()
                }
            }
        }
    }
}

function stage3(d, c, b) {
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
            cm.sendNormalTalk("桉是巴缇大婶的女儿吧？每天都在蘑菇村自己玩的……", 0, 2430014, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("对。你去当桉的朋友吧？桉说需要个玩伴陪她一起玩娃娃。", 4, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("娃娃？其实我更喜欢机器人……", 0, 2430014, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……不对不对，是我记错了。桉说她喜欢的是机器人。对，肯定没错的。", 4, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不对，阿尔法。桉分明是对娃娃……", 4, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("对对！她说过，这世上最讨厌玩娃娃。对吧？不是吗？", 4, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("…………", 4, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("真的吗？那我这就去和她做朋友！", 0, 2430014, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(41115, "NpcSpeech=24300081/24300072/24300133/24300144");
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};