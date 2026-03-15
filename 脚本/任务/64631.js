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
            cm.sendNormalTalk_Bottom("#face0#……这里也不是的话，那现在就只剩下凯梅尔兹这个地方了。", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b在凯梅尔兹肯定能找到线索，别担心。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#如果因为花了太多时间，爸爸妈妈已经离开了可怎么办？这都是我的错……如果没喝果汁……", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#……别自责了，艾米。就算爸爸妈妈离开了，我们也能知道他们现在很好，所以没关系的。", 37, 9400921, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#……没错……没时间说这些了。埃尔宾！#h0#！马上出发吧！\r\n#b(※接受时，自动前往凯梅尔兹。)", 37, 9400920)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(64631, "");
                                cm.dispose();
                                cm.warp(865000000, 3)
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
            cm.sendNormalTalk_Bottom("#face1#这… 这里！没错，就是这里！和明信片一模一样！", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#我有一种不错的预感。", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#但这好广阔啊，要从哪开始找呢… 先和人们问问比较好吧！", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(64631);
                        cm.forceStartQuest(64632, "");
                        cm.OnStartNavigation(865000000, 1, "9390217", 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
};