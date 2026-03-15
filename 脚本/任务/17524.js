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
            cm.sendNormalTalk("这里是贝勒德还是心树的时候，由他的心脏构成的空间。", 0, 9390120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为了不忘记他，我用我的力量创造出了这里，等待有一天他能回来。但是堕落持续了太长的时间，我怀疑他还能不能回来。", 0, 9390120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("贝勒德是个巨大的巨人。如果能破坏掉头部，应该就能把他打倒。不过那并不容易。因为他的手和脚一定会对你造成阻碍。", 0, 9390120, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("先把贝勒德的腿脚破坏掉，也是方法之一。如果能破坏掉贝勒德的四肢，应该就能更容易地打倒他。当然，也可以直接攻击头部，不过那并不容易。", 0, 9390120, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("你能帮帮我吗？", 0, 9390120)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(17524, "");
                                cm.sendNormalTalk("谢谢。那就拜托了。", 0, 9390120, false, true)
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
            cm.sendNormalTalk("我在你的灵魂中注入了可以净化贝勒德的气息。", 0, 9390120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("总有一天他心脏中的灵魂一定会得到净化。", 0, 9390120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("现在我该消失了。通过我为你打开的这条路，你可以随时再见到我。", 0, 9390120, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(17523);
                        cm.dispose()
                    }
                }
            }
        }
    }
};