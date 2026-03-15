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
            cm.sendNormalTalk_Bottom("#h0#，你好！\r\n那个，通过昨天的事情……我明白了很多事情。我已经下定决心，以后不再说谎了。", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("所以说，今天是卡珊德拉怪谈剧场的最终篇，你也会过来的吧？", 37, 1530180)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那我等着你，#h0#。\r\n#b（前往2年级教室吧。）#k", 37, 1530180, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32870, "");
                        cm.dispose();
                        cm.warp(330000200, 0)
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
            cm.sendNormalTalk_Bottom("你来啦。那我们现在就开始卡珊德拉怪谈剧场的最终篇吧！", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("各位，之前我所说的怪谈都是假的！很抱歉。", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("什么嘛~ 卡珊德拉。因为你，我晚上都不敢去上厕所！", 37, 1530270, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这么说，孩子的哭声也是假的吗？", 37, 1530310, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不，那不是假的！但经过了解，我发现那声音其实是……\r\n你们等一下，我拍了照片！", 37, 1530180, true, true)
                        } else {
                            if (status === a++) {
                                cm.curNodeEventEnd(true);
                                cm.setInGameDirectionMode(true, false, true);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/spinOff1/ericson", 0, 1500, 0, 0, 12, 4, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("什么啊，那声音是看门大叔养的小猫发出来的？原来是这样啊。", 37, 1530270, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("也就是说，世界上根本没有鬼？", 37, 1530110, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1000, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("没错，这个世界上怎么可能会有鬼呢？鬼故事都是编造出来的。所以，你们以后不用害怕了，哈哈哈。", 37, 1530180, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("等等……", 37, 1530270, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setAmbience("Ambience.img/horrorpiano", 100, 60);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/spinOff1/ericson", 0, 1500, 0, 0, 12, 4, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("这张照片有些奇怪吧？", 37, 1530270, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("……这不是#r人头#k吗？", 37, 1530270, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("01", "Map/Effect2.img/spinOff1/ericsonGhost", 0, 1500, 0, 0, 14, 4, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.playSoundEffDirectly("Ambience.img/horrorpiano");
                                                                                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                        cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_06/17", 100)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.forceStartQuest(32870, "");
                                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                        cm.forceCompleteQuest(32870);
                                                                                                        cm.updateInfoQuest(32719, "sms=1;gal=1;add=0");
                                                                                                        cm.dispose();
                                                                                                        cm.warp(100000004, 0)
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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