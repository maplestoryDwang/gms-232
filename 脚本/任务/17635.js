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
            cm.sendNormalTalk("啊，#h0#你休息好了吗？我感觉还是有点累。看你的脸色，好像你的疲劳也没有完全消失呢。", 0, 9390262, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，我还好啦。也因为这地方比较陌生，还没熟悉。", 2, 9390262, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("统帅！大事不好了！", 4, 9390217, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("什么大事。又出了什么事？", 0, 9390262, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("(好像又出了什么事情…… 要听听吗？)", 2, 9390262, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这次又是什么事？", 4, 9390203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("据说，我们派去罗萨进行贸易的船只，受到了普赛依的攻击！！", 4, 9390217, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("什么？！该死的 #r普赛依#k又来捣乱！！", 4, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("这次的损害好像比之前都要大。", 4, 9390217, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("应该是的吧。因为那是去罗萨的商船。唉！", 0, 9390262, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("这究竟是第几次受害已经算不清了。难道不该想个什么对策吗。", 4, 9390202, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("(那个叫普赛依的家伙又是谁。我得去问问。说不定又会有我能帮得上忙的事情。)", 2, 9390262, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(17635);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17635.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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