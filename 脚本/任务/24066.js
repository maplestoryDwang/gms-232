var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("长老们的纯白净化不起作用的原因，想来想去只有一个。请冷静地听我说。#r黑魔法师的封印好像已经变弱，或者已经解开#k了。", 0, 1033100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("想想其实很简单。从国王陛下醒来的事情，可以看到黑魔法师的诅咒出现了裂痕。而且通过不断的修炼，国王的力量正在逐渐恢复。", 0, 1033100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那样的话，我们种族的力量也会逐渐变强。但是其他人还是没能战胜诅咒。好像被什么阻挡了一样……", 0, 1033100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("结论只有一个。#r黑魔法师的诅咒虽然出现了裂缝，但好像正在变强#k。", 0, 1033100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("黑魔法师的诅咒变强，说明黑魔法师的封印正在变弱，他的力量正在回到冒险岛世界……只能这么解释。", 0, 1033100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("结论是，现在的…………历经了数百年时间的冒险岛世界陷入了危机之中。危机的制造者正是黑魔法师。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 3000 exp", 0, 1033100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(24066, "");
                                    cm.forceCompleteQuest(24066);
                                    cm.forceStartQuest(24067, "");
                                    cm.dispose()
                                } else {
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

function end(c, b, a) {
    cm.dispose()
};