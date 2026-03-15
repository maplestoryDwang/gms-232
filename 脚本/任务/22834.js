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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("这段时间魔法协会一直在对陷坑展开调查，\r\n自从你的朋友被抓走之后，陷坑突然就变样了。", 37, 1531012, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("不仅力量增强了，而且形状和性质也改变了。", 37, 1531012, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#该死……\r\n那个白头发的家伙到底想要什么？", 37, a, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("现如今我好像也能大致猜到一点了，\r\n那便是……整合世界。", 37, 1531012, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face0#整合世界？", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === b++) {
                                    cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/3eaworld1", 0, 1000, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("原本每个世界被次元边界分割开来，大家是按照各自的规则在运转着的。\r\n但如果满足了某种特定的条件……", 37, 1531012, false, true)
                                    } else {
                                        if (status === b++) {
                                            cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("2", "Map/Effect2.img/kinesis/3eaworld2", 0, 1500, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("越过次元边界，世界就会相互吸引。\r\n这种时候，陷坑就可以起到了这一作用。", 37, 1531012, false, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face10#相互不同的世界合成一体……那之后会发生什么事情呢？", 37, 1531001, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("这就不得而知了，\r\n之后到底会发生什么事情，就只有神知道了吧。", 37, 1531012, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("2", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#这么说来我的力量的来历应该也和此事有关吧。", 37, a, false, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk_Bottom("当圆和圆无限接近的时候，一开始就会形成唯一的一个交接点。\r\n我估计那就应该是你的来历吧。", 37, 1531012, true, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("#face10#！这么说来，凯内西斯，你的能力之所以会违反所有的物理规则也就能说得通了。", 37, 1531001, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("#face10#白魔法师出于某种目的，为了合并两个世界，开启了通道……", 37, 1531001, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#……随着两个世界的接近，就产生了异常现象。\r\n而这#r第一个变异#k的就是我吗。", 37, a, true, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.forceStartQuest(22834, "");
                                                                                            cm.forceCompleteQuest(22834);
                                                                                            cm.gainExp(186300);
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.eventSKill(0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22834.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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