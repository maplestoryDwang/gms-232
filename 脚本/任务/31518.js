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
            cm.sendNormalTalk("和#b#p3001100#联系接受下一个任务吧。嗯……发报机启动！", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你有什么事？能进入工坊2层了吗？该不会又从阶梯上掉下来，找我抱怨吧？", 4, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b没掉下去。这次顺利进入2层了。是#p3001100#你自己做的东西，怎么本人都没信心……", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我不是没信心。呵呵，只是想跟你开个玩笑。总而言之你顺利到达2层，太好了。", 4, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("从2层登上3层后，就到维克特的房间了。那边应该也会设置同样的陷阱。不过你已经有歪曲的光之精髓，倒不用担心。", 4, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这次在你进入#r维克特#k的房间之前，请先消灭#b100个#k红色的维克特的创造物，#b100#k个蓝色的维克特的创造物。", 4, 3001100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("在你对付维克特之前，为了给之后扫尾的士兵们减轻负担，必须先消灭那些敌人。", 4, 3001100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("祝你好运。维克特是个非常厉害的对手。等你完成这个任务再跟我联系吧。", 4, 3001100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("只要消灭#r#o2400116##k和#r#o2400117##k各#b100个#k就行，出发吧？", 16, 0)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("哈哈，扫荡敌人喽。", 16, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(31518, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31518.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("敌人已经被全部歼灭了……和#b#p3001100##k联系吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呵呵，你速度很快嘛。敌人全部消灭了？", 4, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的，已经消灭干净了。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那我就让士兵们做好准备。你知道下面要做的事吧？", 4, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯……关于#r维克特#k能力的调查资料被我放哪里去了……你等一会儿再跟我联系吧。我先找找再跟你说。", 4, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(31518);
                                cm.gainExp(600000);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};