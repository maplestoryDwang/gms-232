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
            cm.sendNormalTalk("有什么事吗？你好像不需要我的指点啊……嗯？消灭僵尸好不好？当然是好事。要是没有僵尸，#m211000000#的发展就会快得多。如果你有能力，希望你能帮我们消灭僵尸。", 0, 2020009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#b(这次应该是好事了吧？)", 2, 2020009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是消灭掉僵尸之后，必须小心处理他们的牙齿。#t4000069#中存在黑暗的力量，不小心的话，很可能会受到黑暗力量的污染。就像#p2022003#一样。虽然希望他能赎罪，但他却变得越来越邪恶了……", 0, 2020009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#p2022003#犯了什么错误啊？", 2, 2020009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不久前，我们发现#p2022003#复制了#m211000001# 地下室的钥匙。我们虽然把钥匙扣下了，但他复制的钥匙一定不止一把。看来暂时必须加强地下室的管理工作才行。", 0, 2020009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b……！地下室里有什么东西？", 2, 2020009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("是很久以来一直存放在#m211000000#的宝物。具体是什么东西，我不能告诉你，但那是绝对不能丢失的东西。你不要再问了。那样的话，我可能就要怀疑你了…… \r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 28135 exp", 0, 2020009)
                                } else {
                                    if (status === a++) {
                                        cm.gainExp(28135);
                                        cm.forceStartQuest(22594, "");
                                        cm.forceCompleteQuest(22594);
                                        cm.sendNormalTalk("不过你的脸色也用不着这么难看。你又没有偷走宝物，也没有帮助他偷走宝物，有什么好担心的呢？虽然#r防御体系确实很薄弱#k，但只要我们注意防备，不要让宝物丢失就行了。", 0, 2020009, false, false);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22594.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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