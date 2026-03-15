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
            cm.sendNormalTalk_Bottom("#face4#真是徒劳啊，没能查清那些孩子们的身份！", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#是的。其实，我收拾木材的时候察看了下四周，却没有发现孩子们的踪迹。", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#希望那些孩子们不要进入森林深处……\r\n虽说附近的怪物没那么危险，但如果夜晚在树林里迷路，就大事不妙了。", 37, 9400922, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b也许……孩子们会再次回到凯兰西亚？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#说不定呢？太阳快落山了，我们也不要回去得太晚。", 37, 9400923)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#那就太棒了，快走吧！", 37, 9400921, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(64905, "");
                                    cm.OnStartNavigation(871000055, 0, "sp", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64905.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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