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
            cm.sendNext("到底是怎么回事？不久前房子前面出现了一个长得很奇怪的机器人，还有一个男人。机器人发出哔哔的声音，那个男人在那里卖吃的东西。\r\n\r\n#b#L0#他们都是我派来的。#l", 1032205)
        } else {
            if (status == a++) {
                cm.sendNext("你吗？为什么？\r\n\r\n#b#L0#现在我要做的事情非常危险，可能会给其他人造成伤害。为了不让你受伤，我事先采取了一些措施。今后你就用不着去很远的地方买东西了。从那个人那里什么东西都能买到。#l", 1032205)
            } else {
                if (status == a++) {
                    cm.askAcceptDecline("哎呀，那你应该早说嘛。把我吓了一跳。", 1032205)
                } else {
                    if (status == a++) {
                        cm.forceStartQuest();
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25643.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("啊？！幽，幽灵……？！哇啊哇啊！", 0, 1032205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("喵呜！幽灵来啦！！", 4, 1032206, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……夜光法师。", 4, 1032210, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("拉尼娅，别害怕。他不是幽灵……嗯，说是幽灵也没错，不过不是坏幽灵。", 2, 1032205, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("夜光法师！为什么要把我说成幽灵？初次见面，我叫飞鱼丸。我和他是同门。", 4, 1032210, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊，你好。你真的不是幽灵吗？", 0, 1032205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这是长久的修炼结果，属于超出死亡界限的状态。和幽灵是不同的哦。我要留在这里，保护拉尼娅你。", 4, 1032210, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("这样啊……啊？这是怎么回事，夜光法师？", 0, 1032205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("就是话里的意思。我知道你会很惊讶，但请你理解一下好吗？", 2, 1032205, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("夜光法师都这么说了，那好吧……不过，佩妮你介意吗？", 0, 1032205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("哼，如果他敢欺负拉尼娅，我就咬他喵。", 4, 1032206, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("别担心，喵大人。好久没见过说话的猫了。", 4, 1032210, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("嗯，哼。叫我喵大人也没用喵！我确实是很聪明喵。", 4, 1032206, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("好吧，连佩妮都不介意了，那我们就一起生活吧。飞鱼丸先生。", 0, 1032205, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("请直接叫我飞鱼丸吧。我可以叫你拉尼娅吗？", 4, 1032210, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("好的，飞鱼丸。夜光法师又要走了吗？", 0, 1032205, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("嗯，不过我会时常回来看你的。", 2, 1032205, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("嗯，如果你回来得太晚，我就不给你开门哦。", 1, 1032205, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceCompleteQuest(25643);
                                                                                    cm.gainExp(20680);
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
};