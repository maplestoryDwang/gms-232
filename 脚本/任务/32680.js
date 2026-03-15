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
            cm.sendNormalTalk_Bottom("队长，你醒了？", 36, 2550001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这是……哪里？我睡了多长时间？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("醒了？我们正在逃难的队伍中呢。", 36, 2550002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("逃难队伍？大家不是都死了吗？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你应该知道了……狮子王派出的怪物军队席卷了冰峰雪域全境。\r\n不过，总有活下来的人。", 36, 2550002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("阿丽莎呢？！她在哪儿？你们不会放她一个人走了吧？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_ChangeController(2550004, "oid=1762240", 1080, -530, 16, 1030, 1130, 0, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1762240", "summon", 0, 0);
                                    cm.forceCompleteQuest(32680);
                                    cm.gainExp(186336);
                                    cm.sendNormalTalk_Bottom("我在这儿呢。你都知道我的身份了，还是担心吗？", 37, 2550004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("多亏了这位姑娘，你才捡回一条命。", 36, 2550002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("啊啊，是啊，是啊……谢谢你。多亏你我才能活下来。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("哼，你可别误会了。我救你是要你遵守约定。\r\n这小家伙不算数，它太小了，没法带上方舟。", 37, 2550004, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.curNodeEventEnd(true);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(true, false, true);
                                                    cm.fieldEffect_PlayBGM("Bgm48.img/Nowhere", 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.setAmbience("Ambience.img/flyingdeck_fire", 60, 60);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect3.img/DLep4/2", 0, 1500, 0, 0, 0, 4, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue("我茫然若失。", 0);
                                                                cm.effect_Voice("Voice3.img/DLep4/h2/h_1.mp3", 100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_Monologue("我一辈子也不愿再见到的光景，又一次重现了。", 0);
                                                                    cm.effect_Voice("Voice3.img/DLep4/h2/h_2.mp3", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_Monologue("", 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_Monologue("我想起了5年前的小鬼。", 0);
                                                                            cm.effect_Voice("Voice3.img/DLep4/h2/h_3.mp3", 100)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_Monologue("不知那小鬼现在怎么样了？", 1);
                                                                                cm.effect_Voice("Voice3.img/DLep4/h2/h_4.mp3", 100)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_Monologue("恐怕要么被战争的大火吞噬，要么死于严寒和饥荒，", 0);
                                                                                    cm.effect_Voice("Voice3.img/DLep4/h2/h_5.mp3", 100)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_Monologue("不然，就会像那时一样，变成难民，在这寒冷的暴风雪中四处流浪吧。", 0);
                                                                                        cm.effect_Voice("Voice3.img/DLep4/h2/h_6.mp3", 100)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue("", 0)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_Monologue("和成百上千的其他小伙伴们一起……", 0);
                                                                                                cm.effect_Voice("Voice3.img/DLep4/h2/h_7.mp3", 100)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("", 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 300, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.eventSKill(0);
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

function end(d, c, b) {
    status++;
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