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
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -690, 155)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -677, 161);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("怎么回事……为什么闪闪发光……", 57, 0, false, true)
                    } else {
                        if (status === b++) {
                            cm.inGameDirectionEvent_ForcedFlip10(1, 100);
                            cm.sendNormalTalk_Bottom("似乎是这附近在闪……", 57, 0, true, true)
                        } else {
                            if (status === b++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/0"], [0, -846, 100, 1, 0, 1, 1, 0]);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/glass", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === b++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（绝对就是这附近！）", 57, 0, false, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face0#你在那干什么呢？", 37, 3003770, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("这附近似乎有通道。", 57, 0, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face0#啊……是吗？我只能看到一面高墙啊？", 37, 3003770, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_OneTimeAction(16, 0);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                                                        cm.inGameDirectionEvent_AskAnswerTime(700)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_OneTimeAction(16, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.setAmbience("SoundEff.img/BM2/movelong", 80, 100);
                                                                cm.userSetFieldFloating(993063009, 7, 7, 1);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/13"], [10000, -905, -350, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/12"], [10000, -634, -350, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/14"], [10000, -235, -350, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/12"], [10000, -1005, -350, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/12"], [10000, 40, -350, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/14"], [10000, -1100, -350, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                    cm.sendNormalTalk_Bottom("怎……怎么回事？", 57, 0, false, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#大地在震动！你到底动了什么？！", 37, 3003770, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.npc_ChangeController(3003724, "oid=2308638", -880, 180, 16, -930, -830, 0, true, 1000, false);
                                                                            cm.npc_SetSpecialAction("oid=2308638", "summon", 0, 0);
                                                                            cm.npc_ChangeController(3003724, "oid=2308639", -950, 180, 15, -1000, -900, 0, true, 1000, false);
                                                                            cm.npc_SetSpecialAction("oid=2308639", "summon", 0, 0);
                                                                            cm.npc_ChangeController(3003724, "oid=2308640", -1220, 180, 28, -1270, -1170, 0, true, 1000, false);
                                                                            cm.npc_SetSpecialAction("oid=2308640", "summon", 0, 0);
                                                                            cm.npc_ChangeController(3003725, "oid=2308641", -1000, 180, 24, -1050, -950, 0, true, 1000, false);
                                                                            cm.npc_SetSpecialAction("oid=2308641", "summon", 0, 0);
                                                                            cm.npc_ChangeController(3003725, "oid=2308642", -1150, 180, 22, -1200, -1100, 0, true, 1000, false);
                                                                            cm.npc_SetSpecialAction("oid=2308642", "summon", 0, 0);
                                                                            cm.npc_ChangeController(3003725, "oid=2308643", -1280, 180, 27, -1330, -1230, 0, true, 1000, false);
                                                                            cm.npc_SetSpecialAction("oid=2308643", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2308638", "stand", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=2308639", "stand", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=2308640", "stand", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=2308641", "stand", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=2308642", "stand", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=2308643", "stand", -1, 1);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644704/Regen", 100);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644705/Regen", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#怪物出现了。唉……到底你是惹事的体质，还是各种事件都跟着#h0#啊！", 37, 3003770, false, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("快点离开这里！", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.userSetFieldFloating(993063009, 0, 0, 0);
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
                                                                                                        cm.askAcceptDecline_Bottom("#face3#我不再相信#h0#找路的能力了，跟我来！", 37, 3003770)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.playerMessage(5, "在区域内减少一定数量的怪物才能前往下一关卡。");
                                                                                                            cm.npc_LeaveField("oid=2308420");
                                                                                                            cm.npc_LeaveField("oid=2308420");
                                                                                                            cm.npc_LeaveField("oid=2308638");
                                                                                                            cm.npc_LeaveField("oid=2308638");
                                                                                                            cm.npc_LeaveField("oid=2308639");
                                                                                                            cm.npc_LeaveField("oid=2308639");
                                                                                                            cm.npc_LeaveField("oid=2308640");
                                                                                                            cm.npc_LeaveField("oid=2308640");
                                                                                                            cm.npc_LeaveField("oid=2308641");
                                                                                                            cm.npc_LeaveField("oid=2308641");
                                                                                                            cm.npc_LeaveField("oid=2308642");
                                                                                                            cm.npc_LeaveField("oid=2308642");
                                                                                                            cm.npc_LeaveField("oid=2308643");
                                                                                                            cm.npc_LeaveField("oid=2308643");
                                                                                                            var a = cm.getEventManager("痛苦迷宫_战斗3");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35716.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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