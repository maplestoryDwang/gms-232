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
            cm.sendNormalTalk("昨晚我坐在岩石上练习乐器, 因为我想给蛋带来更优美的音乐. 不过, 就在我练习时天地间突然一片通明. 我还以为我练习得太勤奋, 不知不觉天就亮了呢. ", 0, 2081004, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
                cm.effect_Direction("Effect/Direction18.img/StarForce/Scene0", 1, 0, -83)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.sendNormalTalk("我抬起头来一看, 恰好看见一颗流星正在坠落! 非常大、非常亮的流星哦. 所以, 我向流星许了愿, 希望龙和哈夫林能像以前那样和平相处. 你说我的愿望会实现吗? ", 0, 2081004, false, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("(从#p2081004#那里了解到, 原来那道可疑的光是流星. 去将了解到的一切转告#p2081000#吧. )\r\n", 2, 2081004)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(3874, "");
                            cm.sendNormalTalk("你说你要去告诉爷爷? 啊啊, 那我就完蛋了, 如果知道我晚上跑到外面去, 爷爷肯定会骂我的, 这可怎么办? ", 0, 2081004, false, false)
                        } else {
                            if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3874.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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