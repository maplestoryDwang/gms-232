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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31513.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呃……怎么回事。这东西，形似阶梯，却无法靠近啊。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是某种装置吗。向#b#p3001100##k报告吧。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("话说桥怎么突然像魔法一样消失了……", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("先和#b#p3001100##k商量一下吧……开启通讯设备。", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么事？你试过进入工坊2层了吗？", 4, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("试过了，我正打算进入2层时，脚下的踏板突然消失，然后就摔到了地上。疼死了。", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("踏板消失了？你还记得消失的那一瞬间吗？", 4, 3001100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯……发出一些光芒，我正觉得刺眼时就掉下来了。", 16, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嗯……看来还得调查一下。从#r维克特#k的能力来看，估计是他为了防止外人进入，用制作其他创造物的方法做了一个装置。", 4, 3001100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("因为现在我们的研究已经进行到一定程度，所以能下结论。", 4, 3001100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("之前你搜集回来的布片好像是用于强化魔法的媒介。我还需要更接近实体的东西。", 4, 3001100, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("我去找找研究中途获得的结果，你过一会儿再跟我联系吧。", 4, 3001100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("等一会儿再跟#b#p3001100##k联系吧。", 16, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(31513);
                                                                cm.gainExp(168000);
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
};