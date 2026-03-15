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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -280, -100);
            cm.sendNormalTalk_Bottom("#face1#那么说，刚才看到的地方是光明神殿……", 37, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#没想到我竟然能亲眼见到超越者……\r\n但是她们俩看上去不就像普通的少女吗？右边那个是塔纳吗？", 37, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("没错。但是不知道是怎么回事。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("塔纳的力量撼动了艾尔达。\r\n她使用的是光明超越者的力量吗？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("等等。那光明超越者使用的是什么力量呢？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#原来如此。应该……也不会发光啊……", 37, 3003500, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#光明和黑暗不过是比喻。", 37, 3003504, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.npc_ChangeController(3003504, "oid=2003311", -400, -100, 62, -450, -350, 0, false, 300, false);
                                        cm.npc_SetSpecialAction("oid=2003311", "summon", 0, 0);
                                        cm.sendNormalTalk_Bottom("呃啊啊！！", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#你刚才看到的那个……", 37, 3003500, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我是执行者。名字已经抛弃了。和肉体一样。", 37, 3003504, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face3#抛弃了名字和肉体？\r\n如果之前说的光明和黑暗只是比喻，那光明超越者的能力到底是什么呢？", 37, 3003500, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#跟我来。让你们亲眼看看。", 37, 3003504, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#到#b镜澄之海5#k去。", 37, 3003504, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_LeaveField("oid=2003311");
                                                                cm.updateInfoQuest(34575, "enter=fin");
                                                                cm.sendNormalTalk_Bottom("#face1#消失了。", 36, 3003500, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#也许……是个陷阱，但是最好还是跟过去看看。", 36, 3003500, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.askAcceptDecline_Bottom("#face3#只要移动到#b镜澄之海5#k就行。", 36, 3003500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h1");
                                                                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h1;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h1");
                                                                            cm.forceStartQuest(34575, "");
                                                                            cm.OnStartNavigation(450007140, 0, "", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face3#流淌出来的镜之力量好像正在变强。\r\n即，我们正在逐渐接近沉到某个地方的塔纳。", 37, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, -287, 177)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(700)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那是书桌吗？", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那根棍子，对着书桌使用。", 37, 3003504, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(34575);
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
};