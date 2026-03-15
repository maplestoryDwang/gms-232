var status = -1;

function start() {
    action(1, 0, 0)
}

function start(e, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -1272, 200);
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1362, 243)
        } else {
            if (status === b++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("沃莉！沃莉！", 57, 0, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face1#咳咳！咳咳，咳咳！我没事……咳咳！！只是稍微喝了点水。", 37, 3003500, true, true)
                        } else {
                            if (status === b++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                cm.sendNormalTalk_Bottom("#face0#呼……听声音好像没事。你们俩快回来吧，小心一点。通信结束。", 37, 3003502, true, true)
                            } else {
                                if (status === b++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face1#哎呀，喝了这么多生命精髓，一定会变成大美人。", 37, 3003500, false, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("这时候还有心情开玩笑……", 57, 0, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("#face0#先把塔纳传送回去，然后我们再慢慢回去。", 37, 3003500, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("咦？沃莉被打湿之后，绷带松开了……", 57, 0, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect3.img/esfera/wound/0", 0, 500, 0, -80, 12, 4, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("01", "Map/Effect3.img/esfera/wound/1", 0, 1000, 0, -80, 12, 4, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("这个纹样是……！！", 57, 0, false, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#你怎么了？", 37, 3003500, true, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 500, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, -1600, 243)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.npc_SetSpecialAction("oid=2005506", "special", 1, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.npc_LeaveField("oid=2005506");
                                                                                            cm.npc_ChangeController(3003521, "oid=2005520", -1600, 130, 5, -1650, -1550, 0, false, false);
                                                                                            cm.npc_SetSpecialAction("oid=2005520", "summon", 0, 0);
                                                                                            cm.sendNormalTalk_Bottom("#face0#蜘蛛是敌人……", 37, 3003521, false, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#快退后，#h0#！", 37, 3003500, true, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644508/Attack1", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                                                                                            cm.sendNormalTalk_Bottom("沃莉！呃……", 57, 0, false, true)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.askAcceptDecline_Bottom("执行者们冲上来了。必须保护沃莉！", 57, 3003551)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.playerMessage(5, "必须消灭掉冲上来的执行者。");
                                                                                                                    cm.dispose();
                                                                                                                    var a = cm.getEventManager("埃斯佩拉_剧情_战斗1");
                                                                                                                    a.startInstance(cm.getPlayer(), cm.getMap())
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
            cm.sendNormalTalk_Bottom("咳咳！咳咳！", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你……攻击威尔，妨碍仪式的人是你。\r\n你到底想干什么？为什么……要救我？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3003505, true, true)
                } else {
                    if (status === a++) {
                        cm.setInGameDirectionMode(true, false, true);
                        cm.setStandAloneMode(true);
                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                            cm.effect_Text(["#fn黑体##fs20#为了除掉那家伙……需要#r「对抗者」#k。"], [70, 2200, 4, 0, 0, 1, 4, 0, 0, 0])
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那家伙……是指黑魔法师？啊？！", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                    cm.forceCompleteQuest(34580);
                                    cm.forceStartQuest(34593, "");
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
                                                    cm.dispose();
                                                    cm.warp(450007040, 0)
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