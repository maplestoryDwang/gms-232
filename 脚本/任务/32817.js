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
            cm.sendNormalTalk_Bottom("哈哈哈，愚蠢的人类啊。我……", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("挂了。", 57, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#喂，喂，等等！你为什么不听人把话说完，随便挂断电话呢？", 37, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊，原来是人啊？我还以为是哪个魔王呢。", 57, 1530140, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("呵呵呵，你竟然知道我的真实身份了。我非要让你尝尝苦头……", 37, 1530140, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("挂了。", 57, 1530140, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#知道了，知道了！那么，#h0#队员，你的任务完成了吗？队长命令你马上报告。", 37, 1530140, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("虽然我对你比较不满，不过先不和你计较了。我为了让老师昏倒，接连好几个足球踢中了他，可是老师连动都没动一下。看来这个办法是行不通了。", 57, 1530140, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("那么该到我弗朗西斯出马的时候了。你现在马上来3楼#b科学室#k。让你见识一下我炼金术的实力。", 37, 1530140, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b科学室#k……？为什么突然要去#b科学室#k？", 57, 1530140, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32817, "");
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
            cm.sendNormalTalk_Bottom("你已经消灭足够的尘土怪了吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("很好，做得不错。要是不能及时消灭尘土怪的话，就会产生闹事者的。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊……话说回来，这家伙现在好像要醒了。汪汪！", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32817);
                        cm.dispose();
                        cm.gainExp(Math.pow(cm.getLevel(), 3))
                    }
                }
            }
        }
    }
};