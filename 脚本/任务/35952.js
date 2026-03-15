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
            cm.sendNormalTalk("我是#b射手村幼儿园#k的老师麦琪#k。\r\n\r\n我教的孩子们没跟我说一声就出去了，过了好几个小时都没回来。之前从没发生过这种事……", 4, 1013446, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("从脚印看应该是往这边来了。我担心他们进入了那片森林，在里面迷了路，但却只能在这里干着急。", 4, 1013446, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("（孩子们消失了……难道是偶然吗？难道真的是黑魔法师干的？）", 2, 1013400, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("拜托你了。如果见到了孩子们，请告诉他们我在森林入口处等他们。", 4, 1013446)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(35952, "");
                            cm.sendNormalTalk("但愿别出什么事……。", 4, 1013446, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("脚印一直通向森林深处。先跟着痕迹过去看看吧。", 2, 1013400, true, true)
                            } else {
                                if (status === a++) {
                                    cm.OnStartNavigation(100051000, 0, "west00", 35952);
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