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
            cm.sendNormalTalk_Bottom("#face0#神那，神那。看来你已经适应该如何在冒险岛控制灵力了嘛。和之前相比，你提供给我的灵力也多了不少呢。", 37, 9130081, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#有了这些灵力，我维持原本模样的时间也能延长许多了……只要多少控制一下外形的大小，就完全可以让你坐在我的身上一起移动了。", 37, 9130081, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#不过，就算你所提供的灵力已经足够了，但现在的我却没有合适的容器去收置这些灵力……如果能得到什么可以扩张灵力储备的东西就好了……不知道枫叶山丘的隆景手里有没有什么合适的东西呢？他似乎负责调配着多种多样的东西，你记得去找他问问看吧。", 37, 9130081, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哦哦，很好，就是这个！有了这个寄宿着灵力的蘑菇，就足够让我用来扩张灵力储备量的了。你稍等一下哦。", 37, 9130081, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#（嚼嚼）", 37, 9130081, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……嗯，很好，我能感觉得到。这样一来，完全可以让你骑在我的身上进行移动啦。如果你需要骑上来的时候，就不要客气尽管说哦。", 37, 9130081, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(57461, "");
                                    cm.updateInfoQuest(500833, "");
                                    cm.forceStartQuest(64746, "");
                                    cm.forceCompleteQuest(64746);
                                    cm.forceCompleteQuest(62417);
                                    cm.forceStartQuest(9571, "0");
                                    cm.forceStartQuest(31190, "0");
                                    cm.forceStartQuest(42102, "0");
                                    cm.forceStartQuest(7621, "");
                                    cm.forceCompleteQuest(57461);
                                    cm.forceStartQuest(57458, "");
                                    cm.forceCompleteQuest(57458);
                                    cm.updateInfoQuest(1073, "4200=10;4210=201");
                                    cm.gainItem(1552002, 1);
                                    cm.gainItem(1142507, 1);
                                    cm.playerMessage(5, "获得<操控妖怪之人的勋章>勋章");
                                    cm.playerMessage(-1, " 获得<操控妖怪之人的勋章>勋章");
                                    cm.forceCompleteQuest(57484);
                                    cm.forceStartQuest(57459, "");
                                    cm.forceCompleteQuest(57459);
                                    cm.updateInfoQuest(1073, "4200=10;4210=201;4211=201");
                                    cm.forceStartQuest(57460, "");
                                    cm.forceCompleteQuest(57460);
                                    cm.changeJob(4212);
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