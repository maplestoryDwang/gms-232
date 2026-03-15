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
            cm.sendNext("#h #，我正在等你。这段时间，我一直在调查除我之外的其他工作员有没有受到阿卡伊勒的影响。还好其他工作员没事。过去的情况怎么样了？")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("还好及时除掉了阿卡伊勒的分身。")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("这是我最近听到的最好的消息之一。那么，阿卡伊勒的阴谋已经全部阻止了吗？")
                } else {
                    if (status == a++) {
                        cm.sendNextPrevS("据说阿卡伊勒的分身仍然存在。伦娜说可以通过时间裂缝到达他所在的次元缝隙。")
                    } else {
                        if (status == a++) {
                            cm.sendNextPrev("这次必须真的把他打败才行。要是可以的话，我很想让#h #你休息一下，但是现在不是时候，非常抱歉。")
                        } else {
                            if (status == a++) {
                                cm.sendOk("准备好之后，请重新和我对话。")
                            } else {
                                if (status == a++) {
                                    cm.forceStartQuest();
                                    cm.forceCompleteQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31179.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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