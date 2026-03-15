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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(3004752, "oid=1860134", -781, 100, 2, -831, -731, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860134", "summon", 0, 0);
                cm.npc_ChangeController(3004753, "oid=1860135", -656, 100, 2, -706, -606, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860135", "summon", 0, 0);
                cm.npc_ChangeController(3004752, "oid=1860136", -548, 100, 2, -598, -498, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860136", "summon", 0, 0);
                cm.npc_ChangeController(3004753, "oid=1860137", -425, 100, 2, -475, -375, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860137", "summon", 0, 0);
                cm.npc_ChangeController(3004753, "oid=1860138", -308, 100, 2, -358, -258, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860138", "summon", 0, 0);
                cm.npc_ChangeController(3004752, "oid=1860139", 300, 100, 1, 250, 350, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860139", "summon", 0, 0);
                cm.npc_ChangeController(3004753, "oid=1860140", 403, 100, 3, 353, 453, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860140", "summon", 0, 0);
                cm.npc_ChangeController(3004752, "oid=1860141", 523, 100, 3, 473, 573, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860141", "summon", 0, 0);
                cm.npc_ChangeController(3004753, "oid=1860142", 631, 100, 3, 581, 681, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=1860142", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(37700, "00=h1;01=h1;02=h1;26=h0;36=h0;37=h1");
                    cm.updateInfoQuest(37700, "00=h1;01=h1;02=h1;26=h0;36=h0;37=h0");
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#呃呃……", 37, 3004752, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##h0#，你还挺厉害嘛？", 37, 3004732, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#别做白日梦了……", 37, 3004752, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#白日梦？倒是你们，现在差不多该放弃了吧？", 37, 3004732, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#闭嘴。别执着于奇怪的东西，听从本能的召唤吧。", 37, 3004752, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#哎呀，哎呀……我的老朋友蒙奇怪和蘑菇狂……", 37, 3004732, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#在我借新朋友#h0#之力再次教训你们之前，还是别给彼此添麻烦，就这样散了吧。", 37, 3004732, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#切，等着瞧！", 37, 3004752, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.gainExp(11264558);
                                                            cm.Npc_Fadeout("oid=1860134", 0, 500);
                                                            cm.Npc_Fadeout("oid=1860135", 0, 500);
                                                            cm.Npc_Fadeout("oid=1860136", 0, 500);
                                                            cm.Npc_Fadeout("oid=1860137", 0, 500);
                                                            cm.Npc_Fadeout("oid=1860138", 0, 500);
                                                            cm.Npc_Fadeout("oid=1860139", 0, 500);
                                                            cm.Npc_Fadeout("oid=1860140", 0, 500);
                                                            cm.Npc_Fadeout("oid=1860141", 0, 500);
                                                            cm.Npc_Fadeout("oid=1860142", 0, 500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_LeaveField("oid=1860134");
                                                                cm.npc_LeaveField("oid=1860135");
                                                                cm.npc_LeaveField("oid=1860136");
                                                                cm.npc_LeaveField("oid=1860137");
                                                                cm.npc_LeaveField("oid=1860138");
                                                                cm.npc_LeaveField("oid=1860139");
                                                                cm.npc_LeaveField("oid=1860140");
                                                                cm.npc_LeaveField("oid=1860141");
                                                                cm.npc_LeaveField("oid=1860142");
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=0"], [0, 97, 100, 1, 0, 1, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
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
                                                                                        cm.updateInfoQuest(37700, "00=h1;01=h0;02=h1;26=h0;36=h0;37=h0");
                                                                                        cm.forceStartQuest(37705, "");
                                                                                        cm.forceCompleteQuest(37705);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37705.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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