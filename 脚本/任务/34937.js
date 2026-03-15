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
            cm.sendNormalTalk_Bottom("#face5#（想起来了。在避难处边界上看到的那个东西……用于提取某种力量的装置……）", 36, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#（不久前开始不断与幽灵军队遭遇……他们想要的东西还在这里。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face8#（……避难处的人有危险。必须马上离开这里。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#等一下……电波中好像捕捉到了什么东西，叽勒。不知道为什么，我有种不祥的预感，叽勒。", 36, 3001510, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#哎呀，怪物……正在涌来。目的地是……避难处，叽勒……", 36, 3001510, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#从电波来看，数量应该相当惊人。在这种情况下遭到袭击的话……动力源什么的就都完了……", 36, 3001510, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#那，那样的话，一切就都成了泡影……", 36, 3001512, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#呃，只要在怪物之前回到避难处，不就行了？", 36, 3001509, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#把动力源插到水晶上↗ 我们商队就能飞上天↗", 36, 3001509, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#没，没错，我们快点离开这里！", 36, 3001513, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face5#……那是不可能的。要想启动水晶，需要一定的准备时间。这样一来，可行的办法……我要好好想想。", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askAcceptDecline_Bottom("#face0#叽，叽勒……那我在这里等着。准备好之后，你再跟我说话。", 36, 3001510)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#（在脑海中勾勒出大致的作战计划。把构想好的计划告诉大家吧。）", 36, 3001500 + cm.getPlayer().getGender(), 0, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(34937, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34937.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#计划的核心是分成两组行动。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("d0", "Effect/Direction17.img/effect/ark/illust/8/0", 0, 300, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                        cm.fieldEffect_ProcessOnOffLayer("d1", "Effect/Direction17.img/effect/ark/illust/8/1", 0, 300, 190, -150, -1, 4, 1, -1, 0, 0, 0);
                        cm.sendNormalTalk_Bottom("#face5#巴克巴克、蹦蹦、当当和我在这里组织防线……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("d1", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.fieldEffect_ProcessOnOffLayer("d2", "Effect/Direction17.img/effect/ark/illust/8/2", 0, 300, 190, -150, -1, 4, 1, -1, 0, 0, 0);
                            cm.fieldEffect_ProcessOnOffLayer("d3", "Effect/Direction17.img/effect/ark/illust/8/3", 0, 300, 170, -130, -1, 4, 1, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(300)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("d3", "", 1, 2000, -210, 150, 0, 0, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#维依带着动力源回到避难处，启动水晶。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("d0", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("d2", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("d3", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.sendNormalTalk_Bottom("#face4#……然后回到这里，带着你们离开这里……原来如此，叽勒。", 37, 3001510, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#叽，叽勒，好像行得通。这里和避难处之间的沙暴应该不是很厉害。", 37, 3001510, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face5#问题是水晶的准备时间……希望能坚持到那个时候。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face4#哦，哦！炸弹大师巴克巴克！把怪物们炸上天！", 37, 3001509, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3#哦，哦！商队的杀手锏巴克巴克！不用担心！", 37, 3001509, 1, 1)
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
                                                                    cm.sendNormalTalk_Bottom("#face0#好吧，那我带着动力源回避难处去了，叽勒。", 37, 3001510, 0, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#对了，启动成功之后，我会发出电波信号。一定要注意确认电波装置，叽勒。", 37, 3001510, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#哎呀，那就拜托了，朋友们！", 37, 3001510, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h1;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                                                                                cm.forceCompleteQuest(34937);
                                                                                cm.gainExp(7360);
                                                                                cm.updateInfoQuest(34937, "exp=1");
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
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                            cm.eventSKill(0);
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
};