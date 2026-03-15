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
            if (cm.getMapId() != 331001000) {
                cm.warp(331001000, 0, false);
                cm.dispose();
                return
            }
            cm.sendNormalTalk_Bottom("现在你拥有了可以掌控这个世界的强大力量。", 36, 1531012, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo_Bottom("若是现在，进入陷坑内部应该就不会有危险了。)#k", 36, 1531012)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("见证英雄的诞生是一件令人开心的事情，\r\n你的成长要比任何人都更迅速。", 36, 1531012, false, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("但是还有一个最后的阶段，那便是……", 36, 1531012, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("你不说我也知道，\r\n得救出尤娜啊。", 36, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face1#…………凯内西斯，小心点，\r\n一定要将尤娜安然无恙地带出来。", 36, 1531001, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face1#加油，我会跟上的！", 36, 1531003, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face2#好吧，那就走吧？\r\n#b(进入城市右侧的陷坑。)#k", 36, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.forceStartQuest(22860, "");
                                            cm.addPopupSay(0, 3000, "出门往东看看吧！");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22860.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.npc_ChangeController(1531002, "oid=5568590", 830, -272, 59, 780, 880, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=5568590", "summon", 0, 0);
            cm.npc_ChangeController(1531003, "oid=5568591", 600, -272, 58, 550, 650, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=5568591", "summon", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 647, -272);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 800, -200)
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
                        cm.sendNormalTalk_Bottom("辛苦了，\r\n现在你已俨然具备了英雄的架势。", 37, 1531012, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("虽说市民们能活着回来真的是一件好事，但可惜的是，两个世界的合并是难以再逆转的了。\r\n虽然眼下暂时能够抑制，但日后还是会加速的。", 37, 1531012, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("我所生活的地方被冒险岛世界吸收并消失不见了？\r\n难道就没有什么方法可以阻止了吗，爷爷？", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("现在还不得而知，\r\n可以肯定的是，这种事件并不是第一次。", 37, 1531012, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("这所有的事情也许真的，是历经数百年计划而成的……\r\n而在事件中央的就是黑魔法师。", 37, 1531012, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("……哦……我到底发生什么事情了，老师？", 37, 1531002, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("你好像具备了可以唤起风的能力。", 37, 1531012, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("#face4#额……我以后要一直这么活下去吗？", 37, 1531002, false, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.effect_Voice("Ambience.img/wind", 100);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=5568590"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=5568591"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#尤娜一激动，就突然吹起风来了呢！", 37, 1531003, false, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("这也是没办法的，\r\n不断会有人出现，称呼你们是超能力者的。", 37, 1531012, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk_Bottom("人们会害怕、排斥拥有陌生能力的人。", 37, 1531012, true, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("啊，没错，这个问题我有考虑过，\r\n那我们也组成一个超能力者的战队就好了嘛。", 37, a, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#！！超能力者……战队吗？", 37, 1531003, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("没错，就像冒险岛世界有魔法师协会一样，\r\n帮助超能力者控制自己的力量，将力量用在正确的地方。", 37, a, true, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk_Bottom("我要让大家看看，那个叫白魔法师的家伙错了，\r\n大家会为我们欢呼的。", 37, a, true, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom("新建的战队就由我来领导，\r\n怎么样，有什么不满吗？", 37, a, true, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#真帅！", 37, 1531003, true, true)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#额……然后麻烦的事情又打算全交给我来做吧？", 37, 1531002, true, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face7#……明摆着一条要受苦的路。\r\n我要四大保险的保障。", 37, 1531001, true, true)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.sendNormalTalk_Bottom("呵呵呵，只要有你在，我就不用担心了。\r\n日后作为穿越在两个世界的英雄，也请你能够大展身手。", 37, 1531012, true, true)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.npc_LeaveField("oid=5568590");
                                                                                                                    cm.npc_LeaveField("oid=5568590");
                                                                                                                    cm.npc_LeaveField("oid=5568591");
                                                                                                                    cm.npc_LeaveField("oid=5568591");
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 500, 647, -259)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                    cm.eventSKill(0);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.forceCompleteQuest(22860);
                                                                                                                                    cm.finishAchievement(256);
                                                                                                                                    cm.gainExp(430920);
                                                                                                                                    cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=0;kinePro=0;kinetuto=1;kinetuto2=1;E1=1;E2=1;blackCat=0;E3=1");
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
};