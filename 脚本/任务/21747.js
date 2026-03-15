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
            cm.askAcceptDecline("没想到在数百年的岁月之后，英雄的后裔又重新出现了……也不知道对冒险岛世界是福还是祸……怎样都无所谓了。好吧……我告诉你有关武陵封印石的事情。", 0, 2091007)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("武陵的封印石所在的地方叫做封印的寺院。那里的入口被隐藏在武陵寺院内。你去仔细观察武陵寺院入口处熊猫提着的灯盏。如果能从中找出#b刻有入口字样的灯盏#k，就可以进入封印的寺院了。暗号是#b道可道非常道#k。", 1, 2091007, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("说不定那个叫影子武士的人已经到了封印的寺院。不过，他应该还没有把东西偷走。不知道是不是在等我……不过，相比我而言，英雄的后裔去会会影子武士可能更合适呢。", 1, 2091007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("希望你能竭尽全力阻止影子武士。英雄的后裔啊……继承英雄过去的光辉事业吧。", 1, 2091007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b（他似乎误以为我是英雄的后裔了。他说让我继承英雄过去的光辉事业……是什么意思呢？先阻止影子武士，然后再问他好了。）#k", 3, 2091007, true, false)
                        } else {
                            if (status === a++) {
                                cm.npc_LeaveField("oid=245715");
                                cm.dispose();
                                cm.forceStartQuest(21747, "");
                                cm.warp(925020000, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21747.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("成功打败了#o9300351#吗？表情怎么这么凝重……难道说你失败了……", 0, 2091007)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("原来是这样，#m250000000#的封印石最终还是被抢走了……很遗憾，不过也没办法。我现在也不明白英雄们为什么要把封印石交给#m250000000#。", 9, 2091007, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你说英雄把封印石交给了#m250000000#？", 3, 2091007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是的……你还不知道吗？#b很久很久以前，英雄们把封印石交给了#m250000000#。长老制作了#m925040100#并慎重看管起来#k。", 9, 2091007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……英雄……", 3, 2091007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这些事情，现在很少有人知道了。事实上，#b封印石没有了，对#m250000000#而言到底有没有影响，谁也不知道#k。只不过因为是英雄交给我们保管的东西，所以我们才看得很重。", 9, 2091007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b（英雄把封印石交给了#m250000000#……）#k", 3, 2091007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("把英雄交给我们的东西给弄丢了，虽说很可惜，但有英雄的后裔在，我们也觉得心里踏实一些。请继续完成英雄未尽的事业。", 9, 2091007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b（#m250000000#封印石也被抢走了……得去#p1002104#问问。）#k", 2, 2091007, true, false)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=245715");
                                                cm.dispose();
                                                cm.forceCompleteQuest(21747);
                                                cm.gainExp(52793);
                                                cm.warp(925020000, 2, false)
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