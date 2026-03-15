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
            cm.sendNormalTalk_Bottom("新进队长，第一次探险如何？", 37, 9401022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("太酷了！我还亲眼看见了深渊迪格……！", 37, 9401029, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("莫妮卡，看来你是队长啊。", 37, 9401022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嘤嘤……", 37, 9401029, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b正如莫妮卡所说，非常酷。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那真是太好了。你提前结束了冒险吗？虽然这是你的选择，但新人时期，我还是建议你尽量多探索一些。往后还有更酷的事情在等着你。", 37, 9401022, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啊对了，你知道远征队本部每天会根据探险时间支援一次补给品吧？", 37, 9401022, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("其中有许多实用的物品，请你探险结束后务必去看一眼。", 37, 9401022, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(64767);
                                            cm.playerMessage(5, "[深渊远征队教程]根据探险时间，1天可在远征队总部获得1次补给品。");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64767.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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