var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("…… 这前面究竟是什么? ", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("好可怕。真想现在就逃离这里。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("但是不能那样。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("如果真的能阻止他的暴走的话，那么现在是唯一的机会了。", 1)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_MoveAction(2);
                                cm.inGameDirectionEvent_AskAnswerTime(420)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_MoveAction(0);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.dispose();
                                        cm.warp(302090500, 0)
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

function end(d, c, b) {
    status++;
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