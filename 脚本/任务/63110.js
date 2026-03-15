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
            cm.sendNormalTalk("你找到解决我恐高症的办法了吗？", 5, 9400322, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯，我想我找到了。", 3, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真的吗？", 5, 9400322, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b嗯，你戴上这个眼罩坐上去试试", 3, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，现在要怎么做？", 5, 9400322, true, true)
                        } else {
                            if (status === a++) {
                                cm.warp(867113724, 0, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63110.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {
    if (cm.getNumberFromQuestInfo(63110, "endCheck") > 0) {
        end2(c, b, a)
    } else {
        end1(c, b, a)
    }
}

function end1(d, c, b) {
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
            cm.sendNormalTalk("你找到解决我恐高症的办法了吗？", 5, 9400322, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯，我想我找到了。", 3, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真的吗？", 5, 9400322, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b嗯，你戴上这个眼罩坐上去试试。", 3, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，现在要怎么做？", 5, 9400322, true, true)
                        } else {
                            if (status === a++) {
                                cm.warp(867113724, 0, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end2(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("#b哦，从口袋里掉出了什么东西……好像是钥匙。", 3, 0, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("啊，那是我刚捡到的。我用不上，丢了吧。", 5, 9400322, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("#b这钥匙可以给我吗？", 3, 0, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("你要用来干嘛？我无所谓。你拿去好了。", 5, 9400322, true, true)
                    } else {
                        if (status === b++) {
                            var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                            cm.getPlayer().getTopMsgByItem(4036000, "获得了可以开启巨门的钥匙。(" + a + "/12)");
                            cm.forceCompleteQuest(63110);
                            cm.gainItem(4036011, 1);
                            cm.gainItem(4036049, -1);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};