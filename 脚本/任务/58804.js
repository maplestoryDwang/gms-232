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
            cm.sendNormalTalk_Bottom("鵺说要先去告白场所等候，已经走掉了……。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是吗？我们也去瞧瞧看他能否告白成功吧。", 37, 9111002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯呢。我们去四岔路吧。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(58804, "");
                        cm.dispose();
                        cm.warp(800021114, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58804.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你！！！混蛋！！你骗我。", 37, 9111004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你跑哪里去了？我们都看见竹野子在那里等你。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#…………不可能。我明明一直在妖怪森林里等竹野子！", 37, 9111004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我晕死，我不是告诉你约会场所改到四岔路了吗。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呃呃呃呃啊啊啊啊啊……！！！！！！！！！！！", 37, 9111004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#没办法了。我居然犯这么低级的错误……只好下次再约了。", 37, 9111004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我看你似乎能为我的告白之行帮上挺多忙的，就屈尊做你的同伴吧。", 37, 9111004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(58804);
                                        cm.setNumberForQuestInfo(58711, "4", 3);
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