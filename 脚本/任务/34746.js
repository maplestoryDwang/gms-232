var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(34746, "talk") > 0) {
        start2(c, b, a)
    } else {
        start1(c, b, a)
    }
}

function start1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#一闻到就会打喷嚏吧？\r\n虽然效果很好，但缺点是持续时间太短……", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不是缺点，是优点好不好？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face13#啊！差点忘了！我得给你做个耳朵！", 36, 3002110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("什么意思？我有耳朵。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我得帮你做个#b狐狸耳朵#k！我们村#b几乎没有外地人过来#k。\r\n要是大家看到你之后被吓一跳就糟了。", 36, 3002110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯？制作耳朵？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("还不如从尖耳狐狸村的朋友中间选拔守备队员。那样不是更好吗？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face6#嗯？尖耳狐狸村的朋友们？……", 36, 3002110, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我是个外地人，让我保护尖耳狐狸村……不是很奇怪吗？", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face10#嗯？啊……那倒是，不过……", 36, 3002110, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.updateInfoQuest(34746, "");
                                                    cm.warp(940204101, 0)
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

function start2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（说得太过分了吗？看上去好像有点难过……）", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#听我说，#h0#。如果我们的作战成功，我们就能招募到更多的队员！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(34746, "talk2=1;talk=1");
                    cm.sendNormalTalk_Bottom("#face5#好了，快去周围采点毛茸树叶来。我来给你制作狐狸耳朵！\r\n我玛鲁可是#b制作高手#k！", 36, 3002110, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("你去#face0##b#m410000113##k消灭#o2400252#，搜集50个毛茸树叶。\r\n这次还是#b左边往上走#k。", 36, 3002110)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34746, "");
                            cm.OnStartNavigation(410000113, 0, "", 0);
                            cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#全都搜集到了？好的……看看我的手艺吧。", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(24169048);
                cm.forceCompleteQuest(34746);
                cm.updateInfoQuest(34746, "talk2=1;exp=1;talk=1");
                cm.gainItem(4036316, -50);
                cm.dispose()
            }
        }
    }
};