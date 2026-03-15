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
            cm.sendNormalTalk("#h0#！你又回来了！", 4, 9400248, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b天啊！#p9400215#！现在你看上去一点儿也没有原先那种干巴巴有气无力的模样了！怎么突然变得这么有活力！", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我也变了哦。", 4, 9400249, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("来到城墙外面之后，我才领悟到原先我那么宝贝的金银财宝其实什么都不是。", 4, 9400248, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这地方好多好吃的。连花瓣都很美味。", 4, 9400250, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b我的天，#p9400217#！你看上去真是太棒了！那边那个宝物堆该不是你之前吃掉的金银财宝吧？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("没错。\r\n对了……不瞒你说……我吞掉的金银财宝中，还有把黄金钥匙。很抱歉我明知道你在找钥匙，却到现在才说出来。\r\n你去那个宝物堆里找钥匙吧？", 4, 9400250, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(63072, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63072.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.forceCompleteQuest(63072);
            cm.gainExp(158800);
            cm.updateInfoQuest(63072, "Start=1;exp=1");
            cm.sendNormalTalk("这是你要找的钥匙吗？", 4, 9400250, false, true);
            cm.gainItem(4036003, 1)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("#b我有种不错的预感，这个好像是可以打开巨门的钥匙！", 2, 0, true, true)
            } else {
                if (status === b++) {
                    var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                    cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + a + "/12)");
                    cm.dispose()
                }
            }
        }
    }
};