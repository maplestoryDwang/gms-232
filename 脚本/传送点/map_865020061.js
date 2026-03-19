function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.playerMessage(5, "这个传送点 [" + b + " : " + a + "] 的脚本尚未修复。脚本位于： 脚本/传送点/map_865020061.js ")
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.npc_ChangeController(9390208, "oid=109559", 952, 350, 62, 952, 1002, 1, false, 0, false);
            cm.npc_ChangeController(9390232, "oid=109560", 1106, 350, 62, 1056, 1156, 1, false, 0, false);
            cm.npc_ChangeController(9390232, "oid=109561", 450, 350, 61, 430, 500, 0, false, 0, false);
            cm.npc_ChangeController(9390233, "oid=109562", 1217, 350, 62, 1167, 1267, 1, false, 0, false);
            cm.npc_ChangeController(9390233, "oid=109563", 351, 350, 60, 301, 390, 0, false, 0, false);
            cm.npc_ChangeController(9390234, "oid=109564", 739, 350, 61, 689, 789, 0, false, 0, false);
            cm.npc_ChangeController(9390233, "oid=109565", 994, -7, 43, 944, 1044, 1, false, 0, false);
            cm.npc_ChangeController(9390233, "oid=109566", 469, -7, 30, 419, 519, 0, false, 0, false);
            cm.npc_ChangeController(9390232, "oid=109567", 1117, -7, 44, 1067, 1167, 1, false, 0, false);
            cm.npc_ChangeController(9390232, "oid=109568", 313, -7, 28, 263, 363, 0, false, 0, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk("切，真是源源不断地冒出来啊。", 17, 0, false, true);
            cm.curNodeEventEnd(true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#h0 #对不起。都怪我，我们才会陷入现在的困境。我应该听你的，我太自满了。", 5, 9390234, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你在说什么啊，现在这种状况放弃还太早。", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(怎么办。话虽然这么说，但再这样下去就不好了。)", 5, 9390234, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1700)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("喂，你们是乖乖投降呢，还是选择死在这里呢。", 5, 9390208, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("咳，那个", 17, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1700)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 240, 0, 0, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 140, 0, 0, 0, 0, 0, 0]);
                                                cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 40, 0, 0, 0, 0, 0, 0]);
                                                    cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -40, 0, 0, 0, 0, 0, 0]);
                                                        cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -140, 0, 0, 0, 0, 0, 0]);
                                                            cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -240, 0, 0, 0, 0, 0, 0]);
                                                                cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("嗯？这是怎么回事？", 17, 0, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 240, 0, 0, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -140, 0, 0, 0, 0, 0, 0]);
                                                                            cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(800)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 40, 0, 0, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -40, 0, 0, 0, 0, 0, 0]);
                                                                                cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(800)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 140, 0, 0, 0, 0, 0, 0]);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -240, 0, 0, 0, 0, 0, 0]);
                                                                                    cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(800)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 40, 0, 0, 0, 0, 0, 0]);
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -40, 0, 0, 0, 0, 0, 0]);
                                                                                        cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(800)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 340, 0, 0, 0, 0, 0, 0]);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -240, 0, 0, 0, 0, 0, 0]);
                                                                                            cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 340, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 240, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 140, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, 40, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -40, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -140, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -240, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionBT.img/effect/Comerz/Boom1"], [0, -340, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
                                                                                                cm.sendNormalTalk("是陆地上的家伙的支援军吗？我们看不见敌人会吃亏的。全体撤退！", 5, 9390208, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("什么呢。是统帅派来的援兵吗？", 17, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("这是怎么回事。不可能再有援军赶来啊。", 5, 9390202, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceStartQuest(17631, "");
                                                                                                            cm.npc_ChangeController(9390247, "oid=2362929", 985, 348, 62, 935, 1035, 1, false, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=2362929", "summon", 0, 0);
                                                                                                            cm.sendNormalTalk("啊，你是…！！", 17, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("哈哈哈。我们又见面了。", 5, 9390247, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("这是怎么回事。你为什么要救我们？", 17, 0, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk("这个么。救人还需要理由吗？", 5, 9390247, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk("虽然不是那样的……", 17, 0, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk("喂，是 #h0#认识的人吗？", 5, 9390202, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk("啊…… 这个么。只是见过的话，算是认识的人吗？", 17, 0, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk("感谢你帮助我们。我是达尼尔拉商团的莱文·达尼尔拉。", 5, 9390202, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk("我以为是谁呢，原来是达尼尔拉商团统帅的儿子啊。", 5, 9390247, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk("非常感谢你的帮助。现在事情终于结束了吧。", 5, 9390202, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk("等下，打招呼就算了，谢礼是要给的吧。你不是有很多钱嘛。", 5, 9390247, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk("…………嗯？", 5, 9390202, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk("你不是说感谢我。应该给我谢礼啊。有钱人反而更小气。", 5, 9390247, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk("不，不是的。你不说，我也打算给你的。我当然应该给你，哈哈。", 5, 9390202, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk("快拿出来吧。好了，那我就告辞了。再见。哈哈哈。", 5, 9390247, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.npc_LeaveField("oid=2362929");
                                                                                                                                                                        cm.sendNormalTalk("真是个会精打细算的女人。", 17, 0, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk("嗯。但那也是一种魅力。真想再见到她。", 5, 9390202, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk("(…… 你的口味还真独特。)", 17, 0, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.forceCompleteQuest(17631);
                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                    cm.setStandAloneMode(false);
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};