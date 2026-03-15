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
            cm.sendNormalTalk("你好？我找你来，是有重要的事情。不知你知不知道，我们接到了报告，说#p2154009#还在找你。", 4, 2300002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这段时间，不知道什么原因，除了名叫#p2159391#的追踪者之外，没有其他人在追踪你。但是这次他们好像向黑色之翼手下的一部分人下达了追踪你的指令。之前你的事情在黑色之翼内部一直是个秘密，他们也许觉得这样无法抓到你，所以改变了方法……", 4, 2300002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然到目前为止，在黑色之翼内部好像只有少数成员知道你的存在。但是这样下去的话，你迟早会被他们抓住。所以现在研究所的人正在为你制作新的武器……我反对把它交给你。你知道为什么吗？", 4, 2300002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("因为我不是人类？", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("当然不是。", 4, 2300002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那是因为我是#p2154009#制造的？", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("也不是。我不是不相信你，而是不相信我自己。如果极力追求真理，谁也不敢保证自己内心不会产生和#p2154009#一样的欲望。不光是我，其他人也一样。虽然动机很单纯，但大家都是学者，谁都会拥有这样的欲望。", 4, 2300002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("科学家必须为自己的好奇心导致的后果负责。因此我无法轻易决定是否将那种强大的力量交给你。\r\n为了知道我们该不该把那个东西给你，你是不是值得信任的人，希望你能证明自己的勇气。当然，这并不容易……你想试试吗？", 4, 2300002)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(23612, "");
                                            cm.sendNormalTalk("你想试试吗？为了证明你的勇气，请你去搜集#b黑色之翼帽子#k。\r\n黑色之翼帽子在埃德尔斯坦的#b通往矿山的路1#k那里可以搜集到。\r\n矿山已经变成了敌人的根据地，虽然只有少数黑色之翼在追踪你，但你也要格外小心。祝你好运。", 4, 2300002, false, false)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose();
                                                cm.warp(310040000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23612.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("回来啦。花费的时间比我想象的要长一些。没发生什么事吧？", 0, 2300002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(讲述差点被黑色之翼发现的事情)", 16, 2300002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("原来如此。最后差点被发现了？#p2154009#要是知道让你从眼前跑了，一定会被气死。总之，你能安然归来，真是太好了。", 0, 2300002, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("我看到了你的勇气。你想领取我们准备的礼物吗？", 0, 2300002)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我在你的控制器中录入了反抗者知道的所有黑色之翼成员的信息。现在即使你遇到#p2154009#和黑色之翼，在他们看来你也是陌生人。好的，以后就拜托你了。", 0, 2300002, false, false)
                        } else {
                            if (status === a++) {
                                cm.gainItem(1142577, 1);
                                cm.forceStartQuest(32007, "");
                                cm.forceCompleteQuest(32007);
                                cm.updateInfoQuest(1073, "3600=10;3610=30;3611=201");
                                cm.forceCompleteQuest(23612);
                                cm.changeJob(3611);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};