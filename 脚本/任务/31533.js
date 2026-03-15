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
            cm.sendNormalTalk("好了，下面是时候消灭#r麦格纳斯#k，完全收复赫里希安了。", 0, 3001100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("废话我就不多说了，不过我得跟你说明几点。他会使用各种能力。", 0, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你在维克特的房间里碰到的陨石堆，在特雷格罗的房间里经历的神经毒气，还有贝德罗斯使用的技能都是从麦格纳斯那里学习的。", 0, 3001100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("到时候这所有一切会集中起来对付你。如果你还不够强大，最好不要着急挑战。", 0, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我担心如果你挑战失败，收复赫里希安的梦想也会付诸东流。", 0, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("到时候这所有一切会集中起来对付你。如果你还不够强大，最好不要着急挑战。", 0, 3001100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我担心如果你挑战失败，收复赫里希安的梦想也会付诸东流。", 0, 3001100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("而且也不能断定麦格纳斯只会使用刚才说过的那些技能。之前我曾见过他的手段，他还会使用束缚对方行动或使治愈失效的各种技能。", 0, 3001100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("你自己好好考虑吧。我给你准备的时间，你能答应我一定消灭#r麦格纳斯#k吗？", 0, 3001100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("那么请你消灭#r麦格纳斯#k吧。我会为你，也为赫里希安的收复而祈祷。", 0, 3001100, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(31533, "");
                                                    cm.forceStartQuest(31547, "1");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31533.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNextS("终于消灭了#r麦格纳斯#k。这下子赫里希安就能回到诺巴族的手中了吧……")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("可是他消失时看上去很淡然，现在就断定他已经从这片土地上消失为时过早。")
            } else {
                if (status == a++) {
                    cm.sendNextPrevS("看他的样子，好像还没使出全力……总觉得什么地方不放心，但现在先为眼前的胜利欢呼吧。")
                } else {
                    if (status == a++) {
                        cm.sendNextPrevS("所有的旅程都已结束，赶紧去向#b伊黛娜#k报告吧。我现在好想休息……")
                    } else {
                        if (status == a++) {
                            cm.forceCompleteQuest();
                            cm.gainExp(2000000);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};