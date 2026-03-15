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
            cm.askAcceptDecline("这里到处都是#e#b#o9390809##k#n！好，我们这次也努力各自击退#b#e30只#k#n吧！", 0, 9390260)
        } else {
            if (status === a++) {
                cm.forceStartQuest(17628, "");
                cm.sendNormalTalk("#b(不知为何，我有种不祥的预感……)", 2, 9390260, false, false)
            } else {
                if (status === a++) {
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17628.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哈哈…… 看吧。这次不也是…… 咳咳…… 没什么状况嘛。", 0, 9390260, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("…… 是很庆幸，但…… 我们快收拾下回去吧。", 2, 9390260, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，好的。现在它们不会再来了吧。", 0, 9390260, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哦，那个…… 好像有几个阿库旁多逃走了。", 0, 9390260, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的。但就那样放走它们应该比较好。", 2, 9390260, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("什么意思。既然来到这里，就要做得彻底。走吧！", 0, 9390260, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("等一会儿。你不觉得奇怪吗？3次的抵抗都这么弱。这其中可能有诈。", 2, 9390260, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你的疑心会不会太重了？还是你现在害怕了？不要担心了，跟我来吧！我先到#b#m865020300##k等你！", 0, 9390260, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(17628);
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
};