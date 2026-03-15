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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("什么呀？这家伙怎么还在哭？是因为脸长得太可怕了吗。", 41, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不能对幼龙说这么粗暴的语言！啊啊……我都快把它哄差不多了……看到你们的脸，它又开始哭了。你们到底要欺负它到什么时候？这孩子被你们给吓得不轻啊。", 33, 2411010, true, true);
                cm.gainSkillBuff(100001263)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们没有欺负它……只是把它#b打趴下了而已#k。", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……通常这个就叫做欺负。唉，不行了！要让它镇静点就该让他睡觉。该怎么办……使用睡眠魔法，说不定它会做噩梦。对了，还是唱#b摇篮曲#k吧？", 33, 2411010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("摇篮曲？", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这么凶恶的家伙，还听摇篮曲？真心不般配啊。", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不般配？是让你们唱摇篮曲。", 33, 2411010, true, true);
                                    cm.gainSkillBuff(100001263)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我们？", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("是啊。因为这孩子是被你们吓到的，所以你们唱摇篮曲，说不定它就不再害怕你们了。你们两个声音听起来蛮好听的，唱个摇篮曲也应该很好听吧。怎么？不会唱吗？", 33, 2411010, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("也不是不会……", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b(没办法了，虽然情况有点奇怪，但是为了寻找圣物，只能唱首歌了。知道了吗？我唱的时候你跟着唱就好了。)", 41, 2400005, false, true);
                                                        cm.gainSkillBuff(100001263)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#b(嗯……)", 41, 2400006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/sining/0", 1, 1, 1, 0, 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/sining/0", 1, 0, 0, 0, 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
                                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                                                                            cm.gainSkillBuff(100001263)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("抱歉，我向你们道歉……让你们唱歌是我的失误……宝宝，我真的很抱歉呢……", 33, 2411010, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#face0#为，为什么道歉？！我们的歌怎么了？！我觉得还可以？！", 41, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("#face0#你为什么不说话！你不是唱得很好嘛！", 41, 2400005, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.gainSkillBuff(100001263);
                                                                                                cm.sendNormalTalk("……你们自己觉得好就行了。不过现在问题越来越严重了，这孩子一直在哭，体力也逐渐下降了……但是没办法哄它。该怎么办……？", 33, 2411010, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("没办法了，原本想给它唱首歌的，但事已至此只能给他演奏乐器了。你们是找这个宝宝有事情吧？", 33, 2411010, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("那么，就去趟#b神木村#k拿回来#b乐器#k。听说神木村的#b#p2411001##k非常喜欢音乐，找到#p2411001#肯定就能拿到乐器。那么就拜托你们了。", 33, 2411010, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.updateInfoQuest(40056, "");
                                                                                                            cm.forceStartQuest(40056, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40056.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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