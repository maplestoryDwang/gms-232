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
            cm.sendNormalTalk_Bottom("#h0#，你应该也听到传闻了吧。围绕着阿白实习老师的一日约会劵问题，同学们之间展开了斗争。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("虽然阿白实习老师只是说周末也可以进行面谈…… 但传闻却越演越烈。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("所以，#h0#，你必须夺取一日约会劵。", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("为什么是我？我没兴趣。", 56, 1530074, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("一日约会劵是纷争的根源。无论是谁获得一日约会劵，都会引起问题，所以干脆#h0#你去获得约会劵，然后将其撕毁。这件事并不难。", 37, 1530070, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("如果想争夺约会劵，只要前往3年级教室就行了。祝你好运。", 37, 1530070, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(33018, "");
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
            cm.sendNormalTalk_Bottom("又是你？你又来瞎掺和什么？", 37, 1530211, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哼，什么事情都要掺和……不过没关系。反正与阿白实习老师的一日约会劵是属于我的。", 37, 1530211, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(33018);
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.dispose()
                }
            }
        }
    }
};