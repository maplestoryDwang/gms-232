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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 100, 120)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
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
                            cm.sendNormalTalk_Bottom("#face0#为了确认位置，我会发射信号弹。\r\n如果他们没事，就会发射信号弹回应我们。", 37, 3003500, false, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#嗯……啊？坠落的时候，信号弹好像掉在了什么地方。", 37, 3003500, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 200, -5, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 400, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_ChangeController(3003511, "oid=1999274", 765, 130, 1, 715, 815, 1, true, 1000, false);
                                            cm.npc_SetSpecialAction("oid=1999274", "summon", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644500/Die", 200);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_setForceFlip("oid=1999274", 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_SetForceMove("oid=1999274", 1, 400, 150);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.Npc_Fadeout("oid=1999274", 0, 2500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_LeaveField("oid=1999274");
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                                                } else {
                                                                    if (status === a++) {
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
                                                                                    cm.setStandAloneMode(false);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.sendNormalTalk_Bottom("#face1#右边有些长得奇奇怪怪的乌龟。\r\n好像其中的某只乌龟吞下了信号弹。", 36, 3003500, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.askAcceptDecline_Bottom("#face0#你能去消灭#b亚图因#k，帮我把#b信号弹#k找回来吗？\r\n我来看看休麦他们有没有发射信号弹。", 36, 3003500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h1;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                                            cm.forceStartQuest(34563, "");
                                                                                            cm.sendNormalTalk_Bottom("#face0#那我先走了。就在#b右边#k。", 36, 3003500, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.OnStartNavigation(450007010, 0, "", 0);
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
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face3#找到了吗？但是……全都湿透了，好像没法用了。\r\n嗯？呼呼！有种奇怪的味道。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("应该是……唾液。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#呃……怎么办呢……\r\n里面好像没被打湿，晒干之后好像还能用。\r\n最好能在周围生堆火……", 36, 3003500, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34563);
                        cm.gainItem(4036449, -1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};