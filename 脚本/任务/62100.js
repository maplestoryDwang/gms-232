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
            cm.askAcceptDecline("收到了神木村村长#p2081000#寄来的信。\r\n读一读是什么内容吧？", 2, 2081000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#eTo。#h0#\r\n#n你过得好吗？我有一件事情想要拜托你。", 4, 2081000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不久前，有个叫#p9310538#的家伙去上海旅行，但是从几天前开始就没了消息……如果是其他时候也就算了，但是我听说现在的上海很危险，我有些担心。啊，你可能还不知道吧。", 4, 2081000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你听说上海的白天消失了的传闻吗？那里的白天消失了，连续好几天都是夜晚。年轻人高兴得不得了，都跑去上海旅行了。", 4, 2081000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("虽然这可能只是老人家在杞人忧天，但是，我有种直觉，现在上海一定发生了什么事情。", 4, 2081000, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("你能去上海找到#p9310538#吗？如果可以，现在我就送你去#m104020000#。你在那里使用#b上海次元传送口#k，就能立刻前往上海外围地区。我和#p9310538#最后联系的地方就是#m701100000#，请你去那里找找#p9310538#吧！\r\n#e#b(接受时，移动至六岔路口。)", 0, 2081000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("只有夜晚的城市……接受#p2081000#的委托，我正好也能去亲自确认一下。", 3, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(62100, "");
                                        cm.dispose();
                                        cm.warp(104020000, 14)
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
            cm.sendNormalTalk_Bottom("你是谁？你认识我吗？", 37, 9310538, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62100);
                cm.updateInfoQuest(62100, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("啊……你是#p2081000#派来的人啊……", 37, 9310538, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};