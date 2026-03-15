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
            cm.askYesNo("我们不能让那些外星人偷走我们宝贵的矿石！我们得，我想想，破坏它们的作业？对，就是这样！去它们那儿大闹一番吧！", 0, 9201050)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("对了，要破坏它们的作业首先得制定一个周密的计划！我这儿有四个主意！", 0, 9201050, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你的第一个目标位于森林峡谷。外星人在那儿屯了不少火药堆。你把它们都给我点了，顺便再把那些星际巨钻给毁掉好了。它们看着就很脆弱的样子，估计往它们挖的洞里丢几块石头它们就不行了！", 0, 9201050, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("噢，我还想到了一个能吓跑它们的主意！去把它们的样本都偷走，再弄坏它们的电脑！如果我是外星人，那我肯定会把这些东西放在星际采矿基地的入口附近。希望这帮外星人用的作业系统跟我们的是一样的……", 0, 9201050, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(28748, "0");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("破坏任务进展得还顺利吗？你有好好教训它们吗？", 0, 9201050, false, true)
        } else {
            if (status === a++) {
                if (cm.getNumberFromQuestCustomData(28767) > 0 && cm.getNumberFromQuestCustomData(28760) > 0 && cm.getNumberFromQuestCustomData(28758) > 0 && cm.getNumberFromQuestCustomData(28757) > 0) {
                    cm.sendNormalTalk("我就知道你能让它们尝到苦头！", 0, 9201050, true, true)
                } else {
                    cm.sendNormalTalk("你还没破坏够呢！还有许多能破坏的东西！\r\n\r\n #b破坏它们的电脑：" + cm.getNumberFromQuestCustomData(28767) == 0 ? "#k 未完成" : "#b 已完成\r\n #b偷走它们的样本：" + cm.getNumberFromQuestCustomData(28760) == 0 ? "#k 未完成" : "#b 已完成 \r\n #b往它们的钻头里丢石子：" + cm.getNumberFromQuestCustomData(28758) == 0 ? "#k 未完成" : "#b 已完成 \r\n #b点燃它们的火药堆：" + cm.getNumberFromQuestCustomData(28757) == 0 ? "#k 未完成" : "#b 已完成 ", 0, 9201050, true, false);
                    cm.dispose()
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("外星人关押了许多人质！我感觉它们是要把他们煮来吃！我懂了，这帮外星人肯定是星际大厨！", 3, 9201050, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯，你的推论既可笑又不合理，但我还真想不出别的可能！不过，至少这些市民现在还活着。", 0, 9201050, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(28748);
                            cm.gainExp(70000);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};