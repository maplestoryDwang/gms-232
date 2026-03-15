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
            cm.updateInfoQuest(31389, "ex=3");
            cm.sendNormalTalk("#e#h0#！#n你瞧瞧！心跳数再次攀升了！\r\n这是什么情况？我的第二个计划可还都没开始呢，她居然就已经\r\n？扑通扑通小鹿乱撞？了~看来多檀智肯定也很满意今天的约会。啊，对了~我还有不少的计划~下次是不是该直接表白了呢？嘻嘻嘻，再这样下去，万一多檀智的心脏爆掉了该如何是好。", 0, 2192004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那个……", 4, 2192012, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("额啊-吓我一跳！\r\n对，对不起，多檀智，被我吓到了吧？", 0, 2192004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那什么，多檀智是没事了，就是……我……#e好像弄丢了胸针#n，我从幽灵屋出来的时候，明明还有的，可等我洗完手出来就不见了……怎么办呢？", 4, 2192012, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么？那是真的吗？那刚刚的心跳是……\r\n啊，不是，我的意思是……东西弄丢了嘛，找回来就可以了！这里不是还有位相当可靠的勇士嘛？#e#h0##n，再怎么说这位可是名声响当当的勇士。", 0, 2192004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("真的吗？真是万幸，我还去过#b极限车站<2>#k呢，我在想东西会不会掉在那里了……", 4, 2192012, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("别担心，我这就帮你找回来！不过#b多檀智#k，你真的没有心脏扑通扑通跳个不停的感觉吗？", 0, 2192004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯？？？", 4, 2192012, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("没什么！你就当我没说好了。\r\n#e#h0##n，我们先去#b极限车站<2>#k吧。\r\n\r\n#b（接受时自动前往极限车站<2>。）#k", 0, 2192004)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(31372, "");
                                                cm.dispose();
                                                cm.warp(222120100, 0);
                                                cm.updateInfoQuest(31374, "")
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