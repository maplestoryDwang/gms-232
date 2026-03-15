var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if ("talk=1".equals(cm.getInfoQuest(34743))) {
        end(c, b, a)
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
            cm.sendNormalTalk_Bottom("#face15#祝贺你成为了尖耳守备队的一员！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face15#我们的目标是履行#b狐神给予的使命#k！\r\n记住，我们必须努力确保尖耳狐狸村的安全！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b狐神给予的使命#k……？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face15#呵呵！#b狐神跟我很要好！#k", 36, 3002110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("啊，是吗？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face8#怎么？你也和大人们一样不相信我吗？我说的是真的！", 36, 3002110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face8#我见到狐神，是很久以前的事情了。", 36, 3002110, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.warp(940204109, 0)
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
            cm.sendNormalTalk_Bottom("#face15#在那之后，我们经常在梦里一起玩，一起修炼！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯……但是……其他队员在哪呢？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face6#那个嘛……", 36, 3002110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face5##h0#！欢迎你！你是#b尖耳守备队的第一名队员！#k\r\n怎么样？有没有感觉很荣幸？哈哈！加入之后，就永远是队员！千万别忘了！", 36, 3002110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……我就知道会是这样。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34743, "");
                                cm.forceCompleteQuest(34743);
                                cm.gainExp(16918334);
                                cm.updateInfoQuest(34743, "exp=1;talk=1");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};