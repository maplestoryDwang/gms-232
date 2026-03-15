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
            cm.sendNormalTalk_Bottom("#face1#伊利温,今天进行特别活动的地点有些不同。请到#m402000501#来吧。", 36, 3001301, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#决定立即前往#m402000501#吗？\r\n#b(接受时将自动移动。)", 37, 3001300, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34812, "");
                    cm.dispose();
                    cm.warp(402000501, 0, false)
                }
            }
        }
    }
}

function end(d, c, b) {
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
            cm.npc_ChangeController(3001336, "oid=62281", -1121, 79, 19, -1171, -1071, 1, false, false);
            cm.npc_ChangeController(3001375, "oid=62282", -1003, 79, 18, -1053, -953, 0, false, false);
            cm.npc_ChangeController(3001376, "oid=62283", -717, 79, 10, -767, -667, 1, false, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.npc_ChangeController(3001300, "oid=521640", -1541, 11, 2, -1591, -1491, 0, true, false);
            cm.npc_SetSpecialAction("oid=521640", "summon", 0, 0);
            cm.updateInfoQuest(34813, "m=1");
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -1140, 63)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_AskAnswerTime(300)
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
                            cm.setAmbience("SoundEff.img/illium/extract", 80, 60);
                            cm.sendNormalTalk_Bottom("#face0#抵达目的地。", 37, 3001300, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#听说最近水晶门乱事不断？", 37, 3001306, true, true)
                            } else {
                                if (status === a++) {
                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 3001336, cm.getPlayer().getId());
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#据传闻所说，那些幽灵已经潜入我们地区了。", 37, 3001306, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 3001336, cm.getPlayer().getId());
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#什么，这是真的吗？那我们平民翼人的位置岂不是暴露了？", 37, 3001306, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 3001336, cm.getPlayer().getId());
                                                    cm.sendNormalTalk_Bottom("#face1#不会的。听说入侵者全被围剿了，水晶门的位置迁移了。嗯……上头应该会看着办吧。", 37, 3001306, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 3001336, cm.getPlayer().getId());
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#说得没错。这段期间我们一直躲躲藏藏，早就习惯了，放心吧。", 37, 3001306, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 3001336, cm.getPlayer().getId());
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#呼……不知道我们要躲到什么时候……", 37, 3001306, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 3001336, cm.getPlayer().getId());
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我反而觉得现在更自在。正如我母亲说的一样，外面太危险了……好，别闲聊了，快干活吧。", 37, 3001306, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 3001336, cm.getPlayer().getId());
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#目前这附近未发现阿加特大人的行踪。要不要去其他地方找找看？", 37, 3001300, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1##b阿加特#k大人？", 37, 3001306, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 3001336, cm.getPlayer().getId());
                                                                                            cm.playSoundEffDirectly("SoundEff.img/illium/extract");
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
                                                                                                        cm.npc_LeaveField("oid=521640");
                                                                                                        cm.npc_LeaveField("oid=521640");
                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.updateInfoQuest(34813, "m=0");
                                                                                                            cm.updateInfoQuest(34813, "m=0;d2=1");
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.setPartner(1, 3001300, 80002330, 0);
                                                                                                            cm.curNodeEventEnd(true);
                                                                                                            cm.setInGameDirectionMode(true, false, true);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.forceCompleteQuest(34812);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.updateInfoQuest(34812, "exp=1");
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#喂，小不点。你是替阿加特大人来跑腿的吗？", 37, 3001306, false, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯？哦……有事吩咐我做吗？", 37, 3001351, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你别傻愣着了，倒是来帮帮我们啊。\r\n必须赶快从水晶提取出魔力……", 36, 3001306, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.askMenu_Bottom("#face0##fUI/tutorial.img/illium/mob1/0##fUI/tutorial.img/illium/mob2/0##fUI/tutorial.img/illium/mob3/0#\r\n你能消除大约#b20个#k这种形状的水晶吗？\r\n#b#L0#嗯，没问题。#k\r\n#b#L1#这个，有点悬……#k", 132, 3001306)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.forceStartQuest(34813, "");
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##o9101116#分布在右边区域#m402000502#那边。快去找找看吧。", 37, 3001306, false, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.OnStartNavigation(402000502, 0, "", 34813);
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
};