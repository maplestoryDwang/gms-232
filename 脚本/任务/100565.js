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
            cm.sendNormalTalk("太开心了！从没见过这样的地方！", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……冷静点。必须制定目标，才能玩得更尽兴。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("对了，#b#e“品克缤步步高”#n#k任务列表就是为这种时候准备的！", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不要因为来到新世界而彷徨，点击画面左侧的#b#e“品克缤步步高”#n#k图标吧！先努力完成上面写着的各个目标吧。#r#e那样也许就能获得什么。#n#k", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("漫无目的地到处玩倒是很符合我的风格。既然带了“美味肉肉”和其他各种东西，就尽情地玩吧！嘿嘿嘿。", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(100565, "");
                                cm.forceCompleteQuest(100565);
                                cm.forceStartQuest(100566, "");
                                cm.updateInfoQuest(100565, "questNum=100566");
                                cm.updateInfoQuest(100565, "stepNum=0;questNum=100566");
                                cm.setAccountQuestInfo(244, "StepUp=0");
                                cm.sendNormalTalk("很好！需要的东西都准备好了！\r\n#b#e第一个目标是达到30级！#n#k", 3, 0, true, true)
                            } else {
                                if (status === a++) {
                                    if (cm.getLevel() >= 30) {
                                        cm.forceCompleteQuest(100566)
                                    }
                                    cm.gainItem(2010041, 2000);
                                    cm.openUI(1267);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100565.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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