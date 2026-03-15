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
            cm.sendNormalTalk_Bottom("匹比，你快说需要什么？", 56, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我需要很多#b拟真机器人配件#k。越多越好。", 36, 9401072, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("阿特利埃都那样了……要去哪里找呢？", 56, 9401072, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("在这森林附近，有几种赛恩制造的机械还在那里徘徊。\r\n那些家伙的#b配件#k应该会有很大帮助的。", 36, 9401072, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我马上去！", 56, 9401072, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(64930, "");
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64930.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk_Bottom("匹比……！我回来了。", 56, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("很好，那现在就启动杰斯的#r重生方案#k。\r\n杰斯坏掉的部位就用#b拟真机器人配件#k代替吧！", 36, 9401072, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b鲁姆#k，我需要你的帮助。快把这些配件的断面打磨一下！", 36, 9401072, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("切，真是个麻烦精……！好了好了，马上开始行动……！", 36, 9400434, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(5200);
                                cm.effect_Text(["#fn黑体##fs18#稍后……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0])
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
                                            cm.sendNormalTalk_Bottom("#face0#不……不行……\r\n#r不太够#k……这些还是不够……", 36, 9401072, 0, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("这就是你找来的全部配件？！", 36, 9400434, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("是的，没有了……但我会再去倒塌的工厂内部寻找的……！", 56, 9401072, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("不行……没有时间了……再这样下去，杰斯会死掉的……", 36, 9401072, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face3#呜……呜呜……杰斯……\r\n这个……傻瓜……这个像傻瓜一样善良的家伙……我不该……让你去的……！", 36, 9401072, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("呜呜……呜呜……这个家伙……呜……", 36, 9400434, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("匹比，等一下！\r\n#b我们说不定可以帮到他。#k", 36, 9401073, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("赛比亚……？你们怎么……", 36, 9401072, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("现在需要的不是#b拟真机器人的配件#k吗？", 36, 9401077, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("你们是不是忘记了……我们就是#b拟真机器人#k啊。", 36, 9401078, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("你……你们……", 36, 9401072, 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                        cm.eventSKill(0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.forceCompleteQuest(64930);
                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                                        cm.gainItem(4036645, -100);
                                                                                        cm.gainItem(4036644, -100);
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
};