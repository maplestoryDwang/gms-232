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
            if (cm.getNumberFromQuestCustomData(41318) >= 11) {
                cm.sendNormalTalk("你不是已经有#r#t4033867##k了吗？玩具工厂的设备也全都修理好了，已经不需要#t4009101#了。", 0, 2470004, false, true);
                cm.dispose()
            } else {
                if (cm.getNumberFromQuestCustomData(41318) >= 10) {
                    cm.addNumberForQuestCustomData(41318, 1);
                    cm.sendNormalTalk("感谢你这么热心地工作。玩具工厂的设备也全都修理好了，所以也不再需要#t4009101#了。不过，我给你一个#r#t4033867##k，麻烦你帮我交给#b乃米#k吧。", 0, 2470004, false, true);
                    cm.gainItem(4033867, 1);
                    cm.dispose()
                } else {
                    if (cm.getNumberFromQuestCustomData(41318) > 0) {
                        cm.askAcceptDecline("看来你缺少#r#t4033866##k吧，这次也要打临工吗？当然，条件也和上一次一样。", 0, 2470004)
                    } else {
                        cm.sendNormalTalk("你需要#r#t4033866##k？嗯，看来乃米又在糖果机器上把零花钱全部花光了。我是怎么知道的？呵呵，我是他爸爸怎么会不知道呢。一看就知道，我们俩长得很像吧？", 0, 2470004, false, true)
                    }
                }
            }
        } else {
            if (status === a++) {
                if (cm.getNumberFromQuestCustomData(41318) > 0) {
                    cm.forceForfeitQuest(41316);
                    cm.updateInfoQuest(41316, "");
                    cm.forceStartQuest(41316, "");
                    cm.sendNormalTalk("我怕你忘了，所以提醒你一下，拿来#r5个#t4009101##r#k就可以换成#r1个#t4033866##k。", 0, 2470004, false, true);
                    cm.dispose()
                } else {
                    cm.askAcceptDecline("总之，即便是我女儿委托你，我也不能免费给你#r#t4033866##k。只要你愿意帮我做件事情，我就会给你#r#t4033866##k。怎么样？", 0, 2470004)
                }
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(41316, "");
                    cm.forceStartQuest(41316, "");
                    cm.sendNormalTalk("工厂因为不停地在运转，所以设备也开始出现故障了。虽然已经叫了修理工，但是要把所有出故障的机械修理好，一两天是绝对不可能的。所以我打算使用#r#t4009101##k……用#r5个#t4009101##k交换#r1个#t4033866##k，你觉得怎么样？", 0, 2470004, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41316.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#r#t4009101##k攒了多少了？", 0, 2470004, false, true)
        } else {
            if (status === a++) {
                cm.addNumberForQuestCustomData(41318, 1);
                cm.forceCompleteQuest(41316);
                cm.gainExp(4000000);
                cm.sendNormalTalk("需要#r#t4033866##k的话，可以随时来找我。", 0, 2470004, true, true);
                cm.gainItem(4033866, 1);
                cm.gainItem(4009101, -5)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};