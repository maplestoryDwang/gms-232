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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("阿尔法能分辨出贝塔的表情，这是真的吗？在我看来所有的表情都一样啊。", 33, 2400007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("因为一直在一起，所以多少能看得懂。她太单纯了，很容易分辨也说不定。", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那么，贝塔现在的表情是什么意思呢？", 33, 2400007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("…………", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯……肚子饿了？", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我不饿。", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不饿的话……就是困了？", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("一点都不困。", 41, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("喂，怎么一个都没答对？你真的搞清楚了吗？", 33, 2400007, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("不可能啊，这么单纯的家伙除了睡就是吃啊……#face1#什么呀，你那表情。你又在认为我无可救药了吧？", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face5#哇，阿尔法。答对了。", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face7#…………", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(41406, "");
                                                            cm.forceStartQuest(41406, "");
                                                            cm.forceCompleteQuest(41406);
                                                            cm.gainExp(14000000);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.gainItem(4310085, 35);
                                                            cm.gainItem(2001530, 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41406.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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