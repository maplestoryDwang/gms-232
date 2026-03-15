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
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.fieldEffect_PlayBGM("Bgm54/FungusForestB", 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, -15)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 412, 76);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
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
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.effect_NormalSpeechBalloon("头……呃……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004718, null, cm.getPlayer().getId());
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.effect_NormalSpeechBalloon("你是什么东西？", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004718, null, cm.getPlayer().getId());
                                            cm.sendNormalTalk_Bottom("我……", 56, 0, false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_NormalSpeechBalloon("是你唤醒了我吗？", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 3004718, null, cm.getPlayer().getId());
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;16=h1;07=h0;17=h0;08=h0;26=h0;18=h2;09=h0;81=h0;36=h0;82=h1;37=h0");
                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642070/Attack2", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(700)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction25.img/YumYumE/effect/attack"], [0, 0, 0, 1, 10, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_OneTimeAction(4, 999999);
                                                                        cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;16=h1;07=h0;17=h0;08=h0;26=h0;18=h1;09=h0;81=h0;36=h0;82=h1;37=h0");
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
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
                                                                                            cm.playerMessage(5, "必须打倒从花中诞生出来的存在。");
                                                                                            cm.dispose();
                                                                                            cm.forceJoinEvent("真香岛_战斗5_击杀数")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37721.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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