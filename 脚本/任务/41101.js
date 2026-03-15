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
            cm.forceStartQuest(41101, "");
            cm.updateInfoQuest(41101, "");
            cm.dispose()
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
            cm.sendNormalTalk("礼物转达得怎么样了？她说晚上吃什么？我自己倒是挺喜欢吃辣炒蘑菇，和辛辣的青椒一起炒的话，那味道真是……！", 0, 2430001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在不是说炒蘑菇的时候吧。明明女士好像非常生气，不想再和斯坦长老这样漠不关心的人一起过日子了……嗯，这也不是完全无法理解。", 4, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("什，什么？不想和我过？我为了让她解气，把礼物都送过去了，竟然敢这么对我？我才不愿意和这么苛刻的女人过日子呢！让她随便去吧！", 1, 2430001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("长老也这么说的话……啊哈，原来是因为这样，才不让第三者插足别家的事情啊。不过现在该怎么办才好？", 4, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……去找他们的儿子#b亚华#k帮忙，怎么样？", 4, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("唉，还真是自讨苦吃啊。算了，走吧。", 4, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(41101, "NpcSpeech=24300011");
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
            cm.gainExp(720000);
            cm.forceCompleteQuest(41101);
            cm.gainItem(4310085, 8);
            cm.gainItem(2001530, 30);
            cm.dispose()
        }
    }
};