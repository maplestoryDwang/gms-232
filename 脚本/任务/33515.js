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
            cm.sendNormalTalk_Bottom("嗯？你们来工地有什么事吗？", 37, 1530639, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330002612, 0)
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
            cm.gainExp(Math.pow(cm.getLevel(), 3));
            cm.forceCompleteQuest(33515);
            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
            cm.sendNormalTalk_Bottom("#face2#……", 37, 1530621, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH6_04/3", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你……", 37, 1530604, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#跟踪？", 37, 1530621, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH6_04/4", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#才不是！！", 37, 1530604, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH6_04/5", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom(" 你们在干什么！把炒年糕当做儿戏的家伙！", 37, 1530171, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH6_04/6", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2##fs25##r我来试试炒年糕吧？", 37, 1530621, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH6_04/7", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……", 37, 1530090, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你是有什么病吧？", 37, 1530604, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH6_04/8", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("肚子饿了~伊莉娜~姐姐~", 37, 1530110, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH6_04/9", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("喂，点菜。", 37, 1530604, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH6_04/10", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#别惹事了，快回家吧。", 37, 1530621, true, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH6_04/11", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("奶奶~兼职生在这里没大没小的！", 37, 1530100, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH6_04/12", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face3##fs25##r点菜吧，客人！", 37, 1530621, true, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH6_04/13", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("怕，怕怕！", 37, 1530110, true, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH6_04/14", 100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("炒年糕5人份。", 37, 1530604, true, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/CH6_04/15", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("炒年糕，炒年糕~", 37, 1530110, true, true);
                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_04/16", 100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#接着，哼。", 37, 1530621, true, true);
                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_04/17", 100)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("事情都做完了，回去吧，辛苦你了。", 37, 1530171, true, true);
                                                                                cm.effect_Voice("Voice2.img/Friends/CH6_04/19", 100)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceCompleteQuest(33525);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/spinoff2/2", 0, 1500, 0, 0, 0, 4, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1000, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("大，大家……你们看到他的手了吗？", 37, 1530607, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("手指上都是创可贴啊……", 37, 1530100, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("看来他真是下狠心练习了啊。", 37, 1530090, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("那又怎么样，我们也像那样不就行了。", 37, 1530604, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#但是……现在就算那样做，我们也赢不了啊。", 37, 1530100, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("嘤，对啊。而且，我和胡克都是新手。", 37, 1530607, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("反正……肯定是没有胜算的。", 37, 1530090, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#现在我们就去认错，然后取消赌约吧！\r\n庆典明年也能去啊。", 37, 1530100, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("我也赞成！明年也有庆典，我可不想在全校学生面前被侮辱……", 37, 1530607, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("我们没必要受这种侮辱啊。", 37, 1530090, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                        cm.sendNormalTalk_Bottom("明年？对我们来说没有明年了……", 37, 1530604, true, true);
                                                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_04/20", 100)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#对不起，因为我逞强，害得大家成了这样。", 37, 1530604, false, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#都是我强迫大家才变成这样的吧。", 37, 1530604, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#我说过的话我会负责的，乐队就解散吧。", 37, 1530604, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("……我说错话了。", 37, 1530090, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("是啊，明年伊莉娜姐姐就不在了……", 37, 1530607, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("这么说来，只有她是3年级的吧？我们都忘了啊。", 37, 1530100, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("但是她刚才说了#b“对我们来说”#k对吧。那是什么意思？", 37, 1530090, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("我还是第一次看到姐姐那么垂头丧气的样子……怎么办？！", 37, 1530607, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("我们先回去吧，明天再去哄伊莉娜。", 37, 1530090, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("嗯……", 37, 1530607, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("好啊，那我们明天见吧。", 37, 1530100, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                            cm.warp(330000000, 5)
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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