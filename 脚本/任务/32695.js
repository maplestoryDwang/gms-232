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
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("队长！海姿！", 37, 2550007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好，要坚持到海姿成功引爆的时候。\r\n桥梁一旦被突破就完了。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("(拼死也要守住大桥。)", 57, 0)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("全力突击！死守桥梁！", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_ForcedFlip10(1, 500);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("队长！！！", 37, 2550007, false, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.playerMessage(5, "请死守桥梁，阻拦一涌而上的敌人。");
                                        cm.npc_LeaveField("oid=22408917");
                                        cm.npc_LeaveField("oid=22408918");
                                        cm.npc_LeaveField("oid=22408919");
                                        cm.dispose();
                                        cm.warp(306050600, 0)
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