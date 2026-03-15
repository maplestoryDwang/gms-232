var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextNoESC("怎么才能从这里出去呢？", 1064001)
        } else {
            if (status === a++) {
                cm.sendNextSNoESC("那边有个通往外面的出口。只要通过出口出去就行。")
            } else {
                if (status === a++) {
                    cm.sendNextNoESC("我已经试过好几次了，但是没办法出去。", 1064001)
                } else {
                    if (status === a++) {
                        cm.sendNextSNoESC("没办法出去？出口堵住了吗？知道了，我去试试看。")
                    } else {
                        if (status === a++) {
                            cm.sendOkNoESC("快去帮我确认一下。我真的很想出去……", 1064001)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest();
                                cm.dispose()
                            } else {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextNoESC("确认了吗？", 1064001)
        } else {
            if (status === a++) {
                cm.sendNextSNoESC("嗯，没问题，可以通往外面。")
            } else {
                if (status === a++) {
                    cm.sendNextNoESC("真的吗？看来只有我没办法出去……", 1064001)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest();
                        cm.dispose()
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
};