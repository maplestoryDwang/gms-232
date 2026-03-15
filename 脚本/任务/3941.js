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
            cm.askMenu("这不是#p2101004#大人吗？真是好久不见，这次好不容易拿到了王妃爱不释手的丝绸喔！当然…品质也是一流！可是…您怎么一直在流汗啊？\r\n#L0##b(伪装声音)没什么，只是太热了点...#l", 0, 2101013)
        } else {
            if (status === a++) {
                cm.askMenu("阿里安特哪有没热过啊？不就一直都这样嘛~可是我还以为#p2101004#大人您都不会怕热呢！不对…您的脸...变得愈来愈红啰！真的没关系吗？\r\n#L0##b(伪装声音)没…没关系，不需要担心...#l", 0, 2101013)
            } else {
                if (status === a++) {
                    cm.askMenu("真的没关系吗？我之前就觉得#p2101004#大人体质虚弱，是不是需要吃点什么药啊？刚好我有在冰封雪域那边採买来的感冒药，您要不要买些回去吃啊？我会算您便宜点的...\r\n#L0##b我说没关系啦！#l", 0, 2101013)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("真的吗？可是#p2101004#您的声音，和平常不太一样喔！是不是真的感冒啦？怎么看都不像是平时的#p2101004#大人喔！平常你都要我把#t4010007#算便宜一点给您…真是奇怪…您真的是#p2101004#大人吗？", 0, 2101013)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(3941, "");
                            cm.sendNormalTalk("还真不像是平时的#p2101004#大人…据我所知，#p2101004#大人可不是这么沉默寡言的人，难道发生什么事情了吗？噗！看你脸变得愈来愈红，是不是生气啦？真的很抱歉…我马上去拿丝绸过来，请稍等一下~", 0, 2101013, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("来~在这里，请您小心拿回去吧！这丝绸…可不是随随便便就能到手的东西喔！若稍有破损，恐怕王妃会把#p2101004#大人关进天牢了呢！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#v4031571# #t4031571# 1个\r\n\r\n", 0, 2101013, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(3941);
                                    cm.gainItem(4031571, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3941.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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