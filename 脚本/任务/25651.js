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
            cm.sendNormalTalk("现在看来，原来我感受到的是你体内的黑魔法师痕迹。", 0, 2133008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("封印黑魔法师的时候，我身体里也沾染了黑暗力量。", 2, 2133008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("奇特的是，你的光之力量和黑暗力量散发着相似的波动。两者应该相互排斥才会，怎么会有这种感觉。", 0, 2133008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("什么意思？", 2, 2133008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这应该是我说啊。以前不觉得，现在看来，你和黑魔法师真的很相似，就好像是双胞胎一样。", 0, 2133008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("(是因为我体内的黑暗力量吗？……听到这样的话，心情就很不好。)", 2, 2133008, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("现在我没什么可以帮你了。我要隐居在这里积蓄力量。你回到你的世界中去吧。", 1, 2133008, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(25651);
                                        cm.gainExp(158486);
                                        cm.gainItem(2430884, -1);
                                        cm.dispose();
                                        cm.warp(300000000, 0, false)
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25651.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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