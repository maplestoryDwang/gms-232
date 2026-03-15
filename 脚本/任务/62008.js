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
            cm.sendNormalTalk_Bottom("这里非常危险！你最好马上离开。不然的话……不然的话……", 37, 9310048, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom(" (这的确是大师的衣服，可怎么长了一个妖怪的脸。大师到底怎么了！？) ", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呜呜……前几天，为了冲洗一下清扫工具，我到井边去打水，可我被水中自己的模样吓了一跳。我那张原本帅气、帅气无比的脸！！！！居然变得如此丑陋。这肯定是这里的妖怪搞的鬼。如果你也不想变成这样，最好马上离开。", 37, 9310048, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我是受#b#p9310053##k之托而来的。我需要在这里找一本#b书#k……不过，大师你的脸变成这样，我也不能置之不理。有什么我可以帮助你的吗？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("那你去杂货商店帮我带来#i2050000#  #b#t2050000##k吧？我怕别人把我误当成妖怪，所以我还是不出去为好。", 37, 9310048)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你可真是个好人啊！你帮我带来1个#i2050000#  #b#t2050000##k就可以了。拜托你了。", 37, 9310048, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(62008, "");
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
            cm.sendNormalTalk_Bottom("你真的帮我带来#b#t2050000##k了啊！", 37, 9310048, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("(咕咚 咕咚……咕咚。)", 37, 9310048, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 6);
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 6);
                    cm.forceCompleteQuest();
                    cm.dispose()
                }
            }
        }
    }
};