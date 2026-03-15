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
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_LeaveField("oid=9400593");
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("哈……", 1, 0, 0, 2000, 9400620, cm.getPlayer().getId())
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("别喘气了……居民们要听见了……哈……", 1, 0, 0, 2000, 9400621, cm.getPlayer().getId())
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("你也别喘气啊……哈……", 1, 0, 0, 2000, 9400622, cm.getPlayer().getId())
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("好吧……知道了……大家都出发吧……", 1, 0, 0, 2000, 9400620, cm.getPlayer().getId())
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("没错……没错……出发吧……", 1, 0, 0, 2000, 9400621, cm.getPlayer().getId())
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b怎么了？", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.npc_setForceFlip("oid=9400621", 1);
                                        cm.npc_setForceFlip("oid=9400622", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("啊！#h0#！没什么！", 37, 9400620, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("嗯，没什么事儿。我有些在意在我来的时候看到的怪物，所以打算去消灭他们。", 37, 9400621, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b刚来就去了？", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……虽然很辛苦，但这都是为了居民们！这是我们亚皮纳斯该做的事情！", 37, 9400622, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("没错，如果我们都不帮忙，还有谁能帮忙呢？", 37, 9400620, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b需要我来帮忙吗？", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("不用了，但谢谢你能有这个心意！", 37, 9400622, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_ChangeController(9400593, "oid=9400593", 50, -20, 6, 0, 100, 1, true, false);
                                                                        cm.npc_SetSpecialAction("oid=9400593", "summon", 0, 0);
                                                                        cm.npc_SetForceMove("oid=9400593", -1, 450, 50);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                        cm.effect_PlayMusic("BgmPL2.img/SongOfHawar")
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("逃跑吧，怪物啊，这是最后的机会了", 37, 9400593, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("亚皮纳斯骑士团来帮助我们了", 37, 9400593, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=9400620"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=9400621"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=9400622"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_setForceFlip("oid=9400622", -1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_setForceFlip("oid=9400621", -1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.npc_setForceFlip("oid=9400620", -1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("是不是很可爱？我们一定会守护那个笑容的。", 37, 9400620, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.npc_setForceFlip("oid=9400620", 1);
                                                                                                        cm.npc_setForceFlip("oid=9400621", 1);
                                                                                                        cm.npc_setForceFlip("oid=9400622", 1);
                                                                                                        cm.sendNormalTalk_Bottom("没错。只要是为了弱者！没有时间休息！", 37, 9400622, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("那就出发吧！", 37, 9400621, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.npc_SetForceMove("oid=9400622", 1, 50, 50);
                                                                                                                cm.npc_SetForceMove("oid=9400621", 1, 50, 50);
                                                                                                                cm.npc_SetForceMove("oid=9400620", 1, 30, 50);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.npc_SetSpecialAction("oid=9400620", "rest", -1, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.npc_setForceFlip("oid=9400621", -1);
                                                                                                                        cm.npc_setForceFlip("oid=9400622", -1);
                                                                                                                        cm.sendNormalTalk_Bottom("你怎么了！", 37, 9400622, false, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("暂时有些贫血……", 37, 9400620, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.setNpcSpecialActionReset("oid=9400620");
                                                                                                                                cm.sendNormalTalk_Bottom("你先休息吧，我们去就行了。", 37, 9400621, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.askMenu_Bottom("#b(……看来大家都已经很累了。)\r\n#L0#你们都休息下吧。我去就可以了。把木栅栏外面的怪物都消灭就行了吧？#l\r\n#L1#那就拜托你了。#l", 57, 0)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        if (b == 1) {
                                                                                                                                            cm.dispose();
                                                                                                                                            return
                                                                                                                                        }
                                                                                                                                        cm.npc_setForceFlip("oid=9400621", 1);
                                                                                                                                        cm.npc_setForceFlip("oid=9400622", 1);
                                                                                                                                        cm.sendNormalTalk_Bottom("……总是让来让去也不好……嗯，那就拜托你了？", 37, 9400621, false, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#b当然了，今后还有很多战斗……现在请你们先保存下体力吧……", 57, 0, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("……谢谢。#h0#。我们本来一直是帮助别人的……居然能像这样得到帮助，真是开心呢。", 37, 9400620, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("其他居民得到我们的帮助的时候，应该也是这样的心情吧？突然感觉很开心呢。", 37, 9400620, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("你现在在干什么呢！\r\n#h0#，那就请你消灭50只暴走狼人吧！", 37, 9400622, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.forceStartQuest(64064, "");
                                                                                                                                                            cm.warp(867201360, 0);
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
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_LeaveField("oid=9400581");
            cm.npc_LeaveField("oid=9400581");
            cm.npc_setForceFlip("oid=9400620", 1);
            cm.npc_setForceFlip("oid=9400621", 1);
            cm.npc_setForceFlip("oid=9400622", 1);
            cm.sendNormalTalk_Bottom("#h0#！你来了啊，没受伤吧？", 37, 9400620, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b是的，请别担心。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("多亏了你，我们才休息了下。来了阿布鲁之后，还是第一次这么放心地休息呢。", 37, 9400622, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("虽然我们也很辛苦，但骑士们……真是连觉都睡不了。特别是吉莉，考虑到我们的情况，连粗活都干了……她虽然还年轻，但真的很棒！", 37, 9400622, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("没错，虽然我们现在只是士兵，但是总有一天也会变成披着帅气披风的亚皮纳斯骑士的！", 37, 9400621, true, true)
                        } else {
                            if (status === a++) {
                                cm.npc_ChangeController(9400623, "oid=9400623", 280, -10, 7, 230, 330, 1, true, false);
                                cm.npc_SetSpecialAction("oid=9400623", "summon", 0, 0);
                                cm.npc_ChangeController(9400581, "oid=9400581", 220, -10, 7, 170, 270, 1, true, false);
                                cm.npc_SetSpecialAction("oid=9400581", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(250)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#你现在在这干嘛呢？", 37, 9400581, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("派……派遣团团长大人！", 37, 9400620, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetForceMove("oid=9400581", -1, 300, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(250)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_SetForceMove("oid=9400623", -1, 300, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#什么？寻求帮助？", 37, 9400581, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#这么涣散松懈，你还想保护谁？", 37, 9400581, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("对不起。", 37, 9400620, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b是我太想帮助他们了……", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你没必要帮他们说话，立正！", 37, 9400581, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("是，派遣团团长！", 37, 9400620, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_setForceFlip("oid=9400620", -1);
                                                                            cm.npc_setForceFlip("oid=9400621", -1);
                                                                            cm.npc_SetForceMove("oid=9400620", -1, 500, 150);
                                                                            cm.npc_SetForceMove("oid=9400621", -1, 500, 150);
                                                                            cm.npc_SetForceMove("oid=9400622", 1, 300, 150);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.forceCompleteQuest(64064);
                                                                            cm.npc_LeaveField("oid=9400620");
                                                                            cm.npc_LeaveField("oid=9400621");
                                                                            cm.npc_LeaveField("oid=9400622");
                                                                            cm.npc_ChangeController(9400622, "oid=9400622", 430, -125, 10, 380, 480, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=9400622", "summon", 0, 0);
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
};