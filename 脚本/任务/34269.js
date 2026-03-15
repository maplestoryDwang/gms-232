var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("终于……结束了吗。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face6#原来你……不是江啊。", 37, 3003400, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face13#嗯？这不过是沼泽制造出的记忆而已。", 37, 3003406, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face13#抱歉……", 37, 3003406, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face6#……", 37, 3003400, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("现在怎么样了？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face13#进攻稍后就开始了。", 37, 3003406, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#r#fs18#黑魔法师！", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face13#察觉到塔纳存在的黑魔法师一定是想封印克里蒂亚斯。", 37, 3003406, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face13#之所以隐瞒身份是想伺机下手。", 37, 3003406, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("那些军团长为什么要进攻克里蒂亚斯呢？", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face13#一定是不想被人发觉塔纳的存在。\r\n而克里蒂亚斯应该有塔纳的相关资料或者目击者……", 37, 3003406, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face13#最好快点出去。虽然记忆中的黑魔法师不见得拥有那么大的力量……但最好还是不要遇见。", 37, 3003406, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face13#沼泽开始晃动。应该很快就会跳出来。", 37, 3003406, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/bubble/skeleton", "animation", "", "bubble"], [0, 1, 1, 90000, 0, 0, 0, 1]);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
                                                                    cm.userSetFieldFloating(450006440, 5, 5, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.userSetFieldFloating(450006440, 7, 7, 1);
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3300)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_取消复合图片动画("bubble", 1, 1000);
                                                                                cm.forceStartQuest(34269, "");
                                                                                cm.updateInfoQuest(34271, "02=h0;20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;53=h0;35=h0;54=h0;18=h0;36=h1;28=h0;29=h0");
                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_LeaveField("oid=2008984");
                                                                                    cm.dispose();
                                                                                    cm.warp(450006040, 1, true);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.setStandAloneMode(false)
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face13##h0#！恢复意识了吗？", 36, 3003406, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃……嗯。终于出来了。你的样子？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face13#好像变成江了。没办法，谁叫我是艾尔达呢。", 36, 3003406, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("可塔纳呢？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face13#不知道。她好像是掉到别的地方了。", 36, 3003406, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("糟了！必须说服塔纳才行……", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face13#这太冒险了。", 36, 3003406, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("什么？", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face13#你还不知道她的目的吗？", 36, 3003406, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face13#结束痛苦的唯一办法。就是……", 36, 3003406, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("世界毁灭？！！", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face13#答对了。", 36, 3003406, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("结果是徒劳一场。", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face12#我获得这副身体……不，更大的问题是……", 36, 3003406, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#啊，快看。口袋里好像有……", 36, 3003406, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("这不是神秘徽章嘛？", 56, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceCompleteQuest(34269);
                                                                            cm.forceStartQuest(34270, "");
                                                                            cm.setInGameDirectionMode(true, false, true);
                                                                            cm.setStandAloneMode(true);
                                                                            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                                                            cm.npc_ChangeController(3003400, "oid=2009011", 2015, -255, 12, 1965, 2065, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=2009011", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 1920, -160)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.gainItem(1712005, 1);
                                                                                cm.gainItem(3015962, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 960, -27);
                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                    cm.sendNormalTalk_Bottom("#face10#如果他们的目标……是阻止黑魔法师，那真该现在就干掉……咳咳……", 37, 3003400, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(300, 4000, 500, 1230, 120)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face10#………", 37, 3003400, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 500, 1920, -160)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.npc_setForceFlip("oid=2009011", 1);
                                                                                                            cm.npc_SetForceMove("oid=2009011", 1, 270, 120);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.Npc_Fadeout("oid=2009011", 0, 700);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.npc_LeaveField("oid=2009011");
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
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
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(940204012, 0);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.setStandAloneMode(false)
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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