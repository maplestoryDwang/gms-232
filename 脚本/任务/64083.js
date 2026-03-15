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
            cm.npc_setForceFlip("oid=7614491", 1);
            cm.sendNormalTalk_Bottom("#face0#那就出发吧？", 37, 9400580, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b好的，今天也请多多关照啦。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#当然了。啊！小石还是就留在这里吧。前面的路越来越危险了，我担心它可能会走丢。", 37, 9400580, true, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(250)
                    } else {
                        if (status === a++) {
                            cm.npc_setForceFlip("oid=7614491", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(250)
                        } else {
                            if (status === a++) {
                                cm.npc_setForceFlip("oid=7614491", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(250)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetForceMove("oid=7614491", 1, 500, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(250)
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetForceMove("oid=7614492", 1, 500, 150);
                                        cm.inGameDirectionEvent_AskAnswerTime(6000)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_LeaveField("oid=7614492");
                                            cm.npc_LeaveField("oid=7614492");
                                            cm.npc_setForceFlip("oid=7614491", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(250)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_SetForceMove("oid=7614491", -1, 500, 120);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#现在出发吧！", 37, 9400580, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(64083, "");
                                                        cm.updateInfoQuest(64083, "mapIdx=0");
                                                        cm.npc_LeaveField("oid=7614491");
                                                        cm.npc_LeaveField("oid=7614491");
                                                        cm.dispose();
                                                        cm.openNpc(0, "副本_莫奈德_Act2_探索森林四");
                                                        cm.setInGameDirectionMode(false, true, false)
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