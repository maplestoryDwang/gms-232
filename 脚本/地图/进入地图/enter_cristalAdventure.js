var status = -1;

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    status++;
    // if (!cm.isQuestActive(32293)) {
    //     action1(c, b, a)
    // } else {
    //     if (cm.isQuestActive(32293)) {
    //         action2(c, b, a)
    //     } else {
    //         cm.dispose();
    //         cm.playerMessage(-1, "这里没事了")
    //     }
    // }

    if (!cm.isQuestFinished(32370)) {
        action1(c, b, a)
    } else {
        if (cm.isQuestActive(32293)) {
            action2(c, b, a)
        } else {
            cm.dispose();
            cm.playerMessage(-1, "这里没事了")
        }
    }
}

function action1(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.npc_ChangeController(1520067, "oid=1673673", 340, 60, 8, 290, 390, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1673673", "summon", 0, 0);
            cm.npc_ChangeController(1520065, "oid=1673674", 240, 60, 9, 190, 290, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1673674", "summon", 0, 0);
            cm.npc_ChangeController(1520068, "oid=1673675", 140, 30, 11, 90, 190, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1673675", "summon", 0, 0);
            cm.npc_ChangeController(1520066, "oid=1673676", 40, 0, 2, -10, 90, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1673676", "summon", 0, 0);
            cm.npc_ChangeController(1520069, "oid=1673677", 1290, 120, 23, 1240, 1340, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1673677", "summon", 0, 0);
            cm.npc_SetForceMove("oid=1673673", 1, 600, 100);
            cm.npc_SetForceMove("oid=1673674", 1, 600, 100);
            cm.npc_SetForceMove("oid=1673675", 1, 600, 100);
            cm.npc_SetForceMove("oid=1673676", 1, 600, 100);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(30)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_PushMoveInfo(0, 300, 1000, 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1587)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.sendNormalTalk("这是什么？", 17, 1520067, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哪来的石头挡住了走廊？", 1, 1520067, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("看来他是想不让我们跟来，而故意这样做的。", 1, 1520066, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……好像从里面听到了什么声音。", 1, 1520068, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("什么声音？", 17, 1520068, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("里面好像有人。而且，既然有对话声音，那么至少有两个人……。", 1, 1520068, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("你说什么？我怎么一点都没听见？", 1, 1520067, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("……没办法了。闪开。", 1, 1520068, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_SetForceMove("oid=1673675", 1, 200, 100);
                                                            cm.npc_SetForceMove("oid=1673673", -1, 30, 100);
                                                            cm.npc_SetForceMove("oid=1673673", 1, 3, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3900)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(32370, "");
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1", "oid=1673673"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(900)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("哇！哇！你那是什么东西？！", 1, 1520067, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("哎，吵死了，给我安静点……听到了。", 1, 1520068, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_LeaveField("oid=1673673");
                                                                            cm.npc_LeaveField("oid=1673674");
                                                                            cm.npc_LeaveField("oid=1673675");
                                                                            cm.npc_LeaveField("oid=1673676");
                                                                            cm.npc_LeaveField("oid=1673677");
                                                                            cm.dispose();
                                                                            cm.warp(910540610, 2, false)
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

function action2(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.npc_ChangeController(1520067, "oid=1674044", 740, 120, 15, 690, 790, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1674044", "summon", 0, 0);
            cm.npc_ChangeController(1520065, "oid=1674045", 840, 120, 17, 790, 890, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1674045", "summon", 0, 0);
            cm.npc_ChangeController(1520068, "oid=1674046", 940, 120, 22, 890, 990, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1674046", "summon", 0, 0);
            cm.npc_ChangeController(1520066, "oid=1674047", 640, 120, 13, 590, 690, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1674047", "summon", 0, 0);
            cm.npc_ChangeController(1520069, "oid=1674048", 1290, 120, 23, 1240, 1340, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1674048", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.sendNormalTalk("…….", 1, 1520068, false, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32370);
                    cm.inGameDirectionEvent_AskAnswerTime(1800)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("很好，两人当中的一人消失了。而且留下来的那个人好像正拿着封印石。", 1, 1520068, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那，趁现在突击吧！可这石块怎么办？", 1, 1520066, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("…….", 1, 1520065, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……稍微让一下。", 1, 1520065, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetForceMove("oid=1674045", 1, 220, 100);
                                        cm.npc_SetForceMove("oid=1674046", -1, 100, 100);
                                        cm.inGameDirectionEvent_MoveAction(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("啊！", 1, 1520065, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(900)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_SetSpecialAction("oid=1674045", "attack", 0, 1);
                                                        cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                        cm.npc_SetSpecialAction("oid=1674048", "break", 0, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_LeaveField("oid=1674048");
                                                            cm.sendNormalTalk("嗬", 17, 1520065, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("呵呵……快，快进去吧。", 1, 1520065, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_SetForceMove("oid=1674045", 1, 1000, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(120)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_MoveAction(2);
                                                                        cm.npc_SetForceMove("oid=1674047", 1, 1000, 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(120)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_SetForceMove("oid=1674046", 1, 100, 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("喂，刚才你戴在头上的是啥玩意儿啊？啥玩意？哪儿来的？戴上那个就能听得很清楚吗？是不是啊？", 1, 1520067, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("……给我让开。", 1, 1520068, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_SetForceMove("oid=1674046", 1, 1000, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("喂~别这样嘛，告诉我在哪儿买的吧~", 1, 1520067, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.npc_SetForceMove("oid=1674044", 1, 1000, 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.gainExp(90000);
                                                                                                    cm.forceCompleteQuest(32293);
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.npc_LeaveField("oid=1674044");
                                                                                                    cm.npc_LeaveField("oid=1674045");
                                                                                                    cm.npc_LeaveField("oid=1674046");
                                                                                                    cm.npc_LeaveField("oid=1674047");
                                                                                                    cm.dispose();
                                                                                                    cm.warp(910540620, 1, false)
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