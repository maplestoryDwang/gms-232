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
            cm.sendNormalTalk_Bottom("#face2#呃呃呃，呵呵呵呵！忙死了忙死了！", 36, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face1##h0#！现在不是这样的时候！快带着艾丹、米兰达和杰弗里一起来凯尼斯大叔家别馆！", 36, 9400920)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b别馆？", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#嗯，别馆！你来大叔家前面就知道了！", 37, 9400920, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#我要忙了拜拜！", 37, 9400920, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(65436, "");
                                cm.OnStartNavigation(871000000, 1, "9400925", 0);
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
            cm.sendNormalTalk_Bottom("#face2#噢噢！可以参观凯尼斯家的别馆了！太好了！我马上出发！对了，要买乔迁礼物吗？", 37, 9400925, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(65436, "NpcSpeech=94009251");
                cm.OnStartNavigation(871000000, 1, "9400924", 0);
                cm.dispose()
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face1#(点头)，我马上去。", 37, 9400924, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(65436, "NpcSpeech=94009251/94009242");
                cm.OnStartNavigation(871000000, 1, "9400923", 0);
                cm.dispose()
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face2#凯尼斯大叔家别馆？她又要干嘛……该不会？！她要在那里开咖啡店吧？！", 37, 9400923, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(65436, "NpcSpeech=94009251/94009242/94009233");
                cm.OnStartNavigation(871000000, 0, "goCafe", 0);
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