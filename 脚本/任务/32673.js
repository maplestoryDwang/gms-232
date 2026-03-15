var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNormalTalk_Bottom("迈勒，你回来了。没什么事吧？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没事。不过……\r\n唉……你又弄坏天琴弓了。", 36, 2550002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这是突发情况，不可抗力，不怪我。\r\n要是没有天琴弓可就糟了，唉……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("用于突发情况的应该是剑。\r\n天琴弓是用来演奏的。", 36, 2550002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("是，是，你说得对。不过剑太重了嘛。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你自从隐退之后，一身武艺都要荒废了。\r\n你就一点不爱惜你的剑吗？", 36, 2550002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("反正是名剑嘛，没事的。\r\n而且以后还会有什么要用剑的地方吗？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("刚刚不就有吗。", 36, 2550002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("总之，修天琴弓需要用#b松脂#k。", 36, 2550002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("啊，那个可以从#b大金龟子#k那里弄到。", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("？", 36, 2550002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("？", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("？", 36, 2550002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("要我……去吗？", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("我早就说过了，自己的物品自己要保管好。队长你总是……", 36, 2550002, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("知道了，知道了。", 56, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.askYesNo_Bottom("移动到下面狩猎#b大金龟子#k即可。\r\n#b10个松脂#k足够了。", 36, 2550002)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(32673, "");
                                                                                cm.OnStartNavigation(306000200, 0, "", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("动作还挺快的嘛。我这就给你修天琴弓。", 36, 2550002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哼哼，好香的味道。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b海姿#k抓了几只雪兔回来。稍等一会儿。", 36, 2550002, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32673);
                        cm.gainExp(186336);
                        cm.curNodeEventEnd(true);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                        cm.gainItem(4036138, -10)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 530, -2004);
                                cm.inGameDirectionEvent_ChangeEquipment([1392000, 1004987, 1102039, 1353300]);
                                cm.inGameDirectionEvent_ForcedFlip10(2, 5);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 130, -1900)
                            } else {
                                if (status === a++) {
                                    cm.setAmbience("Bgm48.img/noname", 100, 60);
                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("哈，吃饱了。终于活过来了。", 37, 2550003, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("队长，你多吃点吧。\r\n要是不能维持适当的体重，可是撑不过冬天的。\r\n冬天马上就要来了……", 37, 2550002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("你不是也知道嘛。\r\n他那副样子的时候，你再怎么唠叨他也没用。", 37, 2550001, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("队长？你们难道是……军人？", 37, 2550003, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("是佣兵而已。\r\n现在洗手不干了，就跑到这里来了。", 37, 2550002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("想当年，那可是一段光辉岁月啊。有不少人追随我呢。", 37, 2550001, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("那现在怎么就只有你们三人？", 37, 2550003, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("本来还有别人的……不过大家都回故乡去了。\r\n在外面漂泊久了，就会想念母亲的怀抱嘛。", 37, 2550002, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("话说，小姑娘你怎么会来这里？", 37, 2550002, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("我？末日不是没剩几天了嘛，我正在寻找要带上#b方舟#k的动物。", 37, 2550003, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("你说末日……吗？", 37, 2550002, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（嘀嘀咕咕）#k这姑娘怎么看都有点精神不正常啊。\r\n竟然穿成那幅样子跑来这里。", 37, 2550001, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（嘀嘀咕咕）#k现在这世道本来就没几个正常人了吧……\r\n只可惜她年纪轻轻的。", 37, 2550002, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("你、你们！我都听到了！！", 37, 2550003, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("算了，你们相不相信都无所谓。反正谁都无法躲过末日。", 37, 2550003, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("这话倒是……没错。\r\n这样下去，没有人能活下来。", 37, 2550002, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("你听说什么消息了吗？", 37, 2550001, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("听说一群叫#r#fs18#黑魔法师#k#fs16#的人举兵起义了。", 37, 2550002, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_ChangeEquipment([1392000, 1004991, 1102039, 1353300]);
                                                                                                                                cm.playSoundEffDirectly("Bgm48.img/noname");
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("黑魔法师……？", 57, 0, false, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("(黑魔法师……终于露出真面目了。)", 37, 2550003, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("世界陷入混乱，总会有人抵挡不了邪恶魔法的诱惑。", 37, 2550001, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("不用担心，那些跟我们无关。", 57, 0, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("话是这么说，但是……\r\n我们得在战争打响之前，去换些粮食回来啊。", 37, 2550002, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("没错，附近就有座狮子王之城嘛。", 57, 0, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("什么？那我们的约定怎么办？", 37, 2550003, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("约定？", 37, 2550001, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("(哎呀呀，差点忘了。)", 57, 0, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                cm.warp(306000000, 0, true);
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
};