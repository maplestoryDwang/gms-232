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
            cm.forceStartQuest(34647, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34647.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 1484, -48);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#这东西我来保管，如果把它落下，那可就彻底玩完了！", 37, 3001270, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3001270, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……莫名有种被人监视的感觉……难道是我想多了……我们快返回据点吧。", 37, 3001270, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.userSetFieldFloating(400010210, 3, 3, 10);
                                    cm.inGameDirectionEvent_AskAnswerTime(900)
                                } else {
                                    if (status === a++) {
                                        cm.userSetFieldFloating(400010210, 0, 0, 0);
                                        cm.inGameDirectionEvent_OneTimeAction(4, 200);
                                        cm.fieldEffect_PlayBGM("Bgm27.img/BorderArea", 0, 0);
                                        cm.userSetFieldFloating(400010210, 3, 3, 10);
                                        cm.inGameDirectionEvent_AskAnswerTime(900)
                                    } else {
                                        if (status === a++) {
                                            cm.userSetFieldFloating(400010210, 0, 0, 0);
                                            cm.userSetFieldFloating(400010210, 3, 3, 10);
                                            cm.inGameDirectionEvent_AskAnswerTime(900)
                                        } else {
                                            if (status === a++) {
                                                cm.userSetFieldFloating(400010210, 0, 0, 0);
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.forceCompleteQuest(34647);
                                                            cm.gainExp(19967);
                                                            cm.playerMessage(5, "伴随着大地的震颤，一群幽灵出现了。");
                                                            cm.getTopMsgFont("伴随着大地的震颤，一群幽灵不知从哪里冒了出来。", 3, 20, 20, 0, 0);
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
};