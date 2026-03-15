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
            cm.forceStartQuest(34475, "");
            cm.dispose();
            cm.warp(940200212, 0)
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
            cm.forceCompleteQuest(34475);
            cm.forceStartQuest(34488, "");
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.npc_ChangeController(3003351, "oid=1901123", -1250, 120, 57, -1300, -1200, 0, true, false);
            cm.npc_SetSpecialAction("oid=1901123", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=1901123", "stand2", -1, 1);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -797, 114);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === a++) {
                    cm.userSetFieldFloating(450005400, 3, 3, 10);
                    cm.inGameDirectionEvent_AskAnswerTime(900)
                } else {
                    if (status === a++) {
                        cm.userSetFieldFloating(450005400, 0, 0, 0);
                        cm.sendNormalTalk_Bottom("#face0#啊，这是怎么回事？大地好像在晃动啊？", 37, 3003301, false, true)
                    } else {
                        if (status === a++) {
                            cm.userSetFieldFloating(450005400, 5, 5, 20);
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(600)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_AskAnswerTime(600)
                            } else {
                                if (status === a++) {
                                    cm.userSetFieldFloating(450005400, 0, 0, 0);
                                    cm.sendNormalTalk_Bottom("#b(果然在晃动，这到底是怎么回事？)#k", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#咚咚在哭~得赶紧过去~赶紧赶紧~", 37, 3003302, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.setNpcSpecialActionReset("oid=1901123");
                                            cm.npc_SetSpecialAction("oid=1901123", "wind2", 0, 1);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip10(1, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#那个声音可真是异常痛苦~又悲伤呢~", 37, 3003302, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face7#看样子是精灵之树出什么事了吧！！！！！！！！！！", 37, 3003301, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.setNpcSpecialActionReset("oid=1901123");
                                                            cm.npc_SetSpecialAction("oid=1901123", "wind3", 0, 1);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2400)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_LeaveField("oid=1901123");
                                                                cm.sendNormalTalk_Bottom("#face7#看来得抓紧时间了！", 37, 3003301, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你说精灵之树！？", 37, 3003314, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#这么说我有个好法子！", 37, 3003314, false, true)
                                                                        } else {
                                                                            if (status === a++) {
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
                }
            }
        }
    }
};