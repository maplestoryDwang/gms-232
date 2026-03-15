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
            cm.forceStartQuest(40050, "");
            cm.updateInfoQuest(40050, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40050.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("到冒险岛世界的感觉怎么样？是不是没有想象中那么好吧？那是因为两位还被束缚在这个镜世界中。换句话说两位就如同躯壳。", 33, 2400000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("理由很简单。两位是否记得？在两位觉醒的瞬间，黑魔法师和军团长把神殿里的#b女神之泪#k给破坏掉，并且把碎片扔到了很远的地方。", 33, 2400000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("女神之泪是女神给两位留下来的时间之力结晶体。要获得女神之泪的时间之力，才能真正成为时间超越者，因此敌人们才这样做的。", 33, 2400000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("可幸运的是，现在，镜世界的束缚处于非常微弱的状态，就算只收集了一部分的女神之泪碎片，也足以从这个镜世界中逃出去。", 33, 2400000, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("呵呵，所以结论是……两位要一起行动。因为两位的力量还不够，还无法发挥超越者的能力。所以，要先找到女神之泪才能找回时间之力。", 33, 2400000, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("虽然我们很希望能帮助两位……但我们也只是个神官而已，当时也没有想到会发生这种事情……而且我们也不是拥有战斗能力的人。", 33, 2400000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("况且，我们神官是拥有很长寿命的人，#但这个寿命也只限制在镜世界中#k，所以也只能暂时的出去一下而已。因此那是不太可能的。", 33, 2400000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("因此，两位要亲自去寻找女神之泪才可以。呵呵。", 33, 2400000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("怎么说呢，我和我需要互相帮忙？呜哇！这么听起来，是不是觉得有很强的自立能力？", 33, 2400007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("……很抱歉，没能帮到两位。", 33, 2400008, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#face11#黑魔法师、军团长、#p2410000#他们肯定会来妨碍我们吧？如果不打算妨碍我们，当初也不会创造这个镜世界……也不会把我们给关起来……不对，不是妨碍，而是要想方设法抓住我们。", 41, 2400005, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("本来就够头痛了，我们的力量还被一分为二了？这样我们能有希望吗？我估计还是得让我吸收这家伙的能力才行吧。", 41, 2400005, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("…………", 41, 2400006, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("刚才我也说过了，我们也是第一次碰到两位超越者的情况，也不知道如何将两位的力量集中在一起。万一有个什么闪失，也不知道会有什么后果。所以结论只有一个，两个人必须得同时行动。", 33, 2400000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("哈……真是的。一定要带着这个累赘跟敌人战斗吗。", 41, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("是累赘是宝物现在还无法断定，呵呵。#p2400008#神官也说过，两位的力量是相同的，这个情况反而有可能会更加有利。变成两个人了，就能轻松地完成一个人做不了的事情也说不定哦？", 33, 2400000, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#b(#p2400000#的话也不无道理，比起一人，两个人可以想到更多的方法。万一碰到了危机，还可以把这家伙拿出来做挡箭牌……但问题是这家伙得乖乖听话才行啊。)", 41, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("好吧，反正我们也没有什么选择的余地，只能两个人一起行动了。但是……#p2400006#你一定要听我的指挥，万一你把情况变得更糟了，那我绝对饶不了你。", 41, 2400005, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("…………", 41, 2400006, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("#face4#放心吧，比起不懂世事的你，我可以更加自如地面对，只要听我的话就绝对不会有危险的。", 41, 2400005, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("Kite/DarkAura", 100);
                                                                                                            cm.sendNormalTalk("#face1#感觉……好像是一场骗局似的？#p2400006#，你该不会是被骗过去了吧？！", 33, 2400007, false, true);
                                                                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/handshake/0", 1, 1, 1, 0, 0)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("你别乌鸦嘴……我们只要监视好就行了。", 33, 2400008, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("天呐天呐，两位神之子真的是俊朗貌美啊。我#p2400000#感到无比的幸福，嘿嘿。", 33, 2400000, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/handshake/0", 1, 0, 0, 0, 0)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.updateInfoQuest(41911, "slot=clear");
                                                                                                                            cm.playerMessage(-1, "贝塔加入了，背包增加了。");
                                                                                                                            cm.forceCompleteQuest(40050);
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.updateInfoQuest(25980, "normal=#2002#;hard=#");
                                                                                                                            cm.gainExp(895200);
                                                                                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
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
    }
};