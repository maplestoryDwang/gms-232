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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31374.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk("哇！蝴蝶结？我喜欢粉色！我也想要粉色蝴蝶结！", 4, 2192027, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(似乎还不知道是个胸针。)#k", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(31374, "NpcSpeech=21920271");
                    cm.dispose()
                }
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk("蝴蝶结胸针？我怎么会有那种东西，\r\n也没有女朋友可以送啊。", 4, 2192028, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(啊，单身狗……既然不是这个人，那剩下的是……)#k", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(31374, "NpcSpeech=21920271/21920282");
                    cm.dispose()
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk("蝴蝶结胸针吗？", 4, 2192018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(找到了！)#k", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(31374, "NpcSpeech=21920271/21920282/21920183");
                    cm.dispose()
                }
            }
        }
    }
};