var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.sendNormalTalk("你好，我的名字叫麦加。我从来没有见过你哦，看来你是新来的#b冒险家#k吧？", 1, 10301, false, true)
        } else {
            if (status === i++) {
                cm.sendNormalTalk("#b冒险家？#k", 17, 10301, true, true)
            } else {
                if (status === i++) {
                    cm.sendNormalTalk("是的，为了在冒险岛世界展开冒险而从其他世界来的人。我们称这种人为“冒险家”。所有冒险家都是从#b冒险岛#k开始冒险的。", 1, 10301, true, true)
                } else {
                    if (status === i++) {
                        cm.sendNormalTalk("#b冒险岛？#k", 17, 10301, true, true)
                    } else {
                        if (status === i++) {
                            cm.sendNormalTalk("嗯，冒险岛！这里本来只是个无名小岛，但不知从何时起有很多冒险家都纷至沓来。为了他们的到来，这里开始陆陆续续有设施搭建起来，现在这里已经变成了一个不错的村庄。并且由我来为像你一样的新手冒险家提供帮助。", 1, 10301, true, true)
                        } else {
                            if (status === i++) {
                                cm.sendNormalTalk("你是叫……#h0#吧？既然你是第一次来到冒险岛世界，那就多听一下我做的说明吧？通过我的小测试的话，我就会给你对冒险非常有用的礼物哦！", 1, 10301, true, true)
                            } else {
                                if (status === i++) {
                                    cm.sendNormalTalk("如果你不想听我的说明，我马上送你去村庄。不过那样一来，你就无法获得礼物。", 1, 10301, true, true)
                                } else {
                                    if (status === i++) {
                                        cm.askMenu("明白了的话，现在开始选择吧。\n你要怎么做呢？\r\n#b#L0# 听取麦加的说明，并获得新装备作为礼物。 #l\r\n#L1# 不听说明，立即移动至村庄。#l#k", 1, 10301)
                                    } else {
                                        var reactor = "action" + selectionLog[8];
                                        eval(reactor)(mode, type, selection, i)
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

function action0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("不错的选择！如果你按照我的说明去做，以后在冒险岛世界生活不会有任何问题的。", 1, 10301, false, true)
    } else {
        if (status === a++) {
            cm.gainExp(35);
            cm.forceCompleteQuest(32203);
            cm.dispose()
        }
    }
}

function action1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("好吧，那么我现在立刻送你去彩虹村。", 1, 10301, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我已经把礼物放到你背包里，是恢复用药水。你待会儿打开消耗栏确认一下吧。", 1, 10301, true, true)
        } else {
            if (status === a++) {
                cm.gainItem(2000016, 50);
                cm.gainItem(2000018, 50);
                cm.sendNormalTalk("你到了彩虹村的话，别忘了去见见#b路卡斯#k村长!他会给你一些建议，让你能刚好地去适应新世界。", 1, 10301, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32203);
                    cm.forceStartQuest(32210, "");
                    cm.updateInfoQuest(25980, "normal=#");
                    cm.updateInfoQuest(25980, "normal=#;hard=#");
                    cm.gainExp(15);
                    cm.dispose();
                    cm.warp(4000020, 1, false)
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