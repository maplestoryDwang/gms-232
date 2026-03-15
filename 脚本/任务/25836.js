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
            cm.sendNormalTalk("你获得力量还没多久，还不太适应吧？我给你讲讲几种技能，你好好听。", 4, 3000018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好，快说吧。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我要讲解的是新手技能中几种和攻击无关的技能，先说说都有哪些吧。", 4, 3000018, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("第一个技能是#i3800342#白日梦。使用该技能可以移动到我#e特别#n准备的据点。", 4, 3000018, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("特别？据点？那又是什么东东？", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("呵呵，你要是想知道，就亲自用技能去看看。接下来是#i3800344#装扮技能，使用该技能可以自由转换变身前、后的效果，即便在变身前尝试使用其他技能，也会先行使用装扮技能，你也没必要觉得吃惊。", 4, 3000018, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……", 16, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("看来你被我的介绍打动了呢。其他那些攻击技能你亲自使用后会更快了解，我的说明就到此结束吧。", 4, 3000018, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(25829);
                                            cm.sendNormalTalk("为了正义美少女英雄爆莉萌天使能尽情展现活力，你还得知道一点。", 4, 3000018, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("……是什么？", 16, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("基本上来说，你的力量虽需要补充，但在耗完之前可以自由使用。不会小家子气地需要什么魔力或精气。", 4, 3000018, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("你找我说话是为了炫耀自己吗？", 16, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("当然不是。我是想告诉你，你需要其他的东西。这个真的很重要，你要仔细听。", 4, 3000018, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("哦，说吧。", 16, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("首先，技能里有一种叫#e#b灵魂再生技能#n#k。这种技能可以把你本身的力量精华发挥出来，造成十分强力的攻击。但使用一次后，就不能再次使用了。", 4, 3000018, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("什么？！就只能用1次……", 16, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("你该养成听完别人说话的好习惯，下面才是关键。使用一次后，先再次使用的办法很简单。只要#e#b重生#n#k成功即可。", 4, 3000018, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("重生？那是什么？", 16, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("你使用的所有攻击技能都带有重生成功率。即，每次你使用技能攻击怪物时，都会按照相应概率确认是否能成功重生。通过重生，之前无法使用的所有灵魂再生技能就能再次使用啦。", 4, 3000018, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("呃，好复杂。要是所有概率都失败，不就还是不能用嘛？", 16, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("别忘了，攻击技能中有一些不是灵魂再生技能。你可以使用#e#b释世书、粉粉旋风、力量召唤#n#k等技能成功重生。", 4, 3000018, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("嗯，关键在于使用各种各样的技能来不断成功重生啊？", 16, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("嘿嘿，你脑子还不算差嘛。", 4, 3000018, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("什么！你别看不起人！", 16, 0, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("咳咳，别激动。我只是感叹一下。还有件事得告诉你。是关于#e#b亲和#n#k系列的。这些技能分为各等级，全都是能提高和我的亲密度的重要技能。精通这些技能的话，重生成功率会极速上升，所以你最好先提升这些技能。", 4, 3000018, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("说了这么多，能告诉你的差不多就这些了。今后你要有什么不清楚的，就点击旁边灵魂再生UI界面上的问号吧。我把核心内容都整理好放在里面了。", 5, 3000018, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.forceCompleteQuest(25836);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25836.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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