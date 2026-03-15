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
            cm.sendNormalTalk_Bottom("那样大家都会喊他笨蛋的。\r\n应该会有更好的名字的。\r\n不过，我觉得笨蛋这个名字挺可爱的啊，不是吗？哈哈哈。", 36, 2155125, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("超级人造人居然会追到这里，\r\n那机器人肯定闯了什么大祸，\r\n#b但它的芯片损坏，记忆已经乱作一团了。#k", 36, 2155125, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("通常芯片会和机器人一起自动损坏，\r\n要搜集起来比较困难，但可以搜集碎片来制作芯片。\r\n这样会需要很长时间。在这段时间内，我会照顾那家伙的。", 36, 2155125, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("话说，我还没跟你谢谢呢。\r\n小软柿，如果没有你，那家伙肯定…已经被抓走了。", 36, 2155125, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这里时常发生类似事件，所以肯定会有很多人需要帮忙。\r\n但如果是你，把什么事情交给你我都放心。\r\n#b我会先把你的事情告诉大家，相信从现在开始你会变得忙碌起来。", 36, 2155125, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我也多次传达了委托，\r\n#b但前往各个区域的侦察机器人肯定也需要很多帮助。#k\r\n希望你能尽力帮助大家。当然，我不会让你免费帮忙的。哈哈哈。", 36, 2155125, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("… 感谢你救了这个机器人…它总让我想起我的儿子。\r\n以后也请你多多帮忙，小软柿。\r\n如果你有什么事，可以随时联系我。", 36, 2155125, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;1q=1;2q=1;3q=1");
                                        cm.forceStartQuest(39203, "");
                                        cm.gainExp(60623436);
                                        cm.updateInfoQuest(39203, "gExpCheck=1");
                                        cm.forceCompleteQuest(39203);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39203.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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