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
            cm.sendNormalTalk_Bottom("#face2#黑魔法师死后，在埃斯佩拉的海中发现了失去意识的蜘蛛王威尔。", 36, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#我们发现他时，立刻将其秘密转移到冒险岛世界，直到不久前他才恢复意识。", 36, 1540451, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不久前？那么……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#对，他已经醒来。幸好他精神没有受损，也比预想中要配合一些。", 36, 1540451, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#太过顺从，反而引人生疑。", 36, 1540451, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("#face2#汉斯大人现下正在审问他。\r\n你应该也有很多疑问吧。不如和我一起去看看？", 36, 1540451)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#在右边坐船移动即可。", 36, 1540451, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(37302, "");
                                        cm.OnStartNavigation(993120000, 0, "east00", 0);
                                        cm.setNumberForQuestCustomData(3004300, 993130000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37302.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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