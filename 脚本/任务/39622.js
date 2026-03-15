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
            cm.sendNormalTalk_Bottom("#face0#一定要在钥匙公开现世之前阻止他们。\r\n布鲁，拉迪，关于艺术节，你们有没有查到什么？", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我们接到消息，舞会的着装要求是“面具”。\r\n入场的贵族们全部都要戴上面具。", 36, 3001962, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#啊，还有，伯爵将在舞会结束的时候公开艺术品。\r\n他的目的就是要吸引所有贵族的关注。", 36, 3001963, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#我们去参加假面舞会，然后趁机盗取钥匙。\r\n接下来就着手进行潜入准备吧。\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001952, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#舞会当天，自卫队队员们需要在村里做好巡逻工作。\r\n我担心万一计划失败，伯爵不知道会干出什么事来。", 36, 3001952, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我带他们几个去准备潜入所需的物品。\r\n阿黛尔，你这期间就和布乌……", 36, 3001952, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(993162031, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39622.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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