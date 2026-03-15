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
            cm.askAcceptDecline("幸好大家都平安回来了……该怎么跟你说明呢……唉，还是给我点时间理顺一下思路吧。\r\n", 0, 3001200)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34624, "");
                cm.forceStartQuest(34655, "");
                cm.sendNormalTalk("天啊，那家伙怎么会……这颗行星……呃呃呃……\r\n", 4, 3001265, false, false);
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34624.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("虽然很难相信，但是Mr.哈扎尔，那人说的都是实话。我在去聚会的途中接到了消息。\r\n", 0, 3001200, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哈，总部那边怎么会做出这么不可理喻的决定？这下好了，我们这些支部成员只能老老实实地向他们交税了……\r\n", 4, 3001266, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("他说马上就有人要来攻击这颗行星了。说要暂时在这里建立据点，保护居民们。\r\n", 0, 3001200, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……那不过是分内之事而已。那人就是个灾星……他会这样做，一定有什么企图……\r\n", 0, 3001200, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("恐怕我们支部要和Mr.哈扎尔的支部做一段时间的邻居了。好在时间不会太长。\r\n", 0, 3001200, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("有一点我需要特别嘱咐你一下，那就是不要和他们起冲突。商团内禁止争斗，这是规矩……\r\n", 0, 3001200, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("无论如何都不要招惹他们，也不能过分挑衅他们。我们只要静静等待他们走远……这是保全支部最稳妥的办法……\r\n", 0, 3001200, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(14431, "");
                                        cm.forceStartQuest(18938, "");
                                        cm.forceStartQuest(33189, "");
                                        cm.forceStartQuest(33190, "");
                                        cm.forceStartQuest(33243, "");
                                        cm.forceStartQuest(33265, "");
                                        cm.forceStartQuest(33267, "");
                                        cm.forceStartQuest(36100, "");
                                        cm.forceStartQuest(36101, "");
                                        cm.forceStartQuest(36103, "");
                                        cm.forceStartQuest(36104, "");
                                        cm.forceStartQuest(36105, "");
                                        cm.forceStartQuest(36106, "");
                                        cm.forceStartQuest(36107, "");
                                        cm.forceStartQuest(36108, "");
                                        cm.forceStartQuest(36109, "");
                                        cm.forceStartQuest(36110, "");
                                        cm.forceStartQuest(36111, "");
                                        cm.forceStartQuest(36112, "");
                                        cm.forceStartQuest(36113, "");
                                        cm.forceStartQuest(36114, "");
                                        cm.forceStartQuest(36115, "");
                                        cm.forceStartQuest(36116, "");
                                        cm.forceStartQuest(36117, "");
                                        cm.forceCompleteQuest(34624);
                                        cm.gainExp(10011);
                                        cm.playerMessage(5, "现在开始，在荒蛮终点站以外的地方也可以获得经验值、金币、道具等。");
                                        cm.playerMessage(-1, "现在开始，在荒蛮终点站以外的地方也可以获得经验值、金币、道具等。");
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
};