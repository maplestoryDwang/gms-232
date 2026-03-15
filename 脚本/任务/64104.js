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
            cm.sendNormalTalk_Bottom("#h0#，感谢你的演说。", 37, 9400600, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("您也别太在意。", 37, 9400600, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b感谢维尔纳村长，为我们提供庇护。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这么多的人聚在一起，最困难的事情就是定相同的目标。", 37, 9400600, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("但是我们大家的迫切心情都是一样的，所以我觉得已经达到一半的目的了。", 37, 9400600, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("过去斯库亚斯也同样收容了很多遇难者，这种事情经常有。", 37, 9400600, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我们从历史中学到过，要让人们团结起来就得向这样把大家聚在一起。我们今天的事迹也许会载入史册，被后代所传颂。", 37, 9400600, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b斯库亚斯是不会忘记历史的。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(64104);
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