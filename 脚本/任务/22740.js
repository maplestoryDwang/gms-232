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
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === b++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -144, 50)
            } else {
                if (status === b++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -253, 19);
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === b++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("……这里是哪里？你是谁？", 37, a, false, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("……", 37, 1531004, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("……？！！？！？！？！？！？", 37, a, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("冷静点，你没事的。", 37, 1531004, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face0##r#fs25#狗居然会说话？！", 37, a, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("…………", 37, 1531004, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face2#啊，仔细再一看，原来是狼啊，对不起。", 37, a, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("这里到底是哪里？我之前明明是在地铁里的啊？我难道是在做梦吗？", 37, a, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("#face4#这不是梦，\r\n这个地方叫冒险岛世界。", 37, 1531003, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.npc_ChangeController(1531010, "oid=196628794", -45, 0, 38, -95, 5, 1, true, 0, false);
                                                                cm.npc_SetSpecialAction("oid=196628794", "summon", 0, 0);
                                                                cm.npc_SetForceMove("oid=196628794", -1, 80, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("#face4#这里和你所生活的世界不一样，希望你还是早点适应比较好。", 37, 1531003, false, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#比方说……", 37, 1531003, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/pang"], [0, -145, 50, 1, 0, 1, 1, 0]);
                                                                                cm.fieldEffect_PlayFieldSound("Kite/Crown", 100);
                                                                                cm.npc_LeaveField("oid=196628794");
                                                                                cm.npc_LeaveField("oid=196628794");
                                                                                cm.npc_ChangeController(1531003, "oid=196630788", -145, 0, 38, -195, -95, 1, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=196630788", "summon", 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#看到了吗？这便是魔法。", 37, 1531003, false, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#在你们所生活的世界是不存在的。", 37, 1531003, true, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom("……倒不像是在做梦。", 37, a, false, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我来正式介绍一下，我的名字叫#b内拉米迪奥内鲁尼亚。", 37, 1531003, true, true)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#在古语里是月光下高贵的半个孩子，\r\n作为历史非常悠久的魔法师家族的继承人……", 37, 1531003, true, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2##fs20#你到底在说什么啊，#b内罗。", 37, a, true, true)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#哎，我不是内罗啦！！", 37, 1531003, true, true)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PvP/80001740_Use", 100);
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/chaNero", 0, 500, 800, -120, 12, 5, 1, -1, 0, 0, 0);
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, -800, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/12thMS/jump_m", 100);
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, 800, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.sendNormalTalk_Bottom("话说回来这里是哪里啊，内罗？", 37, a, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#是我们救了你，你倒是听人家把话说完啊！！", 37, 1531003, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === b++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                    } else {
                                                                                                                                        if (status === b++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你还记得自己被一个奇怪的#b白发男人#k攻击的事情吗？", 37, 1531003, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === b++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我本应该跟过去拦住你的……这是我的失策啊。\r\n我原以为离得近就可以跟得更敏捷一些，没想到反而跟丢了你。", 37, 1531003, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === b++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#总之这段时间你只能在这里了。", 37, 1531003, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === b++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("那个，内罗，我完全不知道你在说什么。", 37, a, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === b++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#很快#b汉斯#k老师就要来了，详细的情况你可以听他跟你解释。\r\n在这之前还请你冷静一下，耐心等待。", 37, 1531003, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === b++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
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
                                                                                                                                                                                cm.npc_LeaveField("oid=196630788");
                                                                                                                                                                                cm.npc_LeaveField("oid=196630788");
                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                cm.forceCompleteQuest(22740);
                                                                                                                                                                                cm.forceCompleteQuest(22740);
                                                                                                                                                                                cm.gainExp(3000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22740.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var f = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + f + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == b++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};