var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.npc_ChangeController(1531002, "oid=193949286", 760, -272, 59, 710, 810, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=193949286", "summon", 0, 0);
            cm.npc_ChangeController(1531003, "oid=193949287", 600, -272, 58, 550, 650, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=193949287", "summon", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 647, -272);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 700, -200)
        } else {
            if (status === b++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("尤娜，你哭了吗？", 37, a, false, true)
                    } else {
                        if (status === b++) {
                            cm.npc_SetSpecialAction("oid=193949286", "angry", -1, 1);
                            cm.sendNormalTalk_Bottom("#face0#傻瓜！我没哭。", 37, 1531002, true, true)
                        } else {
                            if (status === b++) {
                                cm.setNpcSpecialActionReset("oid=193949286");
                                cm.sendNormalTalk_Bottom("#face2#你要是愿意，我可以抱抱你，纪念这令人感动的重逢。", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face0#算了，傻瓜！", 37, 1531002, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face4#……话说回来，你这身衣服是怎么回事？搞得跟魔幻世界的魔法师似的……", 37, 1531002, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face3#说起来就话长了，怎么样，适合我吗？", 37, a, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === b++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 800, -200)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("……我早知道你会没事的。", 37, 1531001, false, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("搞什么，\r\n你怎么也得假装开心一下才是吧？", 37, a, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#你的信号一直被检测到在陷坑里面，我就觉得很奇怪，\r\n不过那个#b小孩#k是谁啊，怎么回事啊？", 37, 1531001, true, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#是，是啊，她是谁啊？", 37, 1531002, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk_Bottom("就是你所推断的那个，就是那个样子哦？\r\n还有这个孩子是黑猫内罗。", 37, a, true, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#咳咳，我的名字是#b内拉米迪奥内鲁尼亚#k，\r\n在古语里是月光下高贵的半个孩子，\r\n作为历史非常悠久的魔法师家族的继承人……", 37, 1531003, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("叫她内罗就好。", 37, a, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#啊啊啊啊！！", 37, 1531003, true, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk_Bottom(" #face1#怎么了？……！！……哎……", 37, 1531001, true, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom(" #face4#所以说这孩子就是黑猫，黑猫就是这个孩子……？", 37, 1531002, true, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk_Bottom(" #face2#没错！", 37, 1531003, true, true)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk_Bottom(" #face4#……", 37, 1531002, true, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom(" #face6#……", 37, 1531001, true, true)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.sendNormalTalk_Bottom(" #face2#哇，这些事儿什么时候才能解释完啊？\r\n还是先吃风独眼兽尾巴汤，不对，先开吃食物吧？", 37, a, true, true)
                                                                                                            } else {
                                                                                                                if (status === b++) {
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
                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                cm.eventSKill(0);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.forceCompleteQuest(22750);
                                                                                                                                cm.forceCompleteQuest(22750);
                                                                                                                                cm.gainExp(3000);
                                                                                                                                cm.npc_LeaveField("oid=193949286");
                                                                                                                                cm.npc_LeaveField("oid=193949286");
                                                                                                                                cm.npc_LeaveField("oid=193949287");
                                                                                                                                cm.npc_LeaveField("oid=193949287");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22748.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
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
            cm.sendNormalTalk_Bottom("#face1#你都收集齐了吗？给我吧。", 36, 1531003, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face1#哦！冰独眼兽的尾巴，给我吧。\r\n我给你换成亚乌的料理。\r\n\r\n#b#i2010045#  #t2010045#", 36, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.forceCompleteQuest(22748);
                    cm.gainExp(12500);
                    cm.sendNormalTalk_Bottom("#face0#现在超能力者好像成长了一些呢，\r\n不过得到#b30级#k才行。", 36, 1531003, true, false);
                    cm.gainItem(2010045, 10);
                    cm.gainItem(4000023, -10)
                } else {
                    if (status === b++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};