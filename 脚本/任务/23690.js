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
            cm.sendNormalTalk("#b#h0##k？连鲁提也来了。有什么事吗？", 0, 2300001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(说想进入封闭的#p2154009#的研究所)", 16, 2300001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你也知道，#p2154009#不会把那里就这样扔着。他一定猜到了你会回来，说不定在里面设置了什么陷阱……以那个人的性格推断，这是很有可能的。", 0, 2300001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我也是这么说的，但#h0#好像下定了决心。", 4, 2159405, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是吗？连鲁提都说服不了#h0#，看来我说什么也没用了。", 0, 2300001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("进入废弃研究所的入口在埃德尔斯坦右边的#b通往矿山的路1#k……", 0, 2300001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("我已经保存了坐标，可以把你直接传送过去。不过希望你做好充分的准备。准备好了吗？\r\n#r(接受后立即移动。)#k", 0, 2300001)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("在研究室中不知道会发生什么事。我给你一个背包，鲁提最好待在里面。", 1, 2300001, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.gainItem(4001761, 1);
                                            cm.sendNormalTalk("好的，我这就送你到研究所去。希望你能安然归来。", 1, 2300001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(23690, "");
                                                cm.forceCompleteQuest(23690);
                                                cm.gainExp(15000);
                                                cm.dispose();
                                                cm.warp(931060051, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23690.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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