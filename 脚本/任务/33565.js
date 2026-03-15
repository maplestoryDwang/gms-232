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
            cm.sendNormalTalk_Bottom("你好啊，我听说你好像很厉害呢。", 36, 9070100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我来介绍一下，我叫马修勒，我是在遥远的地方听说了霸王的传闻才来了这里的。", 36, 9070100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("如果你想要了解所有人都很畏惧的霸王，就来找我。", 36, 9070100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("如果你有力量对抗乌鲁斯，马修勒会让你见识一下什么叫做“真正的财物”的。", 36, 9070100, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("如果你有兴趣了，我现在就立刻派出专用飞机，让你可以来我这里，你过来我们再详谈如何？", 36, 9070100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("好吧，我现在就立刻派出专用飞机，如果你有其他事情，可以日后再通过次元之镜来我这里。", 36, 9070100, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(33565);
                                    cm.forceStartQuest(33600, "0");
                                    cm.forceStartQuest(33601, "0");
                                    cm.forceStartQuest(33602, "0");
                                    cm.forceStartQuest(33620, "0");
                                    cm.forceStartQuest(33621, "0");
                                    cm.forceStartQuest(33622, "0");
                                    cm.forceStartQuest(33623, "0");
                                    cm.forceStartQuest(33624, "0");
                                    cm.forceStartQuest(33625, "0");
                                    cm.forceStartQuest(33626, "0");
                                    cm.forceStartQuest(33627, "0");
                                    cm.forceStartQuest(33628, "0");
                                    cm.forceStartQuest(33553, cm.getMapId());
                                    cm.dispose();
                                    cm.warp(970072200, 0, false)
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