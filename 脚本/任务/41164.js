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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41164.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askMenu("噢，我正在等你呢。找到犯人了吗？我马上把他从武陵赶出去，不再让他接近武陵。\r\n#b#L0#武旦是犯人#l\r\n#b#L1#没找到犯人#l", 0, 2440007)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.sendNormalTalk("（算了，还是饶他一回吧。）那个……还没找到犯人，对不起。", 2, 2440007, false, true)
                } else {
                    cm.sendNormalTalk("那个……还没找到犯人，对不起。", 2, 2440007, false, true)
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，果然。虽然留下了痕迹，但是没有足够的证据去追踪犯人，也没什么办法了。真是抱歉，我给你委托了太过分的事情，让你白跑一趟。", 0, 2440007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不，请别介意。(额，真是过意不去)", 2, 2440007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("总之辛苦你了，剩下的事情就由我自己来亲自调查吧。", 0, 2440007, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(41164, "NpcSpeech=24400071");
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
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};