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
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 207, 0)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 562, 82);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.npc_ChangeController(3004751, "oid=1862253", 90, 54, 2, 40, 140, 0, false, 0, false);
                    cm.npc_SetSpecialAction("oid=1862253", "summon", 0, 0);
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
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这朵花……", 57, 0, false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("比之前见到的花大得多。", 57, 0, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("周围的艾尔达好像都被它吸收掉了……", 57, 0, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip10(1, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainSkillBuff(80000268);
                                                    cm.sendNormalTalk_Bottom("竟然有这种又大又可怕的花……", 57, 0, false, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/sound", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("怎……怎么回事……？这个声音……？", 57, 0, false, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.Hidden_background("flower1", 1, 1, 1, 0);
                                                                            cm.Hidden_background("flower0", 1, 0, 0, 0);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/flower", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_SetSpecialAction("oid=1862253", "appear", 2760, 1);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642070/Regen", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.Hidden_background("flower2", 1, 1, 1, 0);
                                                                                        cm.Hidden_background("flower1", 1, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2800)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_SetSpecialAction("oid=1862253", "stand1", -1, 1);
                                                                                            cm.fieldEffect_PlayBGM("Bgm54/FungusForestB", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("诺巴……？神木村的龙……？不……那是……", 57, 0, false, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("玛瑙龙之王……", 57, 0, false, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 86, -53)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                            cm.effect_Text(["#fn黑体##fs30##fc0xFFFF0000#阿弗利埃……", ""], [100, 3000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0])
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;16=h1;07=h0;17=h0;08=h0;26=h0;09=h0;81=h0;36=h0;82=h1;37=h0");
                                                                                                                                cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;16=h1;07=h0;17=h0;08=h0;26=h0;18=h1;09=h0;81=h0;36=h0;82=h1;37=h0");
                                                                                                                                cm.npc_LeaveField("oid=1862253");
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
                                                                                                                                                cm.forceStartQuest(37720, "");
                                                                                                                                                cm.forceCompleteQuest(37720);
                                                                                                                                                cm.gainExp(11264558);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37720.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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