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
            cm.sendNormalTalk_Bottom("#face0#抱歉久等了。", 36, 3003759, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#怪物们一拥而上占领了舰炮方向的甲板。置之不理后舰炮全被毁掉了。", 36, 3003759, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#请你快去支援。\r\n救出没来得及撤离的炮兵，让他们可以重新开始炮击。", 36, 3003759)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#右边的传送口。拜托了。", 36, 3003759, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(35810, "");
                            cm.dispose()
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35810.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#谢谢！你真是帮了我们的大忙。", 36, 3003759, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#但是#h0#，刚才你去战斗的时候，南哈特发来了消息。", 36, 3003759, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#他说核心的解读工作完成了，让你马上回到白色之矛。", 36, 3003759, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#汉斯似乎有话要说。", 36, 3003759, true, true)
                    } else {
                        if (status === a++) {
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(true, false, true);
                            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/ship2", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(200)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0##h0#走了吗。现在可以启动作战了。", 37, 3003672, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#尽可能地接近敌人，朝其心脏部位发动炮击……\r\n这叫哪门子的作战？", 37, 3003677, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#女皇到底怎么想的？她从来没下过这么鲁莽的指令啊？", 37, 3003676, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#应该自有她的理由吧。我们只管听命行事。", 37, 3003672, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#（嗯，她这样决定肯定是有什么理由的……）", 37, 3003672, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.dispose();
                                                                cm.warp(993070078, 0, false);
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
        }
    }
};