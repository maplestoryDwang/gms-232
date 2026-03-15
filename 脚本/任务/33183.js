var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    if (cm.isQuestFinished(33183)) {
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
            cm.npc_ChangeController(1540544, "oid=22415113", 950, 60, 7, 900, 1000, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=22415113", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 1500, 950, -75)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1035)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1800);
                        cm.effect_NormalSpeechBalloon("呃呃……呃…….", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 1540544, cm.getPlayer().getId())
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("还有士兵没能离开3号宿舍！！！\r\n抓紧时间！！", 37, 1540624, false, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 2100, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(311)
                                } else {
                                    if (status === a++) {
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.forceCompleteQuest(33183);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33183.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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