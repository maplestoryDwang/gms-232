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
            cm.askAcceptDecline("(哔)你好，有机生命体。骑乘完毕。移动系统已启动。", 0, 9201176)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(true, true, true);
                cm.inGameDirectionEvent_MoveAction(0);
                cm.forceStartQuest(28753, "");
                cm.useItem(2210065, false);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.sendNormalTalk("站住！", 1, 9201174, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哈？那是什么？", 3, 9201174, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(100)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_MoveAction(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(30)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -150, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -200, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -250, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -300, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -350, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -400, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -450, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -500, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -550, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -600, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -650, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [9000, -700, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [0, 0, -150, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("这里到处都是外星人！我得想办法逃走！！", 3, 9201174, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_MoveAction(2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                            cm.warp(610040600, 0, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.eventSKill(0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/28753.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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