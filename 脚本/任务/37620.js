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
            cm.sendNormalTalk_Bottom("#face0#勇士！！！", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你平安回来啦！太好了。", 36, 3004652, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("贝尔呢？贝尔怎么样了？", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#别担心。\r\n在核心爆炸之前，他应该使用了从T-boy那里拿到的小型传送装置。", 36, 3004652, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("成功……了吗？", 56, 0, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你看这个。这是从天上掉下来的。", 36, 3004652, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#重力装置炸毁之后，通往好友世界的门又打开了。", 36, 3004652, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.curNodeEventEnd(true);
                                        cm.setInGameDirectionMode(true, false, false);
                                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                        cm.setStandAloneMode(true);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction24.img/illust2/2", 0, 1500, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#从天空坠落到汉江中的神秘青年被成功营救上岸。据悉其真实身份是生存专家#b贝尔#k。", 36, 3004652, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#他的新作#b「生存之王：反转城求生记」#k遭到了疯狂抢购。", 36, 3004652, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#原本只有部分狂热书迷才知道的名字，突然就通过社交网络火遍了全国，让所有人目瞪口呆。", 36, 3004652, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("哈哈哈……", 56, 0, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("看来回去之后过得不错嘛。", 56, 0, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那还要多谢你。", 36, 3004652, false, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#虽然重力没有恢复，但贝尔大叔平安回到了故乡，我们也夺回了地面。", 36, 3004652, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#通往好友世界的门打开了，太阳应该也会很快升起。", 36, 3004652, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.askYesNo_Bottom("#face0#来，请收下这个。这是答应给你的东西，以及一点纪念品。\r\n#b（#i2630437# 神秘徽章 x 20个，无法交换，期限制：14天）\r\n#b（#i1005497# T-boy的显示器）", 36, 3004652, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(37620);
                                                                                        cm.gainExp(8782820);
                                                                                        cm.sendNormalTalk_Bottom("#face0#希望对你有用。\r\n经过一段时间之后就会消失，一定要尽快使用。\r\n（#i2630437# 神秘徽章 x 20个，无法交换，#r期限制：14天！！#k）", 36, 3004652, false, true, 1);
                                                                                        cm.gainItem(1005497, 1);
                                                                                        cm.gainItem(2630437, 20)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#对了，有件怪事。", 36, 3004652, false, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("嗯？", 56, 0, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#T-boy的机械身体？无人机？就是那个东西。\r\n一眨眼的工夫就消失不见了。", 36, 3004652, true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("是利用其他无人机回收走了吗？", 56, 0, true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#很有可能，但是……碎掉的显示器碎片上沾了一点血迹。", 36, 3004652, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("血……？等等，那么说……", 56, 0, true, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("炸毁列车，把脑袋伸到枪口……", 56, 0, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("若无其事想把整座城市炸毁的那个机械……", 56, 0, true, true, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("真的是那家伙的本体……？！", 56, 0, false, true, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#连接视频通信。", 44, 3004663, false, true, 1)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_复合图片动画(["Effect/Direction24.img/spine/0/skeleton", "hood_start", "hood_loop", "01"], [0, 0, 1, 0, 1, 10000, 0, 1, 0, 0]);
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#干嘛啊，烦死了。", 36, 3004672, false, true, 1)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#哎呀～亲爱的弟弟，看来这次吃了大亏。", 44, 3004001, true, true, 1)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#要是敢告诉父亲（唧），我就和你没完。", 36, 3004672, true, true, 1)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#呵呵呵，我会考虑一下。", 44, 3004001, true, true, 1)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#好久没见，连个脸都不肯露一下吗？", 44, 3004001, true, true, 1)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#切……", 36, 3004672, false, true, 1)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.fieldEffect_复合图片动画(["Effect/Direction24.img/spine/0/skeleton", "hood-->Tboy_loop", "Tboy_loop1", "01"], [0, 0, 1, 0, 1, 10000, 0, 1, 0, 0]);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#哎呀～脸上怎么有伤疤？难道是枪伤？", 44, 3004001, false, true, 1)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯，那个……", 36, 3004672, true, true, 1)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#这可怎么办～那张难看的脸，变得更难看了。", 44, 3004001, true, true, 1)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#住口。", 36, 3004672, true, true, 1)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#对了，那个人怎么样？", 44, 3004001, false, true, 1)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#就那样……", 36, 3004672, false, true, 1)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction24.img/spine/0/skeleton", "Tboy_loop1-->2", "Tboy_loop2", "01"], [0, 0, 1, 0, 1, 10000, 0, 1, 0, 0]);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#还行。", 36, 3004672, false, true, 1)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#被迷住了吗？", 44, 3004001, false, true, 1)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#没别的事的话，我挂了！", 36, 3004672, true, true, 1)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                                                                                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction24.img/spine/0/skeleton", "Tboy_end", "Tboy_endloop", "01"], [0, 0, 1, 0, 1, 10000, 0, 1, 0, 0]);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#切……", 36, 3004672, false, true, 1)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#不过……", 36, 3004672, false, true, 1)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 2500, 0, 0, 2000000, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm54/ReverseCity", 0, 0);
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#还挺刺激的。", 36, 3004672, false, true, 1)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.fieldEffect_取消复合图片动画("01", 1, 10);
                                                                                                                                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("BlackOut", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37620.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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