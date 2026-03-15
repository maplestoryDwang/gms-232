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
            cm.sendNormalTalk_Bottom("那是…… 什么？", 32, 9390250, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？这些该死的阿库旁多们！", 56, 9390250, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("数量真是惊人。那后面又是什么啊。", 32, 9390250, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("就是说，是些见都没见过，听都没听过的家伙。虽然看模样好像很普通。", 56, 9390250, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这些家伙。欺负我们种族的家伙们。", 36, 9390208, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你是谁？欺负这词用得很奇怪！是你们一直在袭击我们商团啊。", 56, 9390250, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我是江河之子。袭击你们是对你们恶行的惩罚。", 36, 9390208, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你说恶行？我们做了什么，为什么你要这么说？", 56, 9390250, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo_Bottom("你应该很清楚。我应该不用再跟你浪费口舌了吧。", 36, 9390208)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(17630, "");
                                                cm.dispose();
                                                cm.warp(865020051, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17630.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呼…… 真是没完没了。它们的数量太多了。看来，我们真的是落入了陷阱。", 2, 9390250, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(17630);
                cm.forceCompleteQuest(17720);
                cm.dispose();
                cm.warp(865020061, 0)
            }
        }
    }
};