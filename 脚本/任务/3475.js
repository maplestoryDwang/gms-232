var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
            cm.sendNormalTalk("#fn宫书体#(滋滋……滋滋……)#fn#这里是……地球防御本部……\r\n#b万能牌项目#k#fn宫书体#(……滋滋)#fn#开始了。", 4, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b万能牌项目？#k", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("#b#h0##k，如果你听到了这个消息，\r\n就表示本部出现了紧急状况。\r\n\r\n请速速前往#b地球防御本部#k的#b司令室#k。\r\n#b(接受时自动前往)#k", 4, 2052006)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(3475, "");
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.sendNormalTalk("#fn宫书体#(滋滋……)#fn#\r\n博士，那个之前没说过啊。", 5, 2052003, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对了！没错，\r\n这个装置会在#r3秒后自动爆炸#k。", 5, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.emotion(5, 5000);
                                cm.sendNormalTalk("额！", 3, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_MoveAction(4);
                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, 0, -90, 1, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                            cm.userSetFieldFloating(410000101, 5, 5, 50);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.userSetFieldFloating(410000101, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.warp(221000300, 0);
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

function end(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 110, -34);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 80)
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
                        cm.sendNormalTalk_Bottom("#face2#你来得正好，#b万能牌项目#k已经正式启动了。", 37, 2052006, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#现在地球防御本部和冒险勇士遭遇了#r前所未有的大危机#k，\r\n这事情说来话长……", 37, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(这件事也就算了，这蛋糕上哪儿来的这么多虫子啊……)#k", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap2", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#额啊啊啊啊！！", 37, 2052005, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#阿亮！！！阿亮变成煎饼了！！", 37, 2052002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.emotion(5, 5000);
                                                    cm.sendNormalTalk_Bottom("额！", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/omegaSector/small", 0, 1500, 0, 0, 20, 4, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#我说，差点就要被压扁了！", 37, 2052005, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#fs20#冒险勇士……#fs30##b变小了？！", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1000, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.gainExp(3668312);
                                                                                cm.forceCompleteQuest(3475);
                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
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
};