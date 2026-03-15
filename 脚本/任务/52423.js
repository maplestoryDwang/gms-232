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
            cm.sendNormalTalk("准备好要学武功了吗？", 0, 9330209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯。那么就送你到我准备的修炼场去。", 0, 9330209, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("准备好了吗？", 0, 9330209)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那么，现在帮忙进行传送。", 0, 9330209, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(52423, "");
                            cm.dispose();
                            cm.warp(743000500, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/52423.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("要战胜我准备的考验。已经有了大幅的成长。", 9, 9330209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("可是还没像父亲那么强。还要更精进", 3, 9330209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("很好的态度。现在已经准备好在宏武团学习更强大的武功了。", 9, 9330209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我现在教你。", 9, 9330209, true, false)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(52423);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};