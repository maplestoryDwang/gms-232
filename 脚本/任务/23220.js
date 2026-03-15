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
            cm.forceStartQuest(23220, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23220.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这种感觉……", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("感觉到了当军团长的时候没有感受到的全新的感情。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("除了感情之外，感觉有股新的力量在喷涌而出。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是的，不过我不会忘记。我的过去，以及要做的事情！", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("为了不再让我这样的人出现，必须消除邪恶，改正我犯下的错误。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.teachSkill(30011005, 1, 1);
                                cm.forceCompleteQuest(23220);
                                cm.gainItem(1142557, 1);
                                cm.forceCompleteQuest(32004);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};