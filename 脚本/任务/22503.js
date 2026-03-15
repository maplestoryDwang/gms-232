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
            cm.sendNormalTalk("除了这个，没别的吃的了吗？我不喜欢吃草，我需要营养更高的东西，主人！", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯……不喜欢吃吗？龙说不定会喜欢吃肉食。#t4032453#之类的东西怎么样呢？", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("我不知道#t4032453#是什么东西～但是只要是好吃的东西，不管什么都可以。快给我去找点吃的～除了草！", 0, 1013000)
                } else {
                    if (status === a++) {
                        cm.getMap().spawnReactorIfNotExist(1002008, 0, 826, -408, 0, "");
                        cm.forceStartQuest(22503, "");
                        cm.sendNormalTalk("#b#b(请你把#t4032453#给#p1013000#吧。在农场抓几只#o1210100#就可以，只要3个就够了吧？)", 2, 1013000, false, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(100030310, 0, "", 22503);
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22503.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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