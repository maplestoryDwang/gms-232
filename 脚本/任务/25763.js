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
            cm.sendNormalTalk("我得先跟你说说次元传送口。你有什么想知道的吗？", 0, 3000001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("次元传送口是怎么形成的？", 2, 3000001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("生命之超越者达勒摩尔攻击时间之超越者克洛尼卡后，夺取并吸收了他的力量为自己所用。当达勒摩尔使用这股力量时，格兰蒂斯的时空发生了一次逆转，从那时起，格兰蒂斯的四处就出现了次元传送口。", 0, 3000001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("次元传送口和什么地方连通呢？", 2, 3000001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我们也不清楚。由于光对付达勒摩尔和麦格纳斯已经很吃力，为了清除未知的外部原因，我们把传送口封印了。估计达勒摩尔应该使用过次元传送口。", 0, 3000001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我想听听关于达勒摩尔或克洛尼卡的事。", 2, 3000001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("达尔莫尔，听闻他曾是高等翼人的王子。一直以来高等翼人总是与平民翼人对立，纷争不断，眼看着两大翼人族群之间战火不断，愈发草菅人命，达尔莫尔愤懑不已，便觉醒为了超越者。讽刺的是，他虽是生命超越者，却一直想着重置所有的生命。", 0, 3000001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("克洛尼卡是时间之超越者，没有人知道他是何时成为超越者的。据说他原本呆在纪年圣殿，达勒摩尔向他提议，要他加入自己把所有生命重新洗牌的计划。克洛尼卡表示反对后，达勒摩尔流放了他，并夺去了他的力量。", 0, 3000001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("另外还有一位名叫艾欧娜的光之超越者。但没有人知道他的存在。说不定现在达勒摩尔正在外面和艾欧娜作战呢。", 0, 3000001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("超越者到底是种什么样的存在呢？", 2, 3000001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("超越者是传说中创造了世界的3位监督者在各世界的代理人。传说有光明监督者、时间监督者、生命监督者这3位监督者。他们创造世界后，又为各个世界造出了作为自己代理人的超越者。超越者算是“半神”，有的超越者是不灭的，而有的超越者生来就注定面临毁灭。说到这种注定毁灭的超越者，正是像狂龙战士这样，会转生的人。", 0, 3000001, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("原来如此，我暂时没什么疑问了。", 2, 3000001, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askYesNo("不知不觉说了很多啊。要解除次元传送口的封印，重新将其启动，需要各种催化剂。我已经委托#p3000003#准备这些催化剂，你去找#p3000003#，协助他的准备工作吧。", 0, 3000001)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("你知道#p3000003#在万神殿内部吧？", 0, 3000001, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(25763, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25763.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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