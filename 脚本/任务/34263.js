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
            cm.sendNormalTalk_Bottom("#face12#好像是这时候掉的。", 36, 3003406, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("到底是什么宝贝啊，要到这种地方来？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#塔纳一定会喜欢的。\r\n调查这么多地方，这附近最合适。", 36, 3003406, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("难道是宝石？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face11#可以说很相似。女人生来就对礼物没什么抵抗力，", 36, 3003406, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("(这个嘛……)", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("(你根本想象不到塔纳得到宝石后有多高兴？)", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("干我什么事……\r\n总之一定是被其中一个家伙吸进去了。", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.getMap().spawnReactorIfNotExist(100011, 0, 572, -313, 0, "???_????0");
                                            cm.askYesNo_Bottom("#face0#你快想想办法啊～你不是很厉害嘛。", 36, 3003406)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("好好好，知道了。", 56, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(34263, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("找到了。原来是项链。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#很好，干得漂亮！", 37, 3003406, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("等等，这不是反魔力石碎片嘛？呃啊！", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect3.img/morass/Jean/3", 0, 500, 0, 0, 12, 4, 1);
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#呼哧，差点出大事了。小心点。", 37, 3003406, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#你不记得那个惨案吗？\r\n这东西一旦摔碎，周围的生命就会全部蒸发。", 37, 3003406, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这么危险的东西干嘛带在身上？！", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#你不知道玫瑰带刺吗？\r\n越是美丽的东西就越是危险。我们塔纳就是这样。", 37, 3003406, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……我看你是彻底被迷住了。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(34263);
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.gainItem(4036312, -1);
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
};