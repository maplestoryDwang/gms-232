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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 500, 50, -70)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 525, -143);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.npc_ChangeController(3001300, "oid=912571", 602, -140, 4, 552, 652, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=912571", "summon", 0, 0);
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.effect_Text(["#fn黑体##fs18#第一课：理解水晶", ""], [20, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#好,那准备开始上课了。", 37, 3001302, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#格兰蒂斯全域可采集的#b水晶#k自古以来就是我们民族的一种重要资源。", 37, 3001302, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我们翼人用从水晶中提取出的爆炸性的魔力获得了格兰蒂斯至高至上的力量。", 37, 3001302, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#详细内容会在历史课讲解,今天来学习赋予我们力量的各种水晶。", 37, 3001302, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.Hidden_background("c1_appear", 1, 1, 0, 0);
                                                cm.onSetMapTagedObjectVisible(1, "c1_appear", 512);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/classroom_crystal", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.onSetMapTagedObjectVisible(1, "c1_appear", 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.Hidden_background("c1_loop", 1, 1, 0, 0);
                                                        cm.Hidden_background("c1_appear", 1, 0, 0, 0);
                                                        cm.onSetMapTagedObjectVisible(1, "c1_loop", 512);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.onSetMapTagedObjectVisible(1, "c1_loop", 32);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#首先,哪个学生能说出散发神秘绿光水晶的名字？", 37, 3001302, false, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0##fs12#钙铝榴石。", 37, 3001351, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#主人,你这么小声,大家根本听不见。", 37, 3001300, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#哦,好吧,迪恩。你说说看。", 37, 3001302, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#是#b钙铝榴石#k！！", 37, 3001307, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#这就结束了……？那我再仔细跟你说明一下。", 37, 3001302, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#还有……那个……", 37, 3001307, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#是啊……嘿嘿。", 37, 3001307, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#唉……", 37, 3001302, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0##b钙铝榴石#k主要分布在深林或丛林密布的地方,用于治疗伤口或恢复体力。", 37, 3001302, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.Hidden_background("c2_appear", 1, 1, 0, 0);
                                                                                                        cm.onSetMapTagedObjectVisible(1, "c2_appear", 512);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/classroom_crystal", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.onSetMapTagedObjectVisible(1, "c2_appear", 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.Hidden_background("c2_loop", 1, 1, 0, 0);
                                                                                                                cm.Hidden_background("c2_appear", 1, 0, 0, 0);
                                                                                                                cm.onSetMapTagedObjectVisible(1, "c2_loop", 512);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.onSetMapTagedObjectVisible(1, "c2_loop", 32);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#拥有强大威力的魅力红光水晶的名字？有人知道吗？", 37, 3001302, false, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fs12#红榴石。", 37, 3001351, true, true, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face2#主人,你只有大声点,大家才能听到。", 37, 3001300, true, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#好吧,卡尼里恩。", 37, 3001302, true, true, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#名为#b红榴石#k的矿物,虽然爆发力十足,但却难以提取魔力。", 37, 3001308, true, true, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#哈哈,漂亮,干得漂亮。那接下来……", 37, 3001302, true, true, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.Hidden_background("c3_appear", 1, 1, 0, 0);
                                                                                                                                                cm.onSetMapTagedObjectVisible(1, "c3_appear", 512);
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/classroom_crystal", 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.onSetMapTagedObjectVisible(1, "c3_appear", 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.Hidden_background("c3_loop", 1, 1, 0, 0);
                                                                                                                                                        cm.Hidden_background("c3_appear", 1, 0, 0, 0);
                                                                                                                                                        cm.onSetMapTagedObjectVisible(1, "c3_loop", 512);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.onSetMapTagedObjectVisible(1, "c3_loop", 32);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#莫非你对这水晶……", 37, 3001302, false, true, 1)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fs24##b黑曜石！#k", 37, 3001300, true, true, 1)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#我的妈,吓死我了！", 37, 3001307, true, true, 1)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#这种散发漆黑光芒的黑水晶不仅难找,还拥有黑暗魔法气息。如果胡乱使用,后果不堪设想。记得格外注意。", 37, 3001300, true, true, 1)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#利、利奥………", 37, 3001351, true, true, 1)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哈哈,太棒了！这机器人可真不错！？", 37, 3001302, true, true, 1)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.askAcceptDecline_Bottom("#face0#好,我想你都听明白了,那我这就给你下达任务。下课前你需要采集#b10个#i4036163# #t4036163##k！做得到吗？", 37, 3001302, 1)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.forceStartQuest(34802, "");
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##b#i4036163##t4036163##k可从#r#o2400400##k那获得。那大家准备好了吗？我会送大家一同出发,看谁能率先返回喽！", 37, 3001302, false, true, 1)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##b回学院的时候,推荐使用冒险岛向导#k(快捷键：U)。", 37, 3001300, true, true, 1)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                cm.npc_LeaveField("oid=912571");
                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                cm.gainItem(1353500, 1);
                                                                                                                                                                                                                cm.warp(402000512, 0, true);
                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false)
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34802.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#怎么回事？这么晚才来？我担心你出事,正打算出去看看呢。", 36, 3001302, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那个……", 37, 3001351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#呼,第一节课还真不轻松。总之幸好大家都平安回来了。那下节课见。", 37, 3001302, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3001300, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.gainItem(4036163, -10);
                            cm.sendNormalTalk_Bottom("#face0#下节课是魔法战斗实战。我带你去教室。", 37, 3001300, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(402000527, 0, "", 0);
                                cm.forceCompleteQuest(34802);
                                cm.updateInfoQuest(34802, "class1=1;out=2;exp=1");
                                cm.dispose();
                                cm.warp(402000522, 2, false)
                            }
                        }
                    }
                }
            }
        }
    }
};