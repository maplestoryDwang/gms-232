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
            cm.dispose()
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
            cm.setInGameDirectionMode(true, false, true);
            cm.forceCompleteQuest(64044);
            cm.forceStartQuest(64045, "");
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.gainItem(4036383, -50)
        } else {
            if (status === a++) {
                cm.npc_setForceFlip("oid=3703280", 1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=3703280", 1, 110, 50);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#给，这是野狼肉。切成薄片保存的话，够吃很长时间的。", 37, 9400587, false, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128);
                            cm.onSetBackEffect("door", 1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(250)
                        } else {
                            if (status === a++) {
                                cm.npc_ChangeController(9400597, "oid=3703961", 858, -45, 1, 808, 908, 1, true, false);
                                cm.npc_SetSpecialAction("oid=3703961", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯？野狼肉？", 37, 9400597, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#这又老又难吃的肉，是给人吃的吗？", 37, 9400597, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#啊！抱歉，我搞错了。是因为我叫你们自带食物，所以你们弄来了野狼肉。是你们吃的~？我理解错了。", 37, 9400597, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#那么，这回你们去找些我们能吃的东西来吧？", 37, 9400597, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……", 37, 9400596, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 9400581, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 9400582, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 9400580, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#知道了。给你们打只花花象可以吗？", 37, 9400587, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#嗯，比野狼肉好多了。", 37, 9400597, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/close", 128);
                                                                                    cm.onSetBackEffect("door", 1, 1, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_LeaveField("oid=3703961");
                                                                                        cm.npc_LeaveField("oid=3703961");
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.warp(867201130, 0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.npc_LeaveField("oid=3703280");
                                                                                            cm.npc_LeaveField("oid=3703280");
                                                                                            cm.npc_LeaveField("oid=3703281");
                                                                                            cm.npc_LeaveField("oid=3703281");
                                                                                            cm.npc_LeaveField("oid=3703282");
                                                                                            cm.npc_LeaveField("oid=3703282");
                                                                                            cm.npc_LeaveField("oid=3703283");
                                                                                            cm.npc_LeaveField("oid=3703283");
                                                                                            cm.npc_LeaveField("oid=3703284");
                                                                                            cm.npc_LeaveField("oid=3703284");
                                                                                            cm.npc_LeaveField("oid=3703285");
                                                                                            cm.npc_LeaveField("oid=3703285");
                                                                                            cm.npc_LeaveField("oid=3703286");
                                                                                            cm.npc_LeaveField("oid=3703286");
                                                                                            cm.npc_LeaveField("oid=3703287");
                                                                                            cm.npc_LeaveField("oid=3703287");
                                                                                            cm.npc_LeaveField("oid=3703288");
                                                                                            cm.npc_LeaveField("oid=3703288");
                                                                                            cm.npc_LeaveField("oid=3703289");
                                                                                            cm.npc_LeaveField("oid=3703289");
                                                                                            cm.npc_LeaveField("oid=3703290");
                                                                                            cm.npc_LeaveField("oid=3703290");
                                                                                            cm.npc_LeaveField("oid=3703291");
                                                                                            cm.npc_LeaveField("oid=3703291");
                                                                                            cm.npc_LeaveField("oid=3703292");
                                                                                            cm.npc_LeaveField("oid=3703292");
                                                                                            cm.npc_LeaveField("oid=3703293");
                                                                                            cm.npc_LeaveField("oid=3703293");
                                                                                            cm.npc_LeaveField("oid=3703294");
                                                                                            cm.npc_LeaveField("oid=3703294");
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
                            }
                        }
                    }
                }
            }
        }
    }
};