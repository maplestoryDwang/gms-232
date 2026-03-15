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
            cm.sendNormalTalk_Bottom("#face0#昨天的战斗之后，士兵们的武器受损严重。\r\n有些要修理，有些要重铸，可现在我们没有足够的铁。", 36, 3004435, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#所以战斗结束后，就来收集些剩下的材料。", 36, 3004435, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#但是这边的#r怪物海鸥#k也快成灾了。\r\n明明冒险岛世界的海鸥很可爱来着，这里的海鸥为什么都凶巴巴的？", 36, 3004435, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#噶啊！！！", 36, 3004462, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("#face0#哎呀，我的耳朵。\r\n怎么样，你能帮忙吗？", 36, 3004435)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(37505, "");
                                cm.OnStartNavigation(993150021, 0, "west00", 37505);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37505.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#还好有你，事情才能顺利解决。", 36, 3004435, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(37505);
                cm.dispose()
            }
        }
    }
};