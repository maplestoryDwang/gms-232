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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63087.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63087.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#i1202237:##t1202237#\r\n#b这个好像勇士之地的帅气勇士#p9400210#。他的刀刃现在修好了吧？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#i1202238:##t1202238#\r\n#b这个很像身材高大却像孩子一样的#p9400217#。不对，他现在身材不高大了！该换个形容词，用“可爱”来形容他。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#i1202239:##t1202239#\r\n#b这个很像一片雪白天地的思索之地里的#p9400221#……#p940221#真的帮了我很多……", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#i1202240:##t1202240#\r\n#b这个跟画画的小孩#p9400222#一模一样。他真是个可爱的孩子！现在他还在思索之地开心地画画吗？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b我在异逝界经历的事情历历在目……不可能是做梦。\r\n这些是他们为了让我记得异逝界，才特别送我的礼物吗？……\r\n将来还能再见到他们吧……", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(63087);
                                cm.gainExp(317600);
                                cm.updateInfoQuest(63087, "exp=1");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};