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
            cm.sendNormalTalk("现在必须在遗迹最深处举行召唤仪式。在这之前有个注意事项。但是……。", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯……文书上的字有点模糊不清。", 4, 1013440, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我知道！我在书上看到过。只要把波波尼果汁浇在上面，就能看到了。", 4, 1013442, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("什么？那种东西在什么地方呢？", 4, 1013440, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯……长在怪物头顶的那种红色果实。看上去是不是含有很多水分？", 4, 1013440, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("必须从#b危险的遗迹攻击兵B#k身上收集果实。", 2, 1013417)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(35972, "");
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
            cm.sendNormalTalk("都收集到了吗？让我来把它榨成汁。", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(1427698);
                cm.forceCompleteQuest(35972);
                cm.gainItem(4036533, -50);
                cm.dispose()
            }
        }
    }
};