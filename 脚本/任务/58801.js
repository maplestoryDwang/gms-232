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
            cm.sendNormalTalk_Bottom("#face0#真是的，这么不给面子。我什么时候妨碍你告白了？", 37, 9111002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#总之，先让鵺消气再说。", 37, 9111002, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#是你拉我过来的，所以现在你得帮我！", 36, 9111002)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#好，你先去找鵺，让他准备好告白时用的礼物跟情书。", 37, 9111002, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#然后你去找竹野子，把她单独叫出来，再安排他们俩见面。", 37, 9111002, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(58801, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58801.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("鵺，为了表示我们的歉意，我们决定协助你告白。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……。协……协助我告白？", 37, 9111004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯嗯，哈……既然你们主动要帮忙，我就欣然接受咯。", 37, 9111004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不过，你必须先准备好情书和礼物。我们会帮你安排和竹野子见面。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#情书和礼物……？……唔……好，这点小事有什么难的……", 37, 9111004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我这就去准备，我们蘑菇神社见。", 37, 9111004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(58801);
                                    cm.dispose();
                                    cm.warp(800000000, 5, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};