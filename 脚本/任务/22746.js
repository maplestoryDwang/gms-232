var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face0#来，你就相信我好了！\r\n我会严格对你进行训练的！！", 36, 1531003, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#先去捕猎#b火独眼兽#k吧！！", 36, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face1##b火独眼兽#k虽然长相奇特，但口味极佳，营养价值也很高。", 36, 1531003, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("让我去抓你想吃的东西就是修炼吗？", 36, a, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face0#咳咳，不是啦，这只是为了修炼而已！！", 36, 1531003, true, true)
                        } else {
                            if (status === b++) {
                                cm.askYesNo_Bottom("#face0#那，你去捕猎#b50只火独眼兽#k，再收集#b10个火独眼兽的尾巴#k回来吧，\r\n准备好了吗？", 36, 1531003)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face0#在#b树舞之地#k有很多的#b火独眼兽#k，\r\n从#b右侧#k出去打猎就可以了。", 36, 1531003, false, true)
                                } else {
                                    if (status === b++) {
                                        cm.forceStartQuest(22746, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22746.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#哦！辛苦你了，把火独眼兽尾巴给我吧。\r\n我给你换成亚乌的料理。\r\n\r\n#b#i2010044#  #t2010044#", 36, 1531003, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(22746);
                cm.gainExp(10500);
                cm.gainItem(2010044, 30);
                cm.gainItem(4000007, -10);
                cm.dispose()
            }
        }
    }
};