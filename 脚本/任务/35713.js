var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -80, 155)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -138, 164);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("喂！", 57, 0, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("你醒醒！", 57, 0, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face4#……", 37, 3003769, true, true)
                            } else {
                                if (status === b++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("首先……得把树根清理掉再下去。", 57, 0, false, true)
                                    } else {
                                        if (status === b++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === b++) {
                                                cm.inGameDirectionEvent_QTE(2)
                                            } else {
                                                if (status === b++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                                                        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;05=h3;15=h1;09=h0;79=h1");
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;05=h2;15=h1;09=h0;79=h1");
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.inGameDirectionEvent_QTE(2)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                                                                        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;05=h4;15=h1;09=h0;79=h1");
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/azuntied", 200);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1440)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;05=h5;15=h1;09=h0;79=h1");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("她似乎受到了很大打击。还是没有完全清醒。", 57, 0, false, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("还是……先等她醒过来吧……？", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk_Bottom("真是……太好了……", 57, 0, false, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom("我不用再一个人兜兜转转了……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk_Bottom("其他人也会没事的……", 57, 0, false, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom("就这样……一个一个地去找就行了……", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.sendNormalTalk_Bottom("哈啊……", 57, 0, false, true)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.npc_ChangeController(3003724, "oid=2308091", -360, 180, 6, -410, -310, 0, true, 1000, false);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308091", "summon", 0, 0);
                                                                                                                            cm.npc_ChangeController(3003724, "oid=2308092", 90, 180, 1, 40, 140, 1, true, 1000, false);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308092", "summon", 0, 0);
                                                                                                                            cm.npc_ChangeController(3003724, "oid=2308093", -490, 180, 7, -540, -440, 0, true, 1000, false);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308093", "summon", 0, 0);
                                                                                                                            cm.npc_ChangeController(3003725, "oid=2308094", 300, 180, 3, 250, 350, 1, true, 1000, false);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308094", "summon", 0, 0);
                                                                                                                            cm.npc_ChangeController(3003725, "oid=2308095", -670, 180, 18, -720, -620, 0, true, 1000, false);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308095", "summon", 0, 0);
                                                                                                                            cm.npc_ChangeController(3003725, "oid=2308096", 420, 180, 11, 370, 470, 1, true, 1000, false);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308096", "summon", 0, 0);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308091", "stand", -1, 1);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308092", "stand", -1, 1);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308093", "stand", -1, 1);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308094", "stand", -1, 1);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308095", "stand", -1, 1);
                                                                                                                            cm.npc_SetSpecialAction("oid=2308096", "stand", -1, 1);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644704/Regen", 100);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644705/Regen", 100);
                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.sendNormalTalk_Bottom("咳……都追到这里来了？", 57, 0, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("真是一刻都不让人放松！", 57, 0, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === b++) {
                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                                                    } else {
                                                                                                                                        if (status === b++) {
                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                        } else {
                                                                                                                                            if (status === b++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                            } else {
                                                                                                                                                if (status === b++) {
                                                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                } else {
                                                                                                                                                    if (status === b++) {
                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                        cm.askAcceptDecline_Bottom("得尽快消灭那些家伙！", 57, 3003705)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === b++) {
                                                                                                                                                            cm.playerMessage(5, "必须要消灭所有发起攻击的怪物。");
                                                                                                                                                            cm.npc_LeaveField("oid=2308091");
                                                                                                                                                            cm.npc_LeaveField("oid=2308091");
                                                                                                                                                            cm.npc_LeaveField("oid=2308092");
                                                                                                                                                            cm.npc_LeaveField("oid=2308092");
                                                                                                                                                            cm.npc_LeaveField("oid=2308093");
                                                                                                                                                            cm.npc_LeaveField("oid=2308093");
                                                                                                                                                            cm.npc_LeaveField("oid=2308094");
                                                                                                                                                            cm.npc_LeaveField("oid=2308094");
                                                                                                                                                            cm.npc_LeaveField("oid=2308095");
                                                                                                                                                            cm.npc_LeaveField("oid=2308095");
                                                                                                                                                            cm.npc_LeaveField("oid=2308096");
                                                                                                                                                            cm.npc_LeaveField("oid=2308096");
                                                                                                                                                            var a = cm.getEventManager("痛苦迷宫_战斗2");
                                                                                                                                                            a.startInstance(cm.getPlayer(), cm.getMap());
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35713.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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