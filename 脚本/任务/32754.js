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
            cm.sendNormalTalk_Bottom("命运之转学生！辛苦你了。", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你在拿我开玩笑呢吗？", 57, 1530041, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("怎么会？我不过是说出了事实而已。消灭尘土怪和闹事者，守护学生们的转校生……有什么理由不让人另眼相看呢？", 37, 1530040, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("而且，这个世界的人际关系和那个世界的人际关系无比相似地牵连在一起……不管怎样，我都觉得这两个世界之间有一条强有力的命运纽带，将它们联系在一起。", 37, 1530040, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不管怎样，辛苦你了。虽然原本打算尽量低调行事的方针似乎已经时过境迁了。", 37, 1530040, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("直到下一个闹事者出现为止，你要恪守神兽国际学校学生的职责哦。", 37, 1530040, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(32754);
                                    cm.forceCompleteQuest(32701);
                                    cm.finishAchievement(1206);
                                    cm.gainItem(4310125, 2);
                                    cm.dispose();
                                    cm.warp(330002120, 0)
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