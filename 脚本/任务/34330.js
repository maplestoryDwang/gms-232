var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest(34330);
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("嗯…梦境正在减弱。", 4, 3003209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你先收下这个吧。说不定我什么时候就会重新变为清道夫了。", 4, 3003209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这是我变为清道夫时发现的，我一直把它带在身上。看来那时我还保留了意识。不知道它能不能帮到你。", 4, 3003209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("话说，防毒面具最终还是没有来，看来他受到的冲击很大。", 4, 3003209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不过，你不要太担心。他肯定会恢复的。", 4, 3003209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#ho# 你…………", 4, 3003209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我要击退路西德。", 2, 3003210, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我不阻拦你，#ho#，希望你能赢。为了你，还有，为了我们。", 4, 3003209, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(34330);
                                            cm.forceStartQuest(34343, "");
                                            cm.gainItem(1712003, 1);
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