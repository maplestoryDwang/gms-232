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
            cm.sendNormalTalk_Bottom("#face0##h0#。现在才来啊。", 36, 3003751, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#消灭黑魔法师后休息了吗？", 36, 3003751, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("时隔许久才舒舒服服地休息了一次。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那真是太好了。\r\n应该已经积蓄了不少力量吧。", 36, 3003751, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("出什么事了……？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#一场大战结束后，冒险岛世界看似恢复了和平……", 36, 3003751, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#但还有人在等你。", 36, 3003751, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("！！！", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(35831, "60=h1;52=h1;71=h0;53=h1;72=h0;73=h0;55=h1;56=h1;65=h0;57=h1;58=h1");
                                            cm.updateInfoQuest(35831, "60=h1;52=h1;71=h0;53=h1;72=h0;73=h0;55=h1;74=h0;56=h1;65=h0;57=h1;58=h1");
                                            cm.updateInfoQuest(35831, "60=h1;52=h1;71=h0;53=h1;72=h0;73=h0;55=h1;74=h0;56=h1;65=h0;75=h0;57=h1;58=h1");
                                            cm.sendNormalTalk_Bottom("啊……？", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#吼吼……看你吓的。", 36, 3003673, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你可真烦，南哈特。", 36, 3003672, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#大家都等着呢。", 36, 3003751, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face2##h0#真的辛苦了。", 36, 3003658, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#第一次见你的时候，你还是个对新世界充满好奇的孩子……", 36, 3003923, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#真的发生了很多事。", 36, 3003673, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#真的很骄傲。", 36, 3003923, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#对了，女皇给你准备了礼物。让你一定要收下。", 36, 3003673, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.askAcceptDecline_Bottom("#face4#我代表大家为#h0#送上满怀谢意的礼物。", 37, 3003750)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.playerMessage(5, "获得了<命运超越者>勋章。");
                                                                                    cm.playerMessage(-1, "获得了<命运超越者>勋章。");
                                                                                    cm.forceCompleteQuest(35333);
                                                                                    cm.forceCompleteQuest(35815);
                                                                                    cm.finishAchievement(1234);
                                                                                    cm.curNodeEventEnd(true);
                                                                                    cm.setInGameDirectionMode(true, false, true);
                                                                                    cm.fieldEffect_Hero9(0, 1000);
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_Hero9(80, 100);
                                                                                            cm.sendNormalTalk_Bottom("#face1#Zzz……（吧唧嘴）", 37, 3003755, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#浓重的黑暗吞噬心愿，告知终结时，将完成新的命运……\r\n真是有趣的歪理邪说。", 37, 3003755, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#拿到了有用的书……嗯……", 37, 3003755, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#也探测出黑魔法师留下的#r创世种子#k的位置了……", 37, 3003755, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#这下应该满足了吧……", 37, 3003755, false, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0##r吉伦·达勒莫尔……", 37, 3003755, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.setAmbience("Ambience.img/WSappear_loop", 200, 60);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM3_epilogue/skeleton", "animation", "", "intro"], [0, 1, 1, 0, 0, 0, 0, 1]);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                            cm.effect_Text(["找到#fn黑体##fs20#……"], [100, 2000, 4, 0, 80, 1, 4, 0, 0, 0, 0])
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                                                                                cm.effect_Text(["#fn黑体##fs20#种子，艾欧娜都在那里……"], [100, 2000, 4, 0, 80, 1, 4, 0, 0, 0, 0])
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.fieldEffect_取消复合图片动画("intro", 1, 2000);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.playSoundEffDirectly("Ambience.img/WSappear_loop");
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
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
                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm48/Outpost", 0, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35815.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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