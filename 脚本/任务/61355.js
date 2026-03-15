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
            cm.updateInfoQuest(61333, "act1=610061530");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("真是太险了！", 37, 9201537, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("如果记忆之门坍塌，那就被困在那老家伙的记忆里了，\r\n困上一辈子。", 37, 9201537, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("真是太鲁莽了！", 37, 9201537, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("但你要想想我们都获取了什么情报嘛！", 57, 9201537, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("最后那个场景，克拉齐亚——不，克拉奇安……\r\n我看到#b克拉奇安#k沉入了海底。", 57, 9201537, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("原来是幻日的毁灭导致这个大陆沉入了海底！", 57, 9201537, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("呃——呃……", 37, 9201536, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("哈，我们这位朋友可算是醒了。", 37, 9201537, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(61355);
                                                    cm.eventSKill(0);
                                                    cm.warp(610061540, 0, true);
                                                    cm.setInGameDirectionMode(false, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/61355.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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