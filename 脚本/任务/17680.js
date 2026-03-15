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
            cm.sendNormalTalk_Bottom("呜哦……我竟然中招了……", 33, 9390246, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好啦，现在可以放弃乖乖地束手就擒了吧。", 57, 9390246, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(17680, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17680.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("见鬼。我怎么能就这么被捕……。嗯？哈哈哈……。难道是海之神的祝福要降临于我。", 33, 9390246, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("刚刚突然是什么声音？", 57, 9390246, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是，是深海巨妖！！大家快躲开！！", 37, 9390217, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那是什么。我们舰船出什么事了吗？", 57, 9390246, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("看来是遭到#r#e海里的暴徒深海巨妖#k#n袭击了。好了，打算怎么办呢。你现在好像不是在这儿跟我你推我搡玩摔跤的时候哦。", 33, 9390246, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("呃哦……先去救莱文吧。", 57, 9390246, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("通过#e#b前面的传送#k#n过去。", 57, 9390246, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(17680);
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
};