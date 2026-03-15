var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.askYesNo_Bottom("这次我把你送到金海滩去。\r\n去了之后，最好帮着解决一下那里的问题。\r\n\r\n#b（※ #r金海滩#b是特殊主题副本。提供#r59级#b以下和勇士等级对应的怪物和任务。）", 36, 1531004)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("金海滩？感觉挺不错的啊，难道是类似地中海之类的地方？", 37, a, false, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("海边是个美丽的地方，\r\n但是怪物也比从前更厉害了。", 37, 1531004, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("为了防止你去的路上肚子饿，我帮你做了个料理，\r\n这是#b火独眼兽尾巴卷#k，饿的时候吃吧。", 37, 1531004, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face2#……火独眼兽……", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.forceStartQuest(22782, "");
                                cm.forceStartQuest(2950, "");
                                cm.forceCompleteQuest(2950);
                                cm.gainExp(52270);
                                cm.gainItem(2010044, 30);
                                cm.dispose();
                                cm.warp(120040300, 0, false)
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 676, -269)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 631, -317);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("是失踪者，晕倒了呢……没事吗？", 37, a, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("哇呜……哇呜……好暖和啊……", 37, 1531044, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face2#……", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("咕~咕~呼呼。", 37, 1531044, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face2#好梦~", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.forceCompleteQuest(22792);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 722, -269, 1, 0, 1, 1, 0]);
                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === b++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                            } else {
                                                if (status === b++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.setStandAloneMode(false);
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.updateInfoQuest(22782, "NpcSpeech=15310441");
                                                            cm.dispose();
                                                            cm.warp(120041400, 3, false)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage1(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 385, -110)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 366, -196);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("对不起，对不起。", 37, 1531048, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("对不起我吃了章鱼小丸子，对不起我吃了章鱼的生鱼片。", 37, 1531048, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("我已经来救你了，你现在可以放心了。", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("这是地狱啊，\r\n肯定是我生前吃了太多的章鱼，所以才来到了章鱼地狱。", 37, 1531048, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face2#啊，是~来，走吧。", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("额啊！", 37, 1531048, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.forceCompleteQuest(22793);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 453, -160, 1, 0, 1, 1, 0]);
                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("金海滩的失踪者好像已经全都找到了，\r\n得结束手上的事情，回去了。", 37, a, false, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.setStandAloneMode(false);
                                                                    cm.eventSKill(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.updateInfoQuest(22782, "NpcSpeech=15310441/15310482");
                                                                    cm.dispose();
                                                                    cm.warp(101020400, 2, false)
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22782.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("辛苦了，我会去其他地方看看，稍等一下。", 37, 1531004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("其他地方……原来是#b沼泽地带#k啊，得#b40级#k以上才行。", 37, 1531004, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(22782);
                    cm.gainExp(17100);
                    cm.dispose()
                }
            }
        }
    }
};