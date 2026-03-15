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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64112.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 450, -180);
            cm.sendNewEffects(17, [0, 1000, 2000, 400, -160])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.sendNormalTalk_Bottom("#b莎娜安！", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.npc_setForceFlip("oid=7533768", 1);
                    cm.npc_setForceFlip("oid=7533769", 1);
                    cm.sendNormalTalk_Bottom("#b我正要去找你呢，你在这里做什么？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊，#h0#…… 这房子里的家伙又惹事了，好几天都没有开门… ", 37, 9400586, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b这个房子？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.npc_setForceFlip("oid=7533768", -1);
                                cm.sendNormalTalk_Bottom("住在里边的家伙非常让人头痛，不知道这次又有什么事情让他不开心… ", 37, 9400586, true, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_setForceFlip("oid=7533769", -1);
                                    cm.sendNormalTalk_Bottom("莎娜安，艾伊纳尔会听到的。", 37, 9400601, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我就是要让他听到。", 37, 9400586, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_setForceFlip("oid=7533768", 1);
                                            cm.npc_setForceFlip("oid=7533769", 1);
                                            cm.sendNormalTalk_Bottom("对了，你找我有什么事？", 37, 9400586, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b你在森林里居住的时候… 有没有看到过外人？或者说形迹可疑的人… ", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("外地人我倒是看到过几个，大概什么时候？", 37, 9400586, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b嗯… 6个月前… ", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("… 可惜那时候没有。", 37, 9400586, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b原来如此，不知道我是不是又让你回忆起伤心的往事。", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("没什么，过去的事情罢了。如果这些能找回布兰茜的话，你们随时都可以来找我。", 37, 9400586, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_LeaveField("oid=7533768");
                                                                            cm.npc_LeaveField("oid=7533768");
                                                                            cm.npc_LeaveField("oid=7533769");
                                                                            cm.npc_LeaveField("oid=7533769");
                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), 660, 0);
                                                                            cm.npc_ChangeController(9400586, "oid=7533961", 710, 0, 33, 660, 760, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=7533961", "summon", 0, 0);
                                                                            cm.npc_ChangeController(9400601, "oid=7533962", 770, 0, 33, 720, 820, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=7533962", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                            cm.sendNewEffects(12, [0, 900, 80, 0, 0])
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.npc_SetForceMove("oid=7533962", 1, 150, 70);
                                                                                cm.npc_SetForceMove("oid=7533961", 1, 150, 70);
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_ForcedFlip10(2, 100);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7533961"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.sendNormalTalk_Bottom("啊！对了，我没有告诉你这个！", 37, 9400586, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b这个？是什么？", 57, 0, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.npc_setForceFlip("oid=7533961", -1);
                                                                                                        cm.npc_setForceFlip("oid=7533962", -1);
                                                                                                        cm.sendNormalTalk_Bottom("… 你去森林的时候… 看到过粉色的很粘稠的… 东西了吧？", 37, 9400586, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("在小屋附近是不是有很多！", 37, 9400586, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b是的，我看到了。我和艾丽卡称之为… ‘恶心的粉红触手’。", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("呵呵，名字起的到不错！", 37, 9400586, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我在森林里等着孙女的时候，无意间看到了那奇怪的东西。", 37, 9400586, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("‘那家伙’ 好像通过你们所说的‘恶心的粉红触手’来控制其他的怪物。", 37, 9400586, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#b… 果不其然，和我们的猜测完全相同。", 57, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.npc_setForceFlip("oid=7533961", 1);
                                                                                                                                    cm.npc_setForceFlip("oid=7533962", 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.npc_SetForceMove("oid=7533962", 1, 150, 70);
                                                                                                                                        cm.npc_SetForceMove("oid=7533961", 1, 150, 70);
                                                                                                                                        cm.sendNewEffects(12, [2000, 1000, 80, 0, 0])
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("那… 你们知道这个吗？", 37, 9400586, false, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip10(2, 100);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#b哪个？", 57, 0, false, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("就是‘那家伙’产生恶心粉色的事情… ？", 37, 9400586, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b… 我们只是猜测肯定会有某种关联… ", 57, 0, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.npc_setForceFlip("oid=7533961", -1);
                                                                                                                                                                        cm.npc_setForceFlip("oid=7533962", -1);
                                                                                                                                                                        cm.sendNormalTalk_Bottom("只要‘那家伙’一出现，天空即刻变灰，然后就开始下起了雪。他那庞大的身躯每每移动时，地上的积雪全部会弹起。", 37, 9400586, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("下雪的时候‘那家伙’好像喷出什么奇怪的粉末，感觉空中飘落下来红色的雪一样。", 37, 9400586, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("然后那个巨大的身影，我用这双眼睛看的非常清楚！它好像在斩断身体的一部分！", 37, 9400586, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("… 不知道是不是因为那个缘故，它每次能制作的数量有一定的上限。", 37, 9400586, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b这是真的吗？！", 57, 0, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("对，是真的。", 37, 9400586, true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("如果‘那家伙’真的能用恶心的粉红触手来控制怪物的话…", 37, 9400586, true, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b如果我们消灭的速度比制作的速度快的话，它就会到极限了吧。", 57, 0, true, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("正是！", 37, 9400586, true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b不过… 上一次在森林里，当我把恶心的粉红触手全都消灭之后… ‘那家伙’一过来，触手们又开始活过来了。照那样看来… ", 57, 0, true, true)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("… ‘那家伙’自己好像也有控制能力。", 37, 9400586, true, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b对，不过他每次制作的数量有限制的话，说不定真能帮上大忙。", 57, 0, true, true)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("如果那样可真是太好了，我这把老骨头也算没有枉费在小屋里生活的日子啦。", 37, 9400586, true, true)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("还有件事要告诉你… ", 37, 9400586, true, true)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("也对，你来到阿布鲁的时间也不短，而且也进过森林，能看到的应该都看到了吧。", 37, 9400586, true, true)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("如果我还能记起什么，到时候再告诉你。", 37, 9400586, true, true)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b谢谢你，莎娜安。", 57, 0, true, true)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.forceCompleteQuest(64112);
                                                                                                                                                                                                                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.sendNewEffects(19, [0])
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
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
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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