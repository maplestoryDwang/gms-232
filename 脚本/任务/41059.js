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
            cm.sendNormalTalk("啊啊，西琳你真的是人类吗？人类怎么可能如此美丽！你会不会是失去了翅膀坠落到人间的天使啊……", 0, 2420017, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……够了。你知道你看起来像个追踪狂吗？不要这样一直在后边看着，像男人一样在我前面表白啊。", 2, 2420017, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("表白？我怎么敢在西琳面前表白呢？我是这么的又穷又丑……我怎么可能会配得上西琳呢……我肯定不行的……", 0, 2420017, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("额啊啊，实在是看不下去了！与其这么原地踏步，还不如让我来帮忙吧！", 2, 2420017)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(41059, "");
                            cm.forceStartQuest(41059, "");
                            cm.sendNormalTalk("喂，大叔！我帮你找礼物，你一定要向她表白！知道了吧？能够华丽装饰头发的#r#t4033906##k，西琳也肯定会喜欢的！", 2, 2420017, false, true)
                        } else {
                            if (status === a++) {
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41059.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.gainExp(640000);
            cm.forceCompleteQuest(41059);
            cm.gainItem(4033906, -1);
            cm.gainItem(2001530, 25);
            cm.gainItem(4310085, 5);
            cm.dispose()
        }
    }
};