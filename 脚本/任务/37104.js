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
            cm.sendNormalTalk_Bottom("#face0#我看你不像这儿的人，你来混乱地带有什么事？\r\n该不是遭到免费观光诈骗了吧？", 36, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("额……？他怎么知道的……\r\n\r\n#b#L0# 他会读心术？#l\r\n#L1# 他是豪华观光的职员？#l\r\n#L2# 是刚才遇到的那只乌鸦告诉他的？#l#k", 56, 3004035)
            } else {
                if (status === a++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom("你会读心术？", 56, 0, false, true)
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom("你是豪华观光的职员吧！", 56, 0, false, true)
                        } else {
                            cm.sendNormalTalk_Bottom("是我刚才遇到的乌鸦告诉你的？", 56, 0, false, true)
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom("#face0#大家经常这么认为，其实都是误会。", 36, 3004000, true, true)
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom("#face0#你真会胡思乱想。", 36, 3004000, true, true)
                            } else {
                                cm.sendNormalTalk_Bottom("#face0#嗬，先前听说你被他们的幼稚把戏骗了，我还以为你是个傻子，\r\n看来也不是完全傻嘛。", 36, 3004000, true, true)
                            }
                        }
                    } else {
                        if (status === a++) {
                            if (selectionLog[2] == 2) {
                                cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                            } else {
                                cm.sendNormalTalk_Bottom("……不是吗？", 56, 0, true, true);
                                cm.dispose()
                            }
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你是不是想打开飞艇的门，徒手肯定是不行的。\r\n要是有什么#b尖锐的工具#k，倒可以从松动的接缝塞进去，然后靠敲打把它打开。", 36, 3004000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("（看样子他想帮忙。）", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline_Bottom("#face0#你去狩猎周围的铁豪猪，收集回#b大钉子#k吧？", 36, 3004000)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(37104, "");
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

function end(c, b, a) {
    if ("dir=off".equals(cm.getInfoQuest(37104))) {
        end1(c, b, a)
    } else {
        end0(c, b, a)
    }
}

function end0(d, c, b) {
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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -282, 532);
            cm.sendNormalTalk_Bottom("#face0#从缝隙塞进去……", 37, 3004000, false, true);
            cm.spawnMobLimit(2400330, 1, -869, 763, 1);
            cm.spawnMobLimit(2400330, 1, -363, 283, 1);
            cm.spawnMobLimit(2400330, 1, -847, 503, 1);
            cm.spawnMobLimit(2400330, 1, -812, 221, 1);
            cm.spawnMobLimit(2400330, 1, -1134, 221, 1)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier0", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(700)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier0", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(700)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier0", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(700)
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
                                        cm.setStandAloneMode(false);
                                        cm.sendNormalTalk_Bottom("#face0#成功了。", 36, 3004000, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("噢！！", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#去察看下内部。", 36, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#唉，货舱是空的。看来有人比我们先下手了。", 36, 3004000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("！！", 56, 0, true, true);
                                                        cm.updateInfoQuest(37104, "dir=off")
                                                    } else {
                                                        actionEnd(d, c, b, a)
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

function end1(d, c, b) {
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
        actionEnd(d, c, b, a)
    }
}

function actionEnd(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#偷得一点儿不剩。", 36, 3004000, true, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("要怎么做才能找回丢失的货物呢？", 56, 0, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你还是放弃吧。", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在荒蛮终点站这地方总是有东西不见。\r\n而且消失的东西是绝对找不回来的。", 36, 3004000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("为什么？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#因为偷来的东西肯定会被很快转手处理掉。\r\n毕竟这里整天都有来自世界各地的形形色色的人群来来往往。", 36, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#来访者的三分之一都是些无缘无故#b漂泊到此的过客#k，其余三分之一就是那些#b不法分子#k。赃物最终会随着他们一起被带到世界各地去，从此不见踪影。", 36, 3004000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("等等，那还有三分之一呢？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#自然是一些无缘无故四处漂泊的不法分子。", 36, 3004000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我建议你别跟豪华观光那帮人纠缠不清，悄悄离开这里吧。", 36, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askMenu_Bottom("（怎么办？）  \r\n\r\n#b#L0# 放弃。#l\r\n#L1# 不能放弃。#l", 56, 3004035)
                                                } else {
                                                    if (status === a++) {
                                                        if (d < 1) {
                                                            cm.sendNormalTalk_Bottom("#face0#你做了明智的选择。", 36, 3004000, false, true);
                                                            cm.dispose()
                                                        }
                                                        cm.sendNormalTalk_Bottom("我不能放弃。", 56, 0, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#为什么？", 36, 3004000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askMenu_Bottom("因为……\r\n\r\n#b#L0# 总得有人担起责任来。#l\r\n#L1# 被豪华观光扣留的塞妮娅会有麻烦。#l\r\n#L2# 事情越来越有趣了。#l", 56, 3004035)
                                                            } else {
                                                                if (status === a++) {
                                                                    if (b == 0) {
                                                                        cm.sendNormalTalk_Bottom("总得有人担起责任来。", 56, 0, false, true)
                                                                    } else {
                                                                        if (b == 1) {
                                                                            cm.sendNormalTalk_Bottom("那样一来，少女会陷入困境。", 56, 0, false, true)
                                                                        } else {
                                                                            cm.sendNormalTalk_Bottom("事情越来越有趣了。", 56, 0, false, true)
                                                                        }
                                                                    }
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3004000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#看来这里又多了一个傻瓜。", 36, 3004000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#你都这么说了，我就不得不出马了啊。", 36, 3004000, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("嗯？你刚才不还说绝对找不到吗……", 56, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#找出别人找不到的东西……", 36, 3004000, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0##fs18#正是#b侦探#k的工作。", 36, 3004000, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.forceCompleteQuest(37104);
                                                                                                cm.gainExp(28462236);
                                                                                                cm.gainItem(4036490, -50);
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
};