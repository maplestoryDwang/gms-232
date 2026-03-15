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
            cm.npc_LeaveField("oid=15042");
            cm.npc_LeaveField("oid=15043");
            cm.npc_LeaveField("oid=15045");
            cm.npc_LeaveField("oid=15047");
            cm.sendNormalTalk("哼，有什么事吗？", 0, 2300002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有什么可以帮你的吗？", 16, 2300002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("帮我？是吗？你是#p2154009#的那个……是新来的朋友啊。", 0, 2300002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你认识#p2154009#吗？", 16, 2300002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的，他曾经和我在同一个研究室中研究生命工程学。\r\n他是个非常了不起的人。除了生命工程学之外，他在机械工程学和化学等很多领域都表现出了卓越的才能。", 0, 2300002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("可惜他没能把那种才能用在正道上，经常做一些危险的研究，最终被学术界除名，被赶了出去。在那之后一直没有消息，没想到他竟然加入了黑色之翼，在那里进行研究……。", 0, 2300002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("听说#p2154009#费尽心血制造出的最强兵器就是你。他在离开实验室之前一直埋头研究的内容应该也与此有关……但是你现在在这里，说明他那无聊的实验最终失败了，哈哈哈。", 0, 2300002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("身为科学家，掌握着世界的真理，应该对这个世界负起责任才对。科学的力量应该用来促进人类的发展，而不应该用来满足个人的私欲。不明白这一点的话，就算被人称为天才也没有用。哼，那个人已经陷得太深了。", 0, 2300002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我这里暂时没什么事。你走吧。", 0, 2300002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline("这个人好像对格里梅尔非常了解。而且好像非常讨厌我……也许就像鲁提说的那样，我还无法理解人类的全部感情，所以才会有这种感觉。要问问是不是真的吗？", 16, 2300002)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(23660, "");
                                                    cm.sendNormalTalk("哼，格里梅尔制造的破坏兵器……我无法认可。", 0, 2300002, false, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23660.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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