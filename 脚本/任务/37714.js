var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不过这么多花，皮亚蜂却很少。", 36, 3004732, false, true, 1)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642070/Die", 100);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642070/Die", 100);
                        cm.npc_ChangeController(3004748, "oid=1861045", -530, 100, 2, -580, -480, 0, true, 1000, false);
                        cm.npc_SetSpecialAction("oid=1861045", "summon", 0, 0);
                        cm.npc_ChangeController(3004749, "oid=1861046", -326, 100, 2, -376, -276, 0, true, 1000, false);
                        cm.npc_SetSpecialAction("oid=1861046", "summon", 0, 0);
                        cm.npc_ChangeController(3004749, "oid=1861047", -77, 100, 1, -127, -27, 0, true, 1000, false);
                        cm.npc_SetSpecialAction("oid=1861047", "summon", 0, 0);
                        cm.npc_ChangeController(3004748, "oid=1861048", 295, 100, 1, 245, 345, 1, true, 1000, false);
                        cm.npc_SetSpecialAction("oid=1861048", "summon", 0, 0);
                        cm.npc_ChangeController(3004748, "oid=1861049", 451, 100, 3, 401, 501, 1, true, 1000, false);
                        cm.npc_SetSpecialAction("oid=1861049", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=0"], [0, -212, 100, 1, 0, 1, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#但还是比刚才……好吧，我错了……", 36, 3004732, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642070/Die", 100);
                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642070/Die", 100);
                                        cm.npc_ChangeController(3004749, "oid=1861057", -780, 100, 2, -830, -730, 0, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=1861057", "summon", 0, 0);
                                        cm.npc_ChangeController(3004749, "oid=1861058", -647, 100, 2, -697, -597, 0, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=1861058", "summon", 0, 0);
                                        cm.npc_ChangeController(3004748, "oid=1861059", -411, 100, 2, -461, -361, 1, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=1861059", "summon", 0, 0);
                                        cm.npc_ChangeController(3004749, "oid=1861060", 27, 100, 1, -23, 77, 0, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=1861060", "summon", 0, 0);
                                        cm.npc_ChangeController(3004748, "oid=1861061", 136, 100, 1, 86, 186, 1, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=1861061", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=0"], [0, -212, 100, 1, 0, 1, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang2", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(800)
                                            } else {
                                                if (status === a++) {
                                                    cm.effect_NormalSpeechBalloon("汪汪汪！！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004711, null, cm.getPlayer().getId());
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
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
                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.askAcceptDecline_Bottom("#face0#快点干掉那些皮亚蜂，#h0#！\r\n#r（接受时，立即移动。）#k", 37, 3004732, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.playerMessage(5, "必须将来袭的皮亚蜂消灭掉足够多的数量。");
                                                                            cm.npc_LeaveField("oid=1861045");
                                                                            cm.npc_LeaveField("oid=1861046");
                                                                            cm.npc_LeaveField("oid=1861047");
                                                                            cm.npc_LeaveField("oid=1861048");
                                                                            cm.npc_LeaveField("oid=1861049");
                                                                            cm.npc_LeaveField("oid=1861057");
                                                                            cm.npc_LeaveField("oid=1861058");
                                                                            cm.npc_LeaveField("oid=1861059");
                                                                            cm.npc_LeaveField("oid=1861060");
                                                                            cm.npc_LeaveField("oid=1861061");
                                                                            cm.dispose();
                                                                            cm.forceJoinEvent("真香岛_战斗2_击杀数")
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37714.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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