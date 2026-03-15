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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 500, -2360, 3350)
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
                            cm.sendNormalTalk_Bottom("杰斯，怎么了？为什么自爆倒计时没有启动呢？", 56, 9401116, 0, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("刚刚#b赛恩的本体#k被破坏，所以系统出了点问题。\r\n现在#r自爆方案#k……只能#b手动#k启动了……", 36, 9401071, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("也就是说……", 56, 9401116, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("必须#b有人留下#k执行方案……", 36, 9401071, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("杰斯……你快离开这里。\r\n我留下来吧。", 56, 9401116, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#h0#，不行……\r\n只有#b阿特利埃职员#k才能执行这个方案……", 36, 9401071, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("那……那么……#b杰斯#k……你一定要留下来吗？！", 56, 9401116, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("也许……只能这样了……哈哈哈……", 36, 9401071, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("不要！你先跟我一起出去吧。\r\n出去后我们再一起想想别的方法……", 56, 9401116, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("没有别的方法了，#h0#。\r\n你不是也看到了吗？虽然赛恩被#h0#的强大力量消灭了，但他有卷土重来的征兆…….", 36, 9401071, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("如果这里不完全崩溃，那赛恩是绝对不会消失的。\r\n#e这是唯一的方法了。#n", 36, 9401071, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("杰斯……我不能丢下你不管……！", 56, 9401116, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("妨碍我的复仇大计……现在还妄想让我消失？", 36, 9401088, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("赛……赛恩！发现我们了，杰斯……！", 56, 9401116, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("请你不要妨碍我。\r\n我一定要完成……我的伟业。", 36, 9401088, 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("呃呃……#h0#！这样下去#r自爆方案#k会失败的……！", 36, 9401071, 1, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("要快点找到办法……", 56, 9401116, 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.npc_ChangeController(9401085, "oid=7250592", -2720, 3300, 29, -2770, -2670, 1, true, 0, false);
                                                                                                cm.npc_SetSpecialAction("oid=7250592", "summon", 0, 0);
                                                                                                cm.npc_SetForceMove("oid=7250592", 1, 150, 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4200)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                    cm.sendNormalTalk_Bottom("那个那个，赛恩，你冷静一下、我告诉你一个#b好消息#k。", 36, 9401085, 0, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("……#b672号。#k你怎么会在这里……", 36, 9401088, 1, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("是#h0#帮我的，我们还成了朋友。对吧，#h0#？", 36, 9401085, 1, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("我和你度过了一段很美好的时光，不过我现在要废掉你，然后制造673号。", 36, 9401088, 1, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("啊啊，等一下等一下。别那么着急。\r\n你现在不是还想向#b克拉尼亚#k复仇嘛？", 36, 9401085, 1, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("你知道我的母亲在哪儿吗？", 36, 9401088, 1, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("我知道。\r\n克拉尼亚有个#b密室#k。你不知道吧？", 36, 9401085, 1, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("没有那种地方。阿特利埃内没有我不能去的地方。", 36, 9401088, 1, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("克拉尼亚使我的电波无法触及到那里。\r\n我把坐标告诉你。那是……（嘀嘀咕咕）", 36, 9401085, 1, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("消……消失了。", 56, 9401116, 1, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#他肯定拼命去找克拉尼亚了吧。哈哈哈。真好玩，真好玩。\r\n就像人类玩的捉迷藏一样。", 36, 9401085, 1, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#h0#……你快趁机出去吧……！", 36, 9401071, 1, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("杰斯……", 56, 9401116, 0, 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#h0#……快走吧。这是#b我的心愿#k……", 36, 9401071, 1, 1)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("我犯下了很多罪。\r\n就算我再怎么后悔也无济于事……", 36, 9401071, 1, 1)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("在我手中被创造、被破坏的拟真机器人也不计其数……\r\n我只拯救了几名而已，罪过是不会消失的……", 36, 9401071, 1, 1)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("杰斯……但是……", 56, 9401116, 1, 1)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("就像#h0#拯救世界一样……我也……\r\n#r这是我最起码能做的事情#k。", 36, 9401071, 1, 1)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("但是你……", 56, 9401116, 1, 1)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#h0#！快走！\r\n如果这次再失败的话，之前的所有努力都会化为泡影的……！", 36, 9401071, 1, 1)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("你走的时候，把这个拟真机器人也带走吧。\r\n虽然不知道他是谁……请你也给他一次#b重生#k的机会吧。", 36, 9401071, 1, 1)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("哈哈，没错。如果赛恩爆炸的话，我也可以出去了呢。", 36, 9401085, 1, 1)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("对不起……真的……对不起。", 56, 9401116, 1, 1)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 500);
                                                                                                                                                                                                    cm.npc_setForceFlip("oid=7250592", -1);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4200)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.npc_setForceFlip("oid=7250592", 1);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("杰斯……是个骗人精啊。", 36, 9401085, 0, 1)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("自爆什么的。不是只有这里的职员可以，谁都可以做的。", 36, 9401085, 1, 1)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("哈哈……你知道了啊\r\n请你一定要对#h0#……保密……", 36, 9401071, 1, 1)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("为什么要撒谎呢？", 36, 9401085, 1, 1)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("因为……世界需要#h0#这样的人……\r\n他是强大、善良、正义的英雄。\r\n比起我们这样的人……", 36, 9401071, 1, 1)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("呃嗯……我不太明白。", 36, 9401085, 1, 1)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#h0#，如果你能和我一起出去看看的话……应该就会理解了。", 36, 9401071, 1, 1)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#那么，再见了。", 36, 9401085, 1, 1)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.npc_setForceFlip("oid=7250592", -1);
                                                                                                                                                                                                                                            cm.npc_SetForceMove("oid=7250592", -1, 300, 100);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4200)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("呼……让我试试吧……", 36, 9401071, 0, 1)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.getTopMsgFont("启动自爆方案。正常运行手动模式。", 3, 20, 20, 0, 0);
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3200)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.getTopMsgFont("请启动手动模式。", 3, 20, 20, 0, 0);
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3200)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.userSetFieldFloating(867142012, 4, 4, 10);
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("不管发生什么……我都要完成……！\r\n就像#h0#……没有放弃我们一样！", 36, 9401071, 0, 1)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                                                                                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("0", "Map/EffectPL.img/Beautyroid/39", 0, 1000, 0, 0, 15, 4, 0, -1, 0, 0, 0);
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3200)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2200)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion6", 100);
                                                                                                                                                                                                                                                                                cm.userSetFieldFloating(867142012, 0, 0, 0);
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200)
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                    cm.warp(867142013, 0, false);
                                                                                                                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7250592");
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
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64927.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};