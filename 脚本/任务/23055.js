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
            cm.sendNormalTalk("嗯，没什么，我就是有件东西要给#h0#，所以才联系了你。", 0, 2151004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这是我特意准备的麦林弹。希望这个能帮你一起对抗黑色之翼。", 0, 2151004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这个麦林弹到底是什么？", 2, 2151004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这是我亲手制作的特制麦林弹。它的体积比原来的麦林弹更大，而且更加尖锐。我为了制作这个东西，都熬了几天几夜。", 0, 2151004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("本来是做给自己用的，但我想#h0#用着会更好。我好期待你用这个后变得更强的样子啊。", 0, 2151004, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(23055);
                                cm.sendNormalTalk("已经把麦林弹给你了，希望这个能帮你成为更强的反抗者，对抗黑色之翼。", 0, 2151004, true, false);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23055.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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