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
            cm.sendNormalTalk_Bottom("嗯……有的，\r\n他们似乎，分散到了许多地区。", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("你能先告诉我比较近的地方吗？\r\n我这性子比较急。", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("你去#b妖精学院艾利涅#k看看。", 37, 1531004, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face0##b艾利涅#k？我听说那边好像是有点什么问题。\r\n#b潘喜#k曾经让我帮忙，超能力者可以一并把那个事情也解决了。", 37, 1531003, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#b艾利涅#k原本是个对外人很警惕的地方，小心点。", 37, 1531004, true, true)
                        } else {
                            if (status === b++) {
                                cm.askYesNo_Bottom("我送你一个#b回城卷轴#k。回来的时候，可以用上它。\r\n如果可以，我现在马上就送你过去。\r\n\r\n#b（※ #r妖精学院艾利涅#b是特殊主题副本。提供#r59级#b以下和勇士等级对应的怪物和任务。）", 36, 1531004)
                            } else {
                                if (status === b++) {
                                    cm.forceStartQuest(32147, "1");
                                    cm.forceStartQuest(22781, "");
                                    cm.gainItem(2030055, 5);
                                    cm.dispose();
                                    cm.warp(101030000, 1, false)
                                }
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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 2, 245);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 60, 300)
        } else {
            if (status === b++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("呜呜呜呜，救命啊，这里到底是哪里。", 37, 1531053, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("哎哟，找到了一个人呢，杰说得没错呢。\r\n你是#b大都市#k人吧？", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("哦！是谁？救救我吧！\r\n这外面有奇怪的书在飞！", 37, 1531053, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("这里是那里吧？那个叫哈利波特的主题公园！\r\n是那里没错吧？！", 37, 1531053, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face2#没错，那现在我会送你去会说话的狼那里，\r\n你先过去。", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("啊！", 37, 1531053, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.forceCompleteQuest(22790);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 129, 298, 1, 0, 1, 1, 0]);
                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                cm.sendNormalTalk_Bottom("也许还有失踪者，再继续找找看吧。", 37, a, true, true)
                                            } else {
                                                if (status === b++) {
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
                                                                    cm.updateInfoQuest(22781, "NpcSpeech=15310531");
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

function stage1(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
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
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 320, 0)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 228, -43);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("洋葱它！洋葱它！！", 37, 1531054, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face2#第二个~找到了。", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("洋葱它居然会走？！！这是做梦吗？应该是做梦！", 37, 1531054, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("我可不是因为害怕才哭的！\r\n都是因为洋葱，辣着我眼睛了！", 37, 1531054, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("来，走吧~", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("额啊！", 37, 1531054, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.forceCompleteQuest(22791);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 378, 0, 1, 0, 1, 1, 0]);
                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("艾利涅的失踪者好像已经全都找到了，\r\n得结束手上的事情，回去了。", 37, a, false, true)
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
                                                                    cm.updateInfoQuest(22781, "NpcSpeech=15310531/15310542");
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

function stage2(e, d, c) {
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
            cm.dispose()
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
            cm.sendNormalTalk_Bottom("果然和大家的猜想一样……陷坑的失踪者在冒险岛世界。", 37, 1531004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("下一个地方……是#b金海滩#k吗……", 37, 1531004, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(22781);
                    cm.gainExp(12920);
                    cm.dispose()
                }
            }
        }
    }
};