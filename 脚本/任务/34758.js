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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 353, -131)
                    } else {
                        if (status === a++) {
                            cm.npc_ChangeController(3002126, "oid=37868416", 113, 8, 40, 63, 163, 1, false, false);
                            cm.npc_SetSpecialAction("oid=37868416", "summon", 0, 0);
                            cm.npcMove(3002126, 0, -100, 0);
                            cm.sendNormalTalk_Bottom("#face0#这里应该安全了！", 37, 3002110, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#呼，差点就出事了。", 37, 3002111, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face15#迅速、准确的判断力是尖耳守备队长的必备条件！哈哈！", 37, 3002110, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#啊！看那边！", 37, 3002113, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 85, -277)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npcMove(3002126, 0, -50, 2000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face9#！！！？", 37, 3002110, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npcMove(3002126, 0, -60, 2000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#完了。水位越来越高了！", 37, 3002113, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1# 呜呜！妈妈，好怕！", 37, 3002116, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(34758, "");
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
                                                                                            cm.npc_LeaveField("oid=37868416");
                                                                                            cm.npc_LeaveField("oid=37868416");
                                                                                            cm.Hidden_background("water", 1, 1, 0, 0);
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 390, -131)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#为什么……全都失败了吗……？", 37, 3002110, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face14#身为队长，我不能坐以待毙！必须想办法……把乌云驱散……", 37, 3002110, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.onNewSpecialEffect(3, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_复合图片动画(["Map/Effect3.img/foxvalley/spine/fox_short/fox", "animation", "", "04"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/foxgod_short", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(6000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face12#也许……也许不是梦！", 37, 3002110, false, true)
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
                                                                cm.sendNormalTalk_Bottom("#face11#对了！我必须直接去见见狐神！", 37, 3002110, false, true)
                                                            } else {
                                                                if (status === a++) {
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
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 390, -131)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h0;24=h0;25=h0;19=B;29=h0");
                                                                                    cm.npc_ChangeController(3002110, "oid=37878372", 380, -154, 17, 330, 430, 1, true, false);
                                                                                    cm.npc_SetSpecialAction("oid=37878372", "summon", 0, 0);
                                                                                    cm.npc_SetSpecialAction("oid=37878372", "rope", -1, 1);
                                                                                    cm.npcMove(3002110, 0, -50, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npcMove(3002110, 0, -50, 2000);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                    } else {
                                                                                        if (status === a++) {
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
                                                                                                            cm.npc_SetSpecialAction("oid=37878372", "rope_Stop", -1, 1);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#啊！玛鲁，你又来了！我告诉你多少次，别爬到神圣的狐狸树上去！", 37, 3002111, false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#你又在搞什么？玛鲁，别再搞恶作剧了！", 37, 3002112, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face11#我……", 37, 3002110, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face11#尖耳守备队长玛鲁……可以解决这件事！", 37, 3002110, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face11#大家等一会儿！", 37, 3002110, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.npc_SetSpecialAction("oid=37878372", "rope", -1, 1);
                                                                                                                                cm.npcMove(3002110, 0, -100, 2000);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.gainExp(16918334);
                                                                                                                                    cm.forceCompleteQuest(34758);
                                                                                                                                    cm.updateInfoQuest(34758, "exp=1");
                                                                                                                                    cm.updateInfoQuest(34770, "20=h2;21=h0;22=h0;23=h0;24=h0;25=h0;19=B;29=h0");
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
                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                cm.dispose();
                                                                                                                                                cm.warp(410000100, 0);
                                                                                                                                                cm.setInGameDirectionMode(false, true, false)
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
};