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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("好的，先打开地图，我来继续给你说明。", 1, 1012003, false, true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/0", 1, 1, 1, 0, 0);
                    cm.sendNormalTalk("这是冒险岛地图。看见这个岛了吗？这就是金银岛。射手村就在这里，位于金银岛的南部。", 1, 1012003, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === a++) {
                            cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/1", 1, 1, 1, 0, 0);
                            cm.sendNormalTalk("神木村？神木村在大海的对面，在神秘岛上。冰峰雪域在这里，尼哈沙漠在这里。", 1, 1012003, false, true)
                        } else {
                            if (status === a++) {
                                cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/1", 1, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                            } else {
                                if (status === a++) {
                                    cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/2", 1, 1, 1, 0, 0);
                                    cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/3", 1, 1, 1, 0, 0);
                                    cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/4", 1, 1, 1, 0, 0);
                                    cm.askAcceptDecline("看来你的故乡是神秘岛大陆。我们村也有来自神秘岛大陆的人，哦不，应该是精灵。叫做#r赫丽娜#k…………你想见见吗？", 1, 1012003)
                                } else {
                                    if (status === a++) {
                                        cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/2", 1, 0, 0, 0, 0);
                                        cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/3", 1, 0, 0, 0, 0);
                                        cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/4", 1, 0, 0, 0, 0);
                                        cm.updateInfoQuest(38033, "");
                                        cm.forceStartQuest(38033, "");
                                        cm.sendNormalTalk("(#r赫丽娜#k？精灵赫丽娜，是那个整天跟着双弩精灵的孩子吗？听说她乘坐避难船，去了金银岛。看来她在这个村子里安顿了下来。赫丽娜也许知道双弩精灵的消息。)", 3, 1012003, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.effect_REPEAT("Effect/Direction15.img/effect/story/worldmap/0", 1, 0, 0, 0, 0);
                                            cm.sendNormalTalk("赫丽娜就在弓箭手培训中心。她正忙着为新手弓箭手培训，所以你别占用她太多的时间。", 1, 1012003, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.OnStartNavigation(100000201, 0, "", 38033);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38033.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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