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
            cm.sendNormalTalk("那边，请小心。公主马上就要经过这里了。", 4, 9400964, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b公主？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是，在冒险岛世界最美丽的、我们蘑菇王国的碧欧蕾塔公主即将降临日冕庆典。你们可要知道这是一种荣幸。\r\n对了，如果有人妄想要碰公主的手，那我可不会坐视不管的哦。", 4, 9400964, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu("#b啊……嗯……\r\n#L0#我会小心的。#l \r\n#L1#我没有兴趣。#l", 24, 0)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("原来跟你能说得通啊。那我就给你一份珍贵的情报吧。", 4, 9400964, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("碧欧蕾塔公主亲自为参与<公主游行>的人准备了礼物。我们人美心更美的公主殿下亲自！准备的哦。", 4, 9400964, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("在举行公主游行的时候，点击Ctrl（攻击） 键欢呼的话，就能获得特别礼物--#t2630988:#和#t2630989:#。", 4, 9400964, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("公主的游行从每天早上10点到晚上12点，在每个整点每隔30分钟就会出现，请参考一下。", 4, 9400964, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我再跟你说一次，我不会原谅迷上了公主的人的。", 4, 9400964, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(64686);
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