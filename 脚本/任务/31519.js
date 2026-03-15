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
            cm.sendNormalTalk("伊黛娜发来了对话邀请，跟她对话吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哎，好不容易才找到关于#r维克特#k的资料。我马上就告诉你。我成天就埋头在一堆文件里，都搞得稀里糊涂的了。呵呵。", 4, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#r维克特#k已经失去了肉身，附身于魔法画布之内。而且他还自己在画布上作画，通过将画面变成具体形态来进行攻击。", 4, 3001100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("通过作画，他不仅能召唤敌人，也能将魔法等抽象事物变为现实进行攻击。有时还能画出陨石等物品攻击敌人。", 4, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对付#r特雷格罗#k时挺辛苦的吧，和那时相比这次战斗也不相上下。你已经消灭了#r特雷格罗#k，我相信你一定能取得胜利。", 4, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你准备好之后，就进入#b#m401051200##k，消灭#r维克特#k吧。原幸运与你同在。", 4, 3001100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("准备好后，就进入#b#m401051200##k，消灭#r维克特#k。出发吧？", 16, 0)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("去消灭#r维克特#k，朝#b麦格纳斯#k进发吧。", 16, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(31519, "");
                                            cm.forceStartQuest(31545, "1");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31519.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呼……维克特也是个相当厉害的对手啊。返回#b#p3001100##k那里报告吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("和消灭特雷格罗时一样，发现了一个龙翅膀形状的印章。跟#b#p3001100##k说说这个东西吧。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(31519);
                    cm.gainExp(2250000);
                    cm.gainItem(4033404, 1);
                    cm.dispose();
                    cm.warp(401040000, 0, false)
                }
            }
        }
    }
};