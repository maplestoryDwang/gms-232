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
            cm.askYesNo_Bottom("这次我会送你到#b沼泽地带#k，\r\n那地方倒不是特别有什么问题，寻找失踪者的同时也能顺带着修炼。\r\n希望你能够成长到#b50级#k再回来。", 36, 1531004)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你会不会缺回城卷轴啊？为了以防万一，我先给你几个。", 37, 1531004, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(22783, "");
                    cm.gainItem(2030055, 5);
                    cm.dispose();
                    cm.warp(103030000, 8, false)
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
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 118, -323)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 83, -415);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("我好饿……可因为蛇，我根本没法动了。", 37, 1531049, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("我来救你了，你可以放心，\r\n现在我就送你到安全的地方。", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#b东边的棚屋#k里有我的弟弟，\r\n先救他吧……\r\n求你了。", 37, 1531049, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("我会很快找到你弟弟送他回去的，你先走。", 37, a, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("是#b东边的棚屋#k啊。", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.forceCompleteQuest(22794);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 182, -353, 1, 0, 1, 1, 0]);
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
                                                            cm.updateInfoQuest(22783, "NpcSpeech=15310491");
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
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 270, 154)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 164, 101);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("是……是人，救命啊。", 37, 1531050, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("我姐姐……出去找吃的，到现在还没回来……\r\n她好像出事了……", 37, 1531050, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("你姐姐已经先行被送到安全的地方去了，你放心。\r\n我也送你过去。", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("谢……谢谢……", 37, 1531050, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.forceCompleteQuest(22795);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 341, 180, 1, 0, 1, 1, 0]);
                                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("这个地区的失踪者似乎也都找到了。", 37, a, false, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("是先回亚乌那里……还是说再继续修炼。", 37, a, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("不是说了嘛，到#b50级#k再回去吧。", 37, a, true, true)
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
                                                                    cm.updateInfoQuest(22783, "NpcSpeech=15310491/15310502");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22783.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("下一个地方……是#b列娜海峡#k啊。", 37, 1531004, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(22783);
                cm.gainExp(23180);
                cm.dispose()
            }
        }
    }
};