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
            cm.sendNext("这是哪里？还能是哪里，当然是射手村了！什么？射手村是哪里？你是想耍我吗？不然的话，怎么会不知道射手村？真的不知道？啊，真实的，看你的表情又不像在说谎……", 1012003)
        } else {
            if (status == a++) {
                cm.askAcceptDecline("射手村是位于六岔路口下面的一个村子。六岔路口在哪里？六岔路口就在……到底有什么是你知道的？这样不行啦。必须要有地图我才能向你解释清楚。你去我家里把冒险岛地图拿过来。", 1012003)
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
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
            cm.updateInfoQuest(38032, "NpcSpeech=10121061");
            cm.updateInfoQuest(38032, "NpcSpeech=10121061/10121082");
            cm.dispose()
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
            cm.updateInfoQuest(38032, "NpcSpeech=10121061/10121082/10121093");
            cm.dispose()
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
            cm.updateInfoQuest(38032, "NpcSpeech=10121061/10121082/10121093");
            cm.dispose()
        }
    }
}

function stage3(d, c, b) {
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
            cm.sendNormalTalk("亚华借给我的#r#t4034060##k，确实在我身上。啊，这原来是长老斯坦的东西吗？刚好我用完了，需要的话，你可以拿走。", 0, 1012111, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(38032, "NpcSpeech=10121061/10121082/10121093/10121114");
                cm.gainItem(4034060, 1);
                cm.dispose();
                cm.warp(100000000, 4, false);
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