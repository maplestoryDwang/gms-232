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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40307.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("#face11#你是……#p2440003#？", 41, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#p2410008#！！果然你在这里！", 33, 2440003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face1#放了他们！", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face2#别误会！我不是想抓他们来威胁你！我只是……想和你谈谈。", 33, 2440003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11#谈什么？我们之间还有什么好谈的吗？", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face2#我……真的不明白，为什么你会被追杀。上级说你是叛徒，但你为什么会背叛……上级也没有详细地说明……", 33, 2440003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face2#其他骑士们其实也有很多不满，因为他们都知道你的强大。他们也觉得自己的伤害越来越大。", 33, 2440003, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face2#我说，#p2410008#。如果我被上级发现和你这么聊天……我肯定不会以被惩罚收场。因为我的地位也比以前高了很多，虽然没有做过什么……", 33, 2440003, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("但是，我还是很想和你谈谈。因为……我很希望你能回到骑士团。", 33, 2440003, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face11#哈？我会回去？", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("不是让你回来！我是说……我是想说，让你回来是希望你能来改变现在的骑士团。", 33, 2440003, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#face7#你，难道要谋反……", 41, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face2#不是谋反！只是……如果是上级错误的话，我认为应该纠正错误才对，仅此而已。", 33, 2440003, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("这么想的人不仅仅是我。骑士团里最强的就是你，如果你能回来的话，他们就会更加有信心了。我们一起……#b改变影子骑士团#k吧？", 33, 2440003, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("你也没必要马上回答！但是，希望你能好好考虑，我这个提议对你来说并没有什么坏处。", 33, 2440003, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("我会把他们放回武陵的，当初……他们就不是我的目的。", 33, 2440003, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("如果你决定好了，我们就在这里见面吧。", 33, 2440003, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(40307);
                                                                                        cm.forceCompleteQuest(40932);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.gainExp(12440000);
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