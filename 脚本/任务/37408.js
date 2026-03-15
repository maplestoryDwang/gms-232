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
            cm.npc_ChangeController(3004431, "oid=532656", -253, 150, 5, -303, -203, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=532656", "summon", 0, 0);
            cm.sendNormalTalk_Bottom("#face0#我们必须要背负着这样的矛盾作战吗？", 37, 3004431, false, true);
            cm.effect_Voice("Voice5.img/CH2/Idea/29", 128)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#还是有办法的。", 37, 3004433, true, true);
                cm.effect_Voice("Voice5.img/CH2/Carlyle/31", 128)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#去王宫吧。尚有些东西要请两位过目。", 37, 3004433, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Carlyle/32", 128)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                        cm.setStandAloneMode(true);
                        cm.inGameDirectionEvent_SetHideEffect(1);
                        cm.inGameDirectionEvent_AskAnswerTime(700)
                    } else {
                        if (status === a++) {
                            cm.npc_LeaveField("oid=532656");
                            cm.npc_LeaveField("oid=532656");
                            cm.forceStartQuest(37408, "");
                            cm.updateInfoQuest(37400, "01=h0;02=h0;11=h1;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
                            cm.updateInfoQuest(37400, "01=h0;02=h0;11=h1;12=h0;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
                            cm.updateInfoQuest(37400, "01=h0;02=h0;11=h1;12=h0;13=h0;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -326, 153)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.npc_ChangeController(3004446, "oid=532745", -326, 150, 4, -376, -276, 1, true, 1000, false);
                                        cm.npc_SetSpecialAction("oid=532745", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3004446, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.OnStartNavigation(993140041, 0, "", 37408);
                                                        cm.eventSKill(0);
                                                        cm.warp(993140000, 1, false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setStandAloneMode(false);
                                                        cm.npc_LeaveField("oid=532745");
                                                        cm.npc_LeaveField("oid=532745");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37408.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 22, -103)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 120, -83);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#传说这把#b圣剑阿索尔#k带有太阳神密特拉的力量。\r\n擎剑指向天空时，神圣之光便会降临，惩戒这世间所有的罪恶。", 37, 3004433, false, true);
                            cm.effect_Voice("Voice5.img/CH2/Carlyle/36", 128)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这剑虽然光华夺目……但是感觉不到蕴含了什么特别的力量。", 37, 3004431, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Idea/31", 128)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0# #r古代神#k的时代结束后，这把剑也像其他圣遗物一样，失去了应有的光芒。", 37, 3004433, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/37", 128)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#然而，事过境迁的当下。", 37, 3004433, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/38", 128)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#因为多名超越者辞世，就连分隔冒险岛世界和格兰蒂斯之间次元封印也随之消失殆尽。", 37, 3004433, true, true);
                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/39", 128)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#现在正是圣剑重现光辉的时候。", 37, 3004433, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/40", 128)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#帮助长久以来一直沉睡着的太阳神之剑重现光辉…… ", 37, 3004431, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Idea/32", 128)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#如果能够成功，那么对于盼望古代神再临此世的人而言，无疑是一件振奋人心的事。", 37, 3004431, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Idea/32-1", 128)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#对。这把圣剑会令塞尔提乌团结一致。", 37, 3004433, true, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/41", 128)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#但是，该怎么做呢？", 37, 3004431, true, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Idea/33", 128)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#教典里这样说过。\r\n“从#b高洁之人#k的手中，重新找回天国的荣耀吧。”", 37, 3004433, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/42", 128)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#听说，即使在古代，圣剑也不是随便什么人都能操控的。", 37, 3004433, false, true);
                                                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/43", 128)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#据说惟有#b天选之人#k现世时，这把剑才会展现原本的面貌。", 37, 3004433, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/44", 128)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#天选之人…… ", 37, 3004431, true, true);
                                                                                    cm.effect_Voice("Voice5.img/CH2/Idea/34", 128)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("（好像感觉到了两人意味深长的目光。）", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#击败了堕落超越者的人，应该入得了圣剑法眼吧？", 37, 3004431, true, true);
                                                                                            cm.effect_Voice("Voice5.img/CH2/Idea/35", 128)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#百利而无一害，还请您放胆一试。", 37, 3004433, true, true);
                                                                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/45", 128)
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
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.setStandAloneMode(false);
                                                                                                                cm.forceCompleteQuest(37408);
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
};