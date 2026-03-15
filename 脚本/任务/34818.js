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
            cm.sendNormalTalk_Bottom("#face3#救命啊！有人在吗！？", 37, 3001310, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#希娜！莫里奥！！！！", 37, 3001354, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#你……你是谁……？", 37, 3001310, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#那个……", 37, 3001310, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#还闲聊什么啊！先过来帮忙！", 37, 3001311, true, true, 1);
                            cm.forceStartQuest(34818, "");
                            cm.dispose()
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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
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
                        cm.sendNormalTalk_Bottom("#face2#谢啦伊利温！！不过你到底怎么回事？那个水晶是什么？", 37, 3001310, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#是阿加特大人的遗物古代水晶。因为释放的力量太过强大，我暂时把力量减弱了一些。", 37, 3001354, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#遗物……？你说遗物！？", 37, 3001310, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face4#……(向莫里奥和希娜说明情况。)", 37, 3001354, false, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#怎么可能……阿加特大人……竟然去世了……", 37, 3001310, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#……", 37, 3001311, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3#虽然不知道我能不能帮上忙……但我也要一起去！", 37, 3001310, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face4#莫里奥，这是我的使命。绝不能让你也因我陷入危险之中！", 37, 3001354, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#可是……", 37, 3001310, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face4#先离开这吧。再待在这，我们就危险了！快，大家快走！", 37, 3001354, true, true, 1)
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
                                                                                    cm.setStandAloneMode(false);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(34818);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.updateInfoQuest(34818, "exp=1");
                                                                                            cm.gainExp(17497);
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.setPartner(true, 3001310, 80002331, 0);
                                                                                            cm.setPartner(true, 3001311, 80002332, 0);
                                                                                            cm.OnStartNavigation(940202032, 0, "pt_l", 0);
                                                                                            cm.getPlayer().levelUp();
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
};