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
            cm.sendNormalTalk("你没看到那些孩子吗？他们好像往这边跑过来了。", 2, 1013404, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我光忙着收拾行李了。不过我把这个送给你。应该能帮得上忙。", 4, 1013401, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这是含有神秘力量的#i2630359# #r#t2630359##k。它可以帮助你找到想要的东西。", 4, 1013401, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("看上去就像是普通的海螺啊？该怎么启动呢？", 2, 1013404, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b把尖的那头放到耳边，然后集中精神#k。就能听到远处的声音了。怎么样？是不是很神奇？", 4, 1013401, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("看来真的只是个普通的海螺……。", 2, 1013404, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("对了，我有个问题。如果周围的怪物太多，想听的声音就会被嘈杂的声音所掩盖。也就是说，你必须先清理掉周围的怪物。", 4, 1013401, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("消灭200个#b危险的陶瓷兔#k，应该就差不多了。", 4, 1013401)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(35959, "");
                                            cm.sendNormalTalk("你要现在去和怪物战斗吗？那，那我先躲在这里。", 4, 1013401, false, true)
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
            cm.sendNormalTalk("真了不起！！", 4, 1013401, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(35959);
                cm.gainExp(1427698);
                cm.dispose()
            }
        }
    }
};