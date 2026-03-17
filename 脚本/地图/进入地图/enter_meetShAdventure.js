var status = -1;

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    status++;
    if (cm.isQuestActive(32354)) {
        action32354(c, b, a)
    } else {
        if (cm.isQuestActive(32355)) {
            action32355(c, b, a)
        } else {
            cm.dispose()
        }
    }
}

function action32355(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.npc_ChangeController(1520054, "oid=1951871", -400, 200, 1, -450, -350, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951871", "summon", 0, 0);
            cm.npc_ChangeController(1520055, "oid=1951872", -150, 200, 4, -200, -100, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951872", "summon", 0, 0);
            cm.npc_ChangeController(1520056, "oid=1951873", 20, 200, 6, -30, 70, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951873", "summon", 0, 0);
            cm.npc_ChangeController(1520057, "oid=1951874", 50, 200, 6, 0, 100, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951874", "summon", 0, 0);
            cm.npc_ChangeController(1520053, "oid=1951875", 300, 200, 10, 250, 350, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951875", "summon", 0, 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false);
            cm.inGameDirectionEvent_AskAnswerTime(60)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是真的。攻击根本不奏效！", 17, 1520054, false, true)
                } else {
                    if (status === a++) {
                        cm.npc_SetSpecialAction("oid=1951875", "attack0", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(600)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/6", "oid=1951871"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(900)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetSpecialAction("oid=1951875", "attack1", 0, 1);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/1"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(120)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("advStory/Buff1", 100);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/1"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/2"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(2400)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……得救了。", 17, 1520054, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#h0#，虽然我能做的只有这些……可你不能倒下啊。加油！", 1, 1520054, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayFieldSound("advStory/Buff3", 100);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/5"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("没错，#h0#，你一定可以做到！我把我的力量给你！", 1, 1520056, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayFieldSound("advStory/Buff6", 100);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/8"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("…………", 1, 1520057, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("…………", 1, 1520055, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("不，不行。这么丢脸的事情。你们做吧。我不做。", 1, 1520057, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("……我也想这么说。可这样无谓地拖延时间也不是办法，不是吗？", 1, 1520055, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("机会仅此一次。就在这里一次性解决吧。", 1, 1520055, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_PlayFieldSound("advStory/Buff5", 100);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/7"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3600)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("呼，你得到我的增益也没有用，对你没有任何帮助……。", 1, 1520057, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("advStory/Buff4", 100);
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/6"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3600)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("大家都把力量给了我。不过……这是什么？我感觉到了一股不同的力量。", 17, 1520057, false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/mapleleaf/0"], [4200, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3600)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_PlayBGM("Bgm34.img/GoFight!ShowYourEnergy!", 0, 0);
                                                                                                                    cm.fieldEffect_ScreenMsg("adventureStory/brandNew");
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5400)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/mapleleaf/1"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1800)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_PlayFieldSound("advStory/stoneOfMaple", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk("枫叶，变成了宝石？", 17, 1520057, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("advStory/soulOfMaple", 100);
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/2", "oid=0"], [0, -200, 200, 1, 0, 1, 1, 0, 0]);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3300)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.npc_ChangeController(1520058, "oid=1952411", -200, 200, 2, -250, -150, 1, false, 0, false);
                                                                                                                                                cm.npc_SetSpecialAction("oid=1952411", "summon", 0, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3600)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk("女神？", 17, 1520057, false, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.npc_SetSpecialAction("oid=1952411", "buff", 0, 1);
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("advStory/herosOfMaple", 100);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/10"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk("我总觉得这次一定能够胜利。我要再次和黑魔法师的影子战斗。", 17, 1520057, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                    cm.forceCompleteQuest(32355);
                                                                                                                                                                    cm.forceCompleteQuest(32356);
                                                                                                                                                                    cm.gainExp(450000);
                                                                                                                                                                    cm.npc_LeaveField("oid=1951871");
                                                                                                                                                                    cm.npc_LeaveField("oid=1951872");
                                                                                                                                                                    cm.npc_LeaveField("oid=1951873");
                                                                                                                                                                    cm.npc_LeaveField("oid=1951874");
                                                                                                                                                                    cm.npc_LeaveField("oid=1951875");
                                                                                                                                                                    cm.npc_LeaveField("oid=1952411");
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                    cm.warp(1130011, 0, false)
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

function action32354(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.npc_ChangeController(1520054, "oid=1951543", -400, 200, 1, -450, -350, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951543", "summon", 0, 0);
            cm.npc_ChangeController(1520055, "oid=1951544", -150, 200, 4, -200, -100, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951544", "summon", 0, 0);
            cm.npc_ChangeController(1520056, "oid=1951545", 20, 200, 6, -30, 70, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951545", "summon", 0, 0);
            cm.npc_ChangeController(1520057, "oid=1951546", 50, 200, 6, 0, 100, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951546", "summon", 0, 0);
            cm.npc_ChangeController(1520053, "oid=1951547", 300, 200, 10, 250, 350, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1951547", "summon", 0, 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false);
            cm.inGameDirectionEvent_PushMoveInfo(0, 300, 300, 191)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_AskAnswerTime(1975)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(900)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#h0#! 修嘉! 你们来啦！", 1, 1520056, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("傻瓜，你们来这里干什么？", 1, 1520057, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你才是傻瓜。感谢我们到来的话都不会讲吗？", 1, 1520055, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("说别人是傻瓜的你才是傻瓜。就算再有两个人来帮忙也没用。攻击根本不起作用！", 1, 1520057, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("那个，那个不是……黑魔法师吧？", 1, 1520054, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("那个好像是……黑魔法师的一部分的一部分的一部分的一部分吧。", 1, 1520055, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("切，可即便如此，攻击还是完全不起作用……。", 1, 1520056, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("攻击不起作用？", 17, 1520056, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#h0#！小心！", 1, 1520054, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceCompleteQuest(32354);
                                                                    cm.forceStartQuest(32355, "");
                                                                    cm.gainExp(350000);
                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.npc_LeaveField("oid=1951543");
                                                                    cm.npc_LeaveField("oid=1951544");
                                                                    cm.npc_LeaveField("oid=1951545");
                                                                    cm.npc_LeaveField("oid=1951546");
                                                                    cm.npc_LeaveField("oid=1951547");
                                                                    cm.dispose();
                                                                    cm.warp(1130010, 0, false);
                                                                    cm.scheduleWarpTask(1 * 1 * 25, cm.getMap(1130000))
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