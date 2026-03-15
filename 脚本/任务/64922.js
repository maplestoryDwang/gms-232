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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 733, -225);
            cm.curNodeEventEnd(true)
        } else {
            if (status == a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("现在，在阿特利埃地下…正发生在着一些#b可怕的事情#k。\r\n能阻止这一切的人，#b只有你#k……!", 36, 9401071, 0, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("呼呼……你们现在正为#r紧急方案#k伤脑筋吧。", 36, 9401087, 1, 1)
                    } else {
                        if (status == a++) {
                            cm.sendNormalTalk_Bottom("你……你知道？", 36, 9401071, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我设置成在这种情况下启动后就离开了，所以那是理所应当的。\r\n杰斯先生，你以为我会乖乖离开吗？", 36, 9401087, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("可能#b赛恩#k这时候还在认真准备着再生产拟真机器人吧……", 36, 9401087, 1, 1)
                                } else {
                                    if (status == a++) {
                                        cm.sendNormalTalk_Bottom("#e别装糊涂了！", 36, 9401071, 1, 1)
                                    } else {
                                        if (status == a++) {
                                            cm.sendNormalTalk_Bottom("……？", 36, 9401087, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("现在正发生着一些更可怕的事情。\r\n#b赛恩#k产生了自我意识，正大肆生产着一些像#b兵器#k一样的智能机器人。", 56, 9401087, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("正准备向人类发动战争，并说要主宰世界。", 56, 9401087, 1, 1)
                                                } else {
                                                    if (status == a++) {
                                                        cm.sendNormalTalk_Bottom("哼，不可能。\r\n赛恩绝对不会有那种智慧以及能力的……", 36, 9401087, 1, 1)
                                                    } else {
                                                        if (status == a++) {
                                                            cm.sendNormalTalk_Bottom("是他自己学到的。他从你丢弃的拟真机器人残骸那里吸收了各种#b消极能量#k。", 36, 9401072, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("什么……你没骗我吧？", 36, 9401087, 1, 1)
                                                            } else {
                                                                if (status == a++) {
                                                                    cm.sendNormalTalk_Bottom("你去看看不就知道了……看看你做了什么好事……！", 36, 9401071, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("无名的绅士，快去终止#b赛恩#k的#r紧急方案#k吧。\r\n可以前往#b中央控制室#k，通过克拉尼亚#b终止赛恩#k。", 36, 9401072, 1, 1)
                                                                    } else {
                                                                        if (status == a++) {
                                                                            cm.sendNormalTalk_Bottom("我先和无名的绅士一起走了，匹比。那种程度的话，我也可以帮的上忙。", 36, 9401071, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("杰斯，太危险了。你这样的胆小鬼怎么能是现在的赛恩的对手？", 36, 9401072, 1, 1)
                                                                            } else {
                                                                                if (status == a++) {
                                                                                    cm.sendNormalTalk_Bottom("这个我必须要做，匹比。我莫名……觉得这是我的#b使命#k。\r\n或者就像赛恩说的那样……我的#b赎罪#k之路可能就是这个。", 36, 9401071, 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("这是我们大家的事情。\r\n制造拟真机器人，破坏……这是我们一起做的。", 36, 9401072, 1, 1)
                                                                                    } else {
                                                                                        if (status == a++) {
                                                                                            cm.sendNormalTalk_Bottom("你帮我在这里做些力所能及的事情吧。\r\n如果……如果我出了什么事……", 36, 9401071, 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("我们约定好的，你一定要开发出#b更像人类#k的智能机器人……你比我出色多了，不是吗？", 36, 9401071, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("别说这些胡话了。我马上就能回来。\r\n#h #，你好好看着他，别让这家伙又像上次那样犯傻。", 36, 9401072, 1, 1)
                                                                                                } else {
                                                                                                    if (status == a++) {
                                                                                                        cm.sendNormalTalk_Bottom("别担心，我们一定会成功阻止#b赛恩#k，平安归来的。", 56, 9401071, 1, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64922.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("多亏#h0#彻底清除了那些骇人的#b兵器机器人#k，我和克拉尼亚才能顺利进来。", 36, 9401071, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那等下在#b中央控制室#k见吧。", 36, 9401071, 1, 1)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                    cm.forceCompleteQuest(64922);
                    cm.dispose()
                }
            }
        }
    }
};