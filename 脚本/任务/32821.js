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
            cm.sendNormalTalk_Bottom("哇，氛围真好~现在敌人已经完全沦陷啦。剩下的就是最后一击啦！好了，那么南哈特队员，接下来该怎么办呢？", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("现在就剩下最后一件事了，那就是告白。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("告，告白？你是说我们这种荒谬的计划成功了？", 37, 1530080, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("现在下这个结论还为时过早。因为女人在接到正式告白之前，就算得到或者给出再多的爱情信号，也是不会承认交往的。", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那么奥尔卡为什么……？我都已经正式告白了啊……", 37, 1530140, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("应该如何正式告白呢？", 37, 1530080, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("告白所必须的三个要素，正是，有氛围的场所、浪漫的音乐以及惊喜……我们最好先去物色适合告白的场所。", 37, 1530070, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("听见了吗，各位？那么现在开始解散去寻找适合告白的场所吧。我和米哈尔队员负责校内，南哈特队员和弗朗西斯队员负责学校周边。", 37, 1530100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#h0#队员去离学校远一点的地方仔细搜索一下吧！我们学校的未来就掌握在各位的手中了。那么现在马上出动！", 37, 1530100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("出动！", 37, 1530140, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b（那么应该先前往空地才行。）#k", 57, 1530103, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.dispose();
                                                        cm.warp(330002313, 0)
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
            cm.warp(330002323, 0);
            cm.dispose()
        }
    }
};