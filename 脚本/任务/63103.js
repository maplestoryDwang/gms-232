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
            cm.setStandAloneMode(true);
            cm.sendNormalTalk("#b太好了，下雨了，雨水能把铜像完全打湿，这样我就能顺利地把长枪抽出来了。", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b动手吧……嗨……哟！……嗨……嗬！", 3, 0, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.npc_SetSpecialAction("oid=113264", "action", 0, 0);
                        cm.forceStartQuest(63103, "");
                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b嗬！！！", 3, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("妈呀！铜像的长枪飞出去了！", 5, 9400210, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("天啊！从来没有丝毫动静的长枪飞出去了！", 5, 9400211, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("到底发生什么事了？？", 5, 9400212, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b哎呀……没想到会变成这样……长枪飞哪去了？", 3, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b希望长枪飞到了#r财物之地#k#b附近……去找找吧。", 3, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(63103);
                                                    cm.setStandAloneMode(false);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63103.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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